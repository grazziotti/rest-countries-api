import { createGlobalStyle } from "styled-components";

type Props = {
    theme: {
        colors: {
            background: string
        }
    }
}

export const GlobalStyles = createGlobalStyle<Props>`
    *,
    *::before,
    *::after {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Nunito Sans', sans-serif;
    }

    :root {
        --sla: blue
    }

    html {
        font-size: 62.5%;
    }

    body {
        min-height: 100vh;
        width: 100%;
        background-color: ${props => props.theme.colors.background};
    }

    img {
        width: 100%;
    }

    button {
        border: 0;
        background-color: transparent;
        cursor: pointer;
    }

    li {
        list-style: none;
    }

    a {
        text-decoration: none;
    }

    input {
        border: 0;
        outline: 0;
        background-color: transparent;
    }

    .container {
        max-width: 130rem;
        width: 100%;
        margin: auto;
    }
`