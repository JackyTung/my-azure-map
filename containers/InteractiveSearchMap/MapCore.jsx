import React, { useEffect, useState } from "react";

import { StyledMapContainer, StyledProgress } from "./MapCore.styles";

const MapCore = () => {
  const [map, setMap] = useState(null);
  const [dataSource, setDataSource] = useState(null);
  const [isReady, setIsReady] = useState(false);
  return (
    <>
      {!isReady && <StyledProgress />}
      <StyledMapContainer id="myMap" />;
    </>
  );
};

export default MapCore;
