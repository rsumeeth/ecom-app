import React from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import Header from "./Header";
import { Outlet } from "react-router-dom";

const theme = createTheme();
export default function layout() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
      <div>Layouts</div>
    </ThemeProvider>
  );
}
