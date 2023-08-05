import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteContextProvider from "./context/SiteContext.jsx";
import SignupContextProvider from "./context/SignupContext.jsx";
import LoginContextProvider from "./context/LoginContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SiteContextProvider>
      <SignupContextProvider>
        <LoginContextProvider>
          <BrowserRouter>
            <App />
          </BrowserRouter>
        </LoginContextProvider>
      </SignupContextProvider>
    </SiteContextProvider>
  </React.StrictMode>
);
