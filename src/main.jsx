/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom/client";
import "./page/style.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
const clientId = import.meta.env.VITE_CLIENT_ID;
root.render(
  <GoogleOAuthProvider clientId={clientId}>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
