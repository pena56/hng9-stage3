import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import LayoutProvider from "./context/LayoutProvider";

import App from "./App";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LayoutProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </LayoutProvider>
  </React.StrictMode>
);
