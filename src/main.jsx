import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Routes from "./Routes/Routes.jsx";
import AuthProvider from "./Providers/AuthProviders.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Routes} />
    </AuthProvider>
  </React.StrictMode>
);