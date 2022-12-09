import styled from "styled-components";
export const TextBottom = styled.div`
  position: absolute;
  bottom: 8px;
  right: 16px;
  z-index: 10;
  pointer-events: all;
  font-family: "Libre Baskerville", serif; 
  color: grey;
  font-size: 15px;

  a:link {
    color: grey;
    font-family: "Libre Baskerville", serif; 
  }

  a:visited {
    color: grey;
  }
  a:hover {
    color: #d32626;
  }
  @media screen and (max-width: 768px) {
    font-size: 10px;
    
  }
`;
