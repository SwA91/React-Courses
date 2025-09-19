import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { MemoCounter } from "./06-memos/MemoCounter";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <TasksApp></TasksApp> */}
    {/* <ScrambleWords></ScrambleWords> */}
    {/* <MemoHook></MemoHook> */}
    <MemoCounter></MemoCounter>
  </StrictMode>
);
