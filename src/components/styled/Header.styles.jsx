import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  max-width: 1280;
  height: 100px;
  color: grey;
`;

export const Content = styled.div`
    font-family: "Libre Baskerville", serif; 
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 40px;
  text-shadow: 0 1px 1px #00000074; 
  @media screen and (max-width: 900px) {
    font-size: 25px;
  }

`;
