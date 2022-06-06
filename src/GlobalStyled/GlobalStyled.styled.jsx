import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family:  "Roboto", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    background-color: #E5E5E5;
  }
  
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
      monospace;
  }

*{box-sizing: border-box;}

  h1,
h2,
h3,
h4,
h5,
h6 {
  color: var(--title-text-color);
  margin-top: 0;
  margin-bottom: 0;
}

p {
  margin-top: 0;
  margin-bottom: 0;
}

img {
  display: block;
  max-width: 100%;
  height: auto;
}

ul {
  padding-left: 0;
  list-style-type: none;
}
a{
  color: black;
  text-decoration: none;
}
`;
