
import React, { useState, useEffect, useRef } from "react";
//image
import searchIcon from "./styled/images/search-icon.svg";
//styles
import { SearchWrapper, Content } from "./styled/SearchBar.styles";
import ArtThumbnail from "./ArtThumbnail";
import { ArtworkList } from "./styled/Artwork.styles"

const SearchBar = (props) => {

  const { data } = props

  const [userInput, setUserInput] = useState("");

  const filterArt = (e) => {
    let currValue = e.target.value

    setUserInput(currValue)

  }

  const filteredArt = data.filter((art) => {
    let searchTerm = userInput.toLowerCase()
    return art.title.toLowerCase().includes(searchTerm) || art.artistDisplayName.toLowerCase().includes(searchTerm)
  })


  return (
    <>
      <SearchWrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Artwork"
            onChange={filterArt}
            value={userInput}

          />
        </Content>
      </SearchWrapper>
      <ArtworkList id="artworkList">
        {userInput ? filteredArt.map((item) => {
          return (

            <ArtThumbnail
              key={item.objectID}
              title={item.title}
              artist={item.artistDisplayName}
              src={item.primaryImageSmall}
            />

          );
        }) : ""}
      </ArtworkList>
    </>
  );
};

export default SearchBar;