import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    html {
        font-size: 100%;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    *,*::before,*::after {
        -webkit-box-sizing: border-box;
         -moz-box-sizing: border-box;
            box-sizing: border-box;
    }

    body {
        padding: 0;
        margin: 0 auto;
        
        /* overflow-x: hidden; */
        
        background-color: #493323;
        color: #fff;
        
        font-family: 'Bellefair', serif;
        font-weight: 300;
        
        h1,h2,h3,h4,h5,h6 {
            margin: 0;
        }
    }

    a, a:visited, a:hover {
        text-decoration: none;
    }
`;

export default GlobalStyle;
