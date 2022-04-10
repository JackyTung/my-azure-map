import React, { useEffect, useState } from "react";

import { MAP_KEY } from "@/utils/app.config";
import * as atlas from "azure-maps-control";

import { StyledMapContainer, StyledProgress } from "./MapCore.styles";

import useSearchPOI from "@/hooks/useSearchPOI";
const MapCore = () => {
  const [map, setMap] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [isReady, setIsReady] = useState(false);
  const { isLoading, isSuccess, data, handleSearchPOI } = useSearchPOI();

  useEffect(() => {
    const tm = new atlas.Map("myMap", {
      // center: [-122.33, 47.6],
      // zoom: 12,
      language: "en-US",
      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: MAP_KEY,
      },
    });

    setMap(tm);
  }, []);

  useEffect(() => {
    if (map) {
      map.events.add("ready", function () {
        setIsReady(true);
        //Create a data source and add it to the map.
        const ds = new atlas.source.DataSource();
        map.sources.add(ds);
        setDataSource(ds);

        //Add a layer for rendering point data.
        const resultLayer = new atlas.layer.SymbolLayer(ds, null, {
          iconOptions: {
            image: "pin-round-darkblue",
            anchor: "center",
            allowOverlap: true,
          },
          textOptions: {
            anchor: "top",
          },
        });

        map.layers.add(resultLayer);

        handleSearchPOI({
          query: "gasoline-station",
          payload: {
            limit: 10,
            lat: 47.64452336193245,
            lon: -122.13687658309935,
            radius: 9000,
          },
        });

        //Create a popup but leave it closed so we can update it and display it later.
        const popup = new atlas.Popup();

        //Add a mouse over event to the result layer and display a popup when this event fires.
        map.events.add("mouseover", resultLayer, showPopup);

        function showPopup(e) {
          //Get the properties and coordinates of the first shape that the event occurred on.

          console.log("e.shapes[0]", e.shapes[0]);
          var p = e.shapes[0].getProperties();
          var position = e.shapes[0].getCoordinates();

          //Create HTML from properties of the selected result.
          var html = [
            '<div style="padding:5px"><div><b>',
            p.poi.name,
            "</b></div><div>",
            p.address.freeformAddress,
            "</div><div>",
            position[1],
            ", ",
            position[0],
            "</div></div>",
          ];

          //Update the content and position of the popup.
          popup.setOptions({
            content: html.join(""),
            position: position,
          });

          //Open the popup.
          popup.open(map);
        }
      });
    }
  }, [map]);

  useEffect(() => {
    if (isSuccess && data && dataSource && map) {
      dataSource.add(data);
      map.setCamera({
        bounds: data.bbox,
        zoom: 10,
        padding: 15,
      });
    }
  }, [isSuccess, data, dataSource, map]);

  return (
    <>
      {!isReady && <StyledProgress />}
      <StyledMapContainer id="myMap" />;
    </>
  );
};

export default MapCore;
