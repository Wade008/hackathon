import React, { useState, useEffect, useRef } from "react";

//image
import searchIcon from "../../images/search-icon.svg";

//styles
import { Wrapper, Content } from "./SearchBar.styles";

const SearchBar = ({ setSearchTerm }) => {
  return (
    <Wrapper>
      <Content>
        <img src={searchIcon} alt="search-icon" />
        <input type="text" placeholder="Search Artwork" />
      </Content>
    </Wrapper>
  );
};

export default SearchBar;
