import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from './App.jsx'
import Counter from "./Counter01.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App username="Aviral"/>
  </StrictMode>
); 
