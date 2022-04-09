import React, { useEffect } from "react";

import { MAP_KEY } from "@/utils/app.config";
import * as atlas from "azure-maps-control";

import { StyledMapContainer } from "./MapCore.styles";

const MapCore = () => {
  useEffect(() => {
    new atlas.Map("myMap", {
      center: [-122.33, 47.6],
      zoom: 12,
      language: "en-US",
      authOptions: {
        authType: "subscriptionKey",
        subscriptionKey: MAP_KEY,
      },
    });
  }, []);

  return <StyledMapContainer id="myMap" />;
};

export default MapCore;
