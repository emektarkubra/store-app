import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteContextProvider from "./context/SiteContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </SiteContextProvider>
  </React.StrictMode>
);
