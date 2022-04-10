import React, { createContext, useState } from "react";
import { renderToStaticMarkup } from "react-dom/server";

export const MapContext = createContext({
  // map
  map: null,
  isMapReady: false,
  setMap: (map) => {},
  setIsMapReady: () => {},
  removeMap: () => {},

  // datasource
  dataSource: null,
  setDataSource: () => {},

  // popup
  popup: null,
  setPopup: () => {},
  handleShowPopup: () => {},
  handleClosePopup: () => {},
});

const MapProvider = ({ children }) => {
  const [map, setMap] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [popup, setPopup] = useState(null);
  const [isMapReady, setIsMapReady] = useState(false);

  const handleShowPopup = ({ options, popContent }) => {
    if (map && popup) {
      popup.setOptions({
        ...options,
        content: renderToStaticMarkup(popContent),
      });
      popup.open(map);
    }
  };

  const handleClosePopup = () => {
    if (popup) {
      popup?.close();
    }
  };

  return (
    <MapContext.Provider
      value={{
        map,
        setMap,
        isMapReady,
        setMapReady: setIsMapReady,
        removeMap: () => setMap(null),
        dataSource,
        setDataSource,
        popup,
        setPopup,
        handleShowPopup,
        handleClosePopup,
      }}
    >
      {children}
    </MapContext.Provider>
  );
};

export default MapProvider;
