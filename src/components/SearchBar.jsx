
import React, { useState, useEffect, useRef } from "react";

//image
import searchIcon from "./styled/images/search-icon.svg";

//styles
import { Wrapper, Content } from "./styled/SearchBar.styles";

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
      <Wrapper>
        <Content>
          <img src={searchIcon} alt="search-icon" />
          <input
            type="text"
            placeholder="Search Artwork"
            onChange={filterArt}
            value={userInput}

          />
        </Content>
      </Wrapper>
      {userInput ? filteredArt.map((item) => {
        return (
          <div key={item.objectID}>
            <p>Title: {item.title}</p>
            <p>Artist: {item.artistDisplayName}</p>
            <img alt="painting" src={item.primaryImageSmall} />
          </div>
        );
      }) : ""}



    </>
  );
};

export default SearchBar;