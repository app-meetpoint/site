import { ThemeProvider } from "styled-components";

import Routes from "./routes";
import Theme from "./views/styles/theme";
import GlobalStyle from "./views/styles/globalStyles";

const App = () => (
  <ThemeProvider theme={Theme}>
    <GlobalStyle />
    <Routes />
  </ThemeProvider>
);
export default App;
