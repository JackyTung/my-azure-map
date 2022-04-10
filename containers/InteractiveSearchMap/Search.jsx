import { StyledContainer } from "./Search.styles";

import { MIN_SEARCH_INPUT_LENGTH, KEY_STROKE_DELAY } from "@/constants/search";

const Search = () => {
  let searchInputLength = 0;
  const handleKeyUp = (e) => {
    const searchInput = e.target.value;
    if (searchInput.length >= MIN_SEARCH_INPUT_LENGTH) {
      setTimeout(function () {
        if (searchInputLength == searchInput.length) {
          console.log("search:", searchInput);
        }
      }, KEY_STROKE_DELAY);
    }

    searchInputLength = searchInput.length;
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
