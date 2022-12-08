import styled from "styled-components";

export const TextCenter = styled.text`
    display: flex;
    align-items: center;
    justify-content: center;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;

  a:link {
    color: darkgrey;

  }

a:visited {
  color: grey
}
  `