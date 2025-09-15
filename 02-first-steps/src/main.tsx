import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { FirstStepsApp } from "./FirstStepsApp";
import { MyAwesomeApp } from "./MyAwesomeApp";

createRoot(document.getElementById("root")!).render(
  // evita problemas de efectos
  <StrictMode>
    {/* <App /> */}
    <FirstStepsApp></FirstStepsApp>
    {/* <MyAwesomeApp></MyAwesomeApp> */}
  </StrictMode> // obligado regresar un unico elemento padre
);
