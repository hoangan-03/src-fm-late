/* eslint-disable */

import React from "react";
import ReactDOM from "react-dom/client";
import "./page/style.css";
import App from "./App";
import { GoogleOAuthProvider } from "@react-oauth/google";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <GoogleOAuthProvider clientId="874069434336-34d6sdoofeeinp1ghg9bhaegsg54u2ha.apps.googleusercontent.com">
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </GoogleOAuthProvider>
);
