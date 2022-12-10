import styled from "styled-components";

export const TextCenter = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-family: "Libre Baskerville", serif;
  font-size: 30px;
  z-index: 10;
  pointer-events: all;
  background: rgba(235, 213, 213, 0.2);

  @media screen and (max-width: 1280px) {
    font-size: 20px;
  }
  @media screen and (max-width: 900px) {
    font-size: 15px;
  }

  @media screen and (max-width: 600x) {
    font-size: 10px;
  }

  a:link {
    color: #401e1e;
    font-family: "Libre Baskerville", serif;
    text-decoration: none;
  }

  a:visited {
    color: #5f1616;
  }
  a:hover {
    color: #d32626;
  }
`;
