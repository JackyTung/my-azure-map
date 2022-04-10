import React, { useEffect, useState } from "react";
import Map from "@/components/Map";
import { StyledMapContainer, StyledProgress } from "./MapCore.styles";
import { MAP_KEY } from "@/utils/app.config";

const options = {
  center: [-122.33, 47.6],
  zoom: 12,
  language: "en-US",
  authOptions: {
    authType: "subscriptionKey",
    subscriptionKey: MAP_KEY,
  },
};

const MapCore = () => {
  return (
    <>
      <Map options={options} />
    </>
  );
};

export default MapCore;
