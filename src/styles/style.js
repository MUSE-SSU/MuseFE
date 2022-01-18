import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root {
    --g-color-blue: #0057ff;
    --g-color-blue-overlay: #FCFCFF;
    --g-color-black: #000;
    --g-color-white: #fff;
    --g-color-gray0: #fff;
    --g-color-gray50: #fff;
    --g-color-gray100: #efefef;
    --g-color-gray150: #ddd;
    --g-color-gray200: #767676;
    --g-color-gray300: #111;
    --g-color-gray400: #000;
    --g-color-badge0: #fff;
    --g-color-badge1: #E2E2E2;
    --g-color-badge2: #AFAFAF;
    --g-color-badge3: #000000;
    --g-color-badge4: #D90000;
    --g-color-badge5: var(--g-color-blue);
    --g-color-badge-muse: var(--g-color-blue)''
    
    --g-ncols: 12;
    
    --g-text-font-size-0: 8px;
    --g-text-font-size-1: 12px;
    --g-text-font-size-2: 14px;
    --g-text-font-size-3: 16px;
    --g-text-font-size-4: 18px;
    --g-text-font-size-5: 24px;
    --g-text-font-size-6: 36px;
    --g-text-font-size-7: 48px;
    --g-text-font-size-8: 60px;
    --g-text-font-size-9: 72px;


    --fs-70: 0.7rem;
    --fs-100:: 1rem;
    --fs-150: 1.5rem;
    --fs-200: 2rem;
    --fs-250: 2.5rem;
    --fs-300: 3rem;
    --fs-350: 3.5rem;
    --fs-400: 4rem;

    @media(min-widht: 768px){

    }

    .html{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }

    .body{
        width: 100%;
        height: 100%;
        margin: 0;
        padding: 0;
    }


    }
    a {
    text-decoration: none;
    color: var(--color-black);
    margin: 0;
    padding: 0;
    cursor: pointer;
}

    a:visited {
    text-decoration: none;
    }

    a:hover {
    text-decoration: none;
    }

    a:focus {
    text-decoration: none;
    }

    a:hover,
    a:active {
    text-decoration: none;
    }

    h1{
        font-family: Helvetica;
        margin: 0;
        padding: 0;
        font-size: 16px;
    }
    p{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    pre{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    h2{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    figure{
        margin: 0;
        padding: 0;
    }
    li{
        font-family: apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        margin: 0;
        padding: 0;
    }
    
`;
