import React from "react";
import dynamic from "next/dynamic";
import MapProvider from "@/contexts/Map";
import { StyledContainer } from "./styles";

const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

const SearchPOIMap = () => {
  return (
    <MapProvider>
      <StyledContainer>
        <DynamicComponent />
      </StyledContainer>
    </MapProvider>
  );
};

export default SearchPOIMap;
