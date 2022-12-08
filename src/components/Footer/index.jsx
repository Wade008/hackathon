import React from "react";
import { Content, Wrapper } from "./Footer.styles";

const Footer = () => {
  return (
    <Wrapper>
      <Content>
      The information has been used from open API by <a href="https://metmuseum.github.io/" target="_blank" rel="noopener noreferrer">MetMuseum
      </a>
      </Content>
    </Wrapper>
  );
};

export default Footer;
