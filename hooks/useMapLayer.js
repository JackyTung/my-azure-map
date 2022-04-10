import { useState, useEffect, useContext } from "react";
import { MapContext } from "@/contexts/Map";

import * as atlas from "azure-maps-control";

const useMapLayer = ({ options = {}, events = [] }) => {
  const [layer, setLayer] = useState(null);
  const { map, dataSource } = useContext(MapContext);

  // construct a layer
  useEffect(() => {
    if (map && dataSource) {
      const resultLayer = new atlas.layer.SymbolLayer(
        dataSource,
        null,
        options
      );
      map.layers.add(resultLayer);
      for (const event in events) {
        //Add a mouse over event to the result layer and display a popup when this event fires.
        map.events.add(event?.type, resultLayer, event?.func);
      }
      setLayer(resultLayer);
    }
  }, [map, dataSource]);

  return {
    layer,
  };
};

export default useMapLayer;
