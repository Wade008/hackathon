import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
  --maxWidth: 1280px;
  --white: #fff;
  --darkBlue: #374770
  --lightBlue: #BFCEF2;
  --blue: #7699F0;
  --grey: #595F70;
  --violet: #5C78BD
  --fontSuperBig: 2.5rem;
  --fontBig: 1.4rem;
  --fontMed: 1.2rem;
  --fontSmall: 1rem;
}

* {
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
}

body{
  margin: 0;
  padding: 0;

  h1{
    font-size: 2rem;
    font-weight: 600;
    color: var(--white);
  }

  h3{
    font-size: 1.1;
    font-weight: 600;
  }

  p{
    font-size: 1rem;
    color: var(--white);
  }
}
`;


//example of using
// export const Wrapper = styled.div`
//   background: var(--darkGrey);
//   padding: 0 20px;
// `;
