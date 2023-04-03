import { createGlobalStyle } from "styled-components";
import fontLight from "../assets/fonts/SourceSansPro-Light.ttf";
import fontRegular from "../assets/fonts/SourceSansPro-Regular.ttf";

export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    margin: 0;
    padding: 0;
  }

  @font-face {
    font-family: 'Source Sans Pro light';
    src: local('Source Sans Pro light'), url(${fontLight}) format("truetype") ;
    font-display:swap;
    font-style: normal;
  }
  
  @font-face {
    font-family: 'Source Sans Pro';
    src: local('Source Sans Pro'), url(${fontRegular}) format("truetype") ;
    font-display:swap;
    font-style: normal;
  }

  body{
    font-family: "Source Sans Pro", sans-serif;
    overflow-x: hidden;
  }

  
`