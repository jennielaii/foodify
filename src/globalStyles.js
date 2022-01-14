import { createGlobalStyle } from "styled-components";

export const color_1 = "#206A5D";
export const color_2 = "#81B214";
export const color_3 = "#BFDCAE";
export const color_4 = "#F1F1E8";
export const color_5 = "#191A19";

// 300,400,600,900

export const GlobalStyles = createGlobalStyle`
body{
    font-family: 'Source Sans Pro', sans-serif;
    line-height: 1.5;
    font-weight: 400;
    overflow-x: hidden;
    background-color: #f8f9fa;    
    margin: 0;
    padding: 0;
}
html{
    scroll-behavior: smooth;
}

a {
    text-decoration: none;
    color: ${color_5};
}

*{
    box-sizing: border-box;
   
    overflow-x: hidden;
}

`;
