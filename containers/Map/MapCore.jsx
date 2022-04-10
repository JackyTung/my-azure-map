import React, { useEffect, useContext } from "react";
import { MapContext } from "@/contexts/Map";
import { MAP_KEY } from "@/utils/app.config";
import * as atlas from "azure-maps-control";
import Map from "@/components/Map";

import useSearchPOI from "@/hooks/useSearchPOI";

const options = {
  language: "en-US",
  authOptions: {
    authType: "subscriptionKey",
    subscriptionKey: MAP_KEY,
  },
};

const MapCore = () => {
  const { map, isMapReady, dataSource } = useContext(MapContext);
  const { isLoading, isSuccess, data, handleSearchPOI } = useSearchPOI();

  useEffect(() => {
    if (map && isMapReady) {
      const resultLayer = new atlas.layer.SymbolLayer(dataSource, null, {
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
    }
  }, [map, isMapReady]);

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
      <Map options={options} />
    </>
  );
};

export default MapCore;
