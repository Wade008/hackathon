import styled from "styled-components";

export const HomePic = styled.div`
img {
position: relative; 
width: 100%; 
height: auto; 
opacity: 0.3;
background-size: cover;

@media screen and (max-width: 1280px) {
  width: 1280; 
  height: 300px;
  object-fit: cover;
  }
@media screen and (max-width: 900px) {
  width: 900; 
  height: 300px;
  object-fit: cover; 
  }

  @media screen and (max-width: 600x) {
    height: 300px;
    width: 100%; 
    object-fit: cover;
  }
}


`