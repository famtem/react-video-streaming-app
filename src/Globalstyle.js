import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        border: 0px;
        padding: 0px;
        box-sizing: border-box;
        margin: 0;
    }

    
    body {
        background: linear-gradient(90deg, rgba(2,0,36,1) 87%, rgba(10,66,78,1) 100%, rgba(9,9,121,1) 100%);        
        font-size: 14px;
        font-family: 'Montserrat', sans-serif;
        display: flex;
        justify-content: center;
        align-items: center;

    }
`