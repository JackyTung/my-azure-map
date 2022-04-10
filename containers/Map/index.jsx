import React from "react";
import dynamic from "next/dynamic";

import { useDispatch } from "react-redux";
import { StyledContainer, StyledButton } from "./styles";
import { searchAddress } from "@/apis/map";
const DynamicComponent = dynamic(() => import("./MapCore"), { ssr: false });

import { searchAddressRequest } from "@/redux/map/slice";

const Map = () => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(
      searchAddressRequest({
        query: "1 microsoft way, redmond, wa",
      })
    );
    //searchAddress({ query: "1 microsoft way, redmond, wa" }).then(
    //  (response) => {
    //    console.log("response", response);
    //  }
    //);
  };
  return (
    <StyledContainer>
      <DynamicComponent />
      <StyledButton onClick={handleClick}>Search</StyledButton>
    </StyledContainer>
  );
};

export default Map;
