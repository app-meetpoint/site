import { createGlobalStyle, ThemeProvider } from 'styled-components'
import Theme from './views/styles/theme'
import Routes from './routes'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
`

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <GlobalStyle />
      <Routes />
    </ThemeProvider>
  )
}

export default App
