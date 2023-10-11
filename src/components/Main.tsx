"use client";

import MultiLayerParallax from "./MultiLayerParallax";
import mainBg from "../assets/bg-space.jpeg";

const Main = () => {
  return (
    <div
      className="w-full h-screen"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url(${mainBg.src})`,
      }}
    >
      <MultiLayerParallax />
      <div className="w-full h-screen overflow-hidden relative grid place-items-center">
        Testtt
      </div>
      <div className="w-full h-screen overflow-hidden relative grid place-items-center">
        Testtt 2
      </div>
    </div>
  );
};

export default Main;
