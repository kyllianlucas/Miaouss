import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthProvider from "./authProvider";
import Routing from "./Routing";
import App from "./App.jsx";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <BrowserRouter>
        <Routing />
      </BrowserRouter>
      <App />
    </AuthProvider>
  </StrictMode>
);
