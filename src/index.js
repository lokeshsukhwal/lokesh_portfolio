import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

const savedTheme = localStorage.getItem("portfolio-theme");
const initialTheme = savedTheme === "light" || savedTheme === "dark"
  ? savedTheme
  : window.matchMedia("(prefers-color-scheme: light)").matches ? "light" : "dark";

document.documentElement.dataset.theme = initialTheme;
document.documentElement.classList.toggle("dark", initialTheme === "dark");

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
