import React from "react";
import ThemeProvider from "react-bootstrap/ThemeProvider";
import { breakpoints } from "./config/theme";
import "./App.css";
import AppRouter from "./Router";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <ThemeProvider breakpoints={breakpoints}>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
