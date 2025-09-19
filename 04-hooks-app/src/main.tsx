import { StrictMode, Suspense } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "sonner";
import { getUserAction } from "./08-use-suspense/api/get-user.action";
import { ClientInformation } from "./08-use-suspense/ClientInformation";
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
    {/* <InstagromApp></InstagromApp> */}

    {/* 
componente de react
*/}
    <Suspense
      // hasta que se resuelva lo otro, pintamos este componente
      fallback={
        <div className="bg-gradient flex flex-col">
          <h1 className="text-2xl">Cargando</h1>
        </div>
      }
    >
      <ClientInformation getUser={getUserAction(1001)} />
    </Suspense>
  </StrictMode>
);
