import React from "react";
import dynamic from "next/dynamic";
import { StyledContainer, StyledButton, StyledMapContainer } from "./styles";

const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

const Map = () => {
  return (
    <StyledContainer>
      <DynamicComponent />
      <StyledButton>Search</StyledButton>
    </StyledContainer>
  );
};

export default Map;
