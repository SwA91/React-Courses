import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { FocusScreen } from "./04-useRef/FocusScreen";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    <FocusScreen></FocusScreen>
  </StrictMode>
);
