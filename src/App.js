import React from "react";
import Layout from "./components/Layout/Layout";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";
import "./App.css";

const theme = createMuiTheme({
  palette: {
    primary: { main: "#213248", contrastText: "#FFFFFF" },
    secondary: { main: "#3DBDD7", contrastText: "#213248" },
  },
});

function App() {
  return (
    <div>
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    </div>
  );
}

export default App;
