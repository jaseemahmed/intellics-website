import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import { ThemeProvider, createTheme } from "@mui/material";
import { Route, BrowserRouter as Router } from "react-router-dom";

const container = document.getElementById("root");
const root = createRoot(container);

const theme = createTheme({
  palette: {
    primary: {
      main: "#80B26D",
      dark: "#588646",
      light: "#AECEA1",
    },
    secondary: {
      main: "#204C73",
      dark: "#163550",
      light: "#3074B0",
    },
    text: {
      main: "#141414",
      light: "#858585",
      white: "#ffffff",
    },
    error: {
      main: "#d32f2f",
    },
  },
});

root.render(
  <Router>
    <React.StrictMode>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <App />
        </ThemeProvider>
      </Provider>
    </React.StrictMode>
  </Router>
);
