import { createGlobalStyle } from 'styled-components'
import './tailwind.output.css'

const GlobalStyle = createGlobalStyle`
    html {
        box-sizing: border-box;
        font-family: 'opensans', BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
        font-weight: 400;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    *, 
    *:before, 
    *:after {
        box-sizing: inherit;
    }
    
    body {
        margin: 0;
        padding: 0;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }

    a {
        display: block;
        text-decoration: none;
        margin-bottom: 8px;
    }
    
    p {
        font-family: 'opensans';
        font-weight: 400;
        word-break: break-word;
    }

    .App-logo {
        max-width: 100%;
        min-height: 60px;
        pointer-events: none;
        padding: 16px;
    }

    code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }    
`
export default GlobalStyle
