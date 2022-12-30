import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FinaceProvider } from "./providers/FinaceContext";
import { GlobalStyle } from "./styles/globalstyle";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FinaceProvider>
      <GlobalStyle />
      <App />
    </FinaceProvider>
  </React.StrictMode>
);
