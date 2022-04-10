import React, { useContext, createContext, useState } from "react";

export const MapContext = createContext({
  map: null,
  isMapReady: false,
  setMap: (map) => {},
  setIsMapReady: () => {},
  removeMap: () => {},
});

const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);
  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        isMapReady,
        setMapReady: setIsMapReady,
        removeMap: () => setMap(null),
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
