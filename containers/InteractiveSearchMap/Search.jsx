import { StyledContainer } from "./Search.styles";
import { MapContext } from "@/contexts/Map";
import { MIN_SEARCH_INPUT_LENGTH, KEY_STROKE_DELAY } from "@/constants/search";
import React, { useContext } from "react";
import useSearchPOI from "@/hooks/useSearchPOI";

import { useEffect } from "react";

const Search = () => {
  const { map, dataSource } = useContext(MapContext);
  const { isSuccess, data, handleSearchPOI } = useSearchPOI();

  useEffect(() => {
    if (isSuccess) {
      console.log("data", data);
    }
  }, [isSuccess]);

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
      <ul id="results-panel"></ul>
    </StyledContainer>
  );
};

export default Search;
