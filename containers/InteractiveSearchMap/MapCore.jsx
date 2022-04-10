import React from "react";
import Map from "@/components/Map";
import { MAP_KEY } from "@/utils/app.config";

import Search from "./Search";

import useMapLayer from "@/hooks/useMapLayer";

const options = {
  center: [-122.33, 47.6],
  zoom: 12,
  language: "en-US",
  authOptions: {
    authType: "subscriptionKey",
    subscriptionKey: MAP_KEY,
  },
};

const layerOptions = {
  iconOptions: {
    image: "pin-round-darkblue",
    anchor: "center",
    allowOverlap: true,
  },
};

const MapCore = () => {
  useMapLayer({
    options: layerOptions,
  });
  return (
    <>
      <Map options={options} />
      <Search />
    </>
  );
};

export default MapCore;
