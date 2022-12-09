import styled from "styled-components";

export const TextCenter = styled.text`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Libre Baskerville", serif; 
  font-size: 20px;
  z-index: 10;
  pointer-events: all;
  background: rgba(235, 213, 213, 0.2);
 
  @media screen and (max-width: 768px) {
    font-size: 15px;
  }
  
  @media screen and (max-width: 400x) {
    font-size: 10px;
  }

  a:link {
    color: darkgrey;
  }

  a:visited {
    color: #4a4848;
  }
  a:hover {
    color: #d32626;
  }
`;
