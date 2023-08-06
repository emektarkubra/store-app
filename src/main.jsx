import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteContextProvider from "./context/SiteContext.jsx";
import SignContextProvider from "./context/SignContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteContextProvider>
        <SignContextProvider>
          <App />
        </SignContextProvider>
      </SiteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
