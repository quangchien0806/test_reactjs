import React from "react";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./Components/AppRouter";

import { createRoot } from "react-dom/client";
const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <BrowserRouter>
    <AppRouter />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
