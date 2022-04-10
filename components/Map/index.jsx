import React, { memo, useContext, useEffect, useState } from "react";
import * as atlas from "azure-maps-control";
import { MapContext } from "@/contexts/Map";
import { nanoid } from "nanoid";
import { StyledMapContainer } from "./styles";

const Map = ({ children, options = {} }) => {
  const {
    map,
    setMap,
    isMapReady,
    setMapReady,
    removeMap,
    setDataSource,
    setPopup,
  } = useContext(MapContext);
  const [mapId] = useState(nanoid());

  useEffect(() => {
    setMap(new atlas.Map(mapId, options));
    return () => {
      removeMap();
      setMapReady(false);
    };
  }, []);

  useEffect(() => {
    if (map) {
      map.events.add("ready", () => {
        setMapReady(true);
        const ds = new atlas.source.DataSource();
        map.sources.add(ds);
        setDataSource(ds);
      });

      setPopup(new atlas.Popup());
    }
  }, [map]);

  return (
    <>
      {!isMapReady && <div>Loading....</div>}
      <StyledMapContainer id={mapId}>
        {isMapReady && children}
      </StyledMapContainer>
    </>
  );
};

export default memo(Map);
