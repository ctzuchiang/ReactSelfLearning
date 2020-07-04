import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from "@material-ui/core";

const theme = createMuiTheme({
    typography: {
        // fontFamily: "Helvetica Neue",
        //"Roboto", "Helvetica", "Arial", sans-serif
        button: {
            textTransform: "none",
        },
    },
});

ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </BrowserRouter>,
    document.getElementById("app"),
);
