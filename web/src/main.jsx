import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { BrowserRouter } from "react-router-dom";

import AuthProvider from "./contexts/auth";

import RoutesApp from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AuthProvider>
        <RoutesApp />
      </AuthProvider>
    </BrowserRouter>
  </React.StrictMode>
);
