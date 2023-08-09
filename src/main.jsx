import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import SiteContextProvider from "./context/SiteContext.jsx";
import SignContextProvider from "./context/SignContext.jsx";
import FavoriteContextProvider from "./context/FavoriteContext.jsx";
import CartContextProvider from "./context/CartContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <SiteContextProvider>
        <FavoriteContextProvider>
          <CartContextProvider>
            <SignContextProvider>
              <App />
            </SignContextProvider>
          </CartContextProvider>
        </FavoriteContextProvider>
      </SiteContextProvider>
    </BrowserRouter>
  </React.StrictMode>
);
