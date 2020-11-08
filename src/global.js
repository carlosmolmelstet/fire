import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background: #333333;
        font-family: 'Cairo', sans-serif;

    }

    body, input, textarea, button{
        font-family: 'Cairo', sans-serif;
        outline: none;
    }

    a {
        text-decoration: none;
    }
    
    h1, h2{
        font-family: 'Kanit', sans-serif;
        color: #FFF;
    }

`;
