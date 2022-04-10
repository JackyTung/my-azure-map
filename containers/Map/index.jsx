import React from "react";
import dynamic from "next/dynamic";
import MapProvider from "@/contexts/Map";
import { StyledContainer } from "./styles";

const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

const Map = () => {
  return (
    <MapProvider>
      <StyledContainer>
        <DynamicComponent />
      </StyledContainer>
    </MapProvider>
  );
};

export default Map;
