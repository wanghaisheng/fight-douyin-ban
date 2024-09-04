import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Roboto', sans-serif;
    background-color: ${props => props.theme.colors.background};
    height: 100vh;
  }

  #root {
    display: flex;
    flex-direction: column;
  }

  h1 {
    color: ${props => props.theme.colors.title};
  }
`;