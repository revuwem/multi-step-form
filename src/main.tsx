import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import router from "./pages";
import "./index.css";
import { SubscriptionContextProvider } from "./shared/context/Subscription/SubscriptionContext";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <SubscriptionContextProvider>
      <RouterProvider router={router} />
    </SubscriptionContextProvider>
  </React.StrictMode>
);
