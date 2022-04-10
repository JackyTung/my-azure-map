import { useState, useEffect, useContext } from "react";
import { MapContext } from "@/contexts/Map";

import * as atlas from "azure-maps-control";

const useMapPopUp = () => {
  const [popup, setpopup] = useState(null);
  const { map, dataSource } = useContext(MapContext);

  useEffect(() => {
    if (map) {
      setpopup(new atlas.Popup());
    }
  }, [map]);

  const handlePopUpClose = () => popup.close();

  return {
    popup,
    handlePopUpClose,
  };
};

export default useMapPopUp;
