import React from "react";
import dynamic from "next/dynamic";
import { StyledContainer } from "./styles";

const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

const InteractiveMapSearch = () => {
  return (
    <StyledContainer>
      <DynamicComponent />
    </StyledContainer>
  );
};

export default InteractiveMapSearch;
