import styled from "styled-components";

export const TextCenter = styled.text`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 25px;

  a:link {
    color: darkgrey;
    text-decoration: none;
  }

  a:hover {
  text-decoration: underline;
}

a:visited {
  text-decoration: none;
  color: grey
}
  `