import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { FinaceProvider } from "./providers/FinaceContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <FinaceProvider>
      <App />
    </FinaceProvider>
  </React.StrictMode>
);
