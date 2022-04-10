import React from "react";
import dynamic from "next/dynamic";
import { StyledContainer } from "./styles";
import MapProvider from "@/contexts/Map";
const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

const InteractiveMapSearch = () => {
  return (
    <MapProvider>
      <StyledContainer>
        <DynamicComponent />
      </StyledContainer>
    </MapProvider>
  );
};

export default InteractiveMapSearch;
