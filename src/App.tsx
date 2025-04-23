import { ThemeProvider } from "styled-components";

import Theme from "views/styles/theme";
import GlobalStyle from "views/styles/globalStyles";

import Routes from "./routes";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);

export default App;
