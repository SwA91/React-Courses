import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { InstagromApp } from "./07-useOptimistic/InstagromApp";
import "./index.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Toaster></Toaster>
    {/* <HooksApp></HooksApp> */}
    {/* <TrafficLight></TrafficLight> */}
    {/* <TrafficLightWithEffect></TrafficLightWithEffect> */}
    {/* <TrafficLightWithHook></TrafficLightWithHook> */}
    {/* <PokemonPage></PokemonPage> */}
    {/* <FocusScreen></FocusScreen> */}
    {/* <TasksApp></TasksApp> */}
    {/* <ScrambleWords></ScrambleWords> */}
    {/* <MemoHook></MemoHook> */}
    {/* <MemoCounter></MemoCounter> */}
    <InstagromApp></InstagromApp>
  </StrictMode>
);
