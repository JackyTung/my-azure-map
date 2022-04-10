import { StyledContainer, StyledPanel } from "./Search.styles";
import { MapContext } from "@/contexts/Map";
import { MIN_SEARCH_INPUT_LENGTH, KEY_STROKE_DELAY } from "@/constants/search";
import React, { useContext } from "react";
import useSearchPOI from "@/hooks/useSearchPOI";
import POIBox from "@/components/POIBox";
import { useEffect } from "react";

const Search = () => {
  const { map, dataSource, handleShowPopup } = useContext(MapContext);

  const handleSuccessCallback = (resp) => {
    dataSource.add(resp);
    map.setCamera({
      bounds: resp.bbox,
    });
  };

  const { isSuccess, data, handleSearchPOI } = useSearchPOI({
    onSuccessCallback: handleSuccessCallback,
  });

  let searchInputLength = 0;

  const handleKeyUp = (e) => {
    const searchInput = e.target.value;
    if (searchInput.length >= MIN_SEARCH_INPUT_LENGTH) {
      setTimeout(function () {
        if (searchInputLength == searchInput.length) {
          console.log("search:", searchInput);
          handleSearch(searchInput);
        }
      }, KEY_STROKE_DELAY);
    }

    searchInputLength = searchInput.length;
  };

  const handleSearch = (query) => {
    if (!query) {
      return;
    }
    console.log("query", query);
    dataSource.clear();
    handleSearchPOI({
      query,
      payload: {
        lon: map.getCamera().center[0],
        lat: map.getCamera().center[1],
        maxFuzzyLevel: 4,
      },
    });
  };

  const handleResultItemClick = (id) => () => {
    const shape = dataSource.getShapeById(id);
    map.setCamera({
      center: shape.getCoordinates(),
      zoom: 17,
    });
  };

  const handleResultItemHover = (id) => () => {
    const shape = dataSource.getShapeById(id);
    const options = { position: shape.getCoordinates(), closeButton: false };
    const properties = shape.getProperties();

    handleShowPopup({
      options,
      popContent: (
        <POIBox
          title={properties?.poi?.name || properties?.address?.freeformAddress}
          address={properties?.address?.freeformAddress}
        />
      ),
    });
  };

  return (
    <StyledContainer id="search">
      <div className="search-input-box">
        <div className="search-input-group">
          <div className="search-icon" type="button"></div>
          <input
            id="search-input"
            type="text"
            placeholder="Search"
            onKeyUp={handleKeyUp}
          />
        </div>
      </div>
      <StyledPanel id="results-panel">
        {data &&
          data?.features?.map((d) => {
            const title =
              d?.properties?.poi?.name ||
              d?.properties?.address?.freeformAddress;
            return (
              <ResultItem
                key={d?.id}
                id={d?.id}
                title={title}
                type={d?.properties?.type}
                address={d?.properties?.address?.freeformAddress}
                onClick={handleResultItemClick(d?.id)}
                onMouseOver={handleResultItemHover(d?.id)}
              />
            );
          })}
      </StyledPanel>
    </StyledContainer>
  );
};

const ResultItem = ({
  title,
  type,
  address,
  onClick = () => {},
  onMouseOver = () => {},
}) => {
  return (
    <li onClick={onClick} onMouseOver={onMouseOver}>
      <div className="title">{title}</div>
      <div className="info">{`${type}: ${address}`}</div>
    </li>
  );
};

export default Search;
