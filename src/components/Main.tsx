"use client";

import MultiLayerParallax from "./MultiLayerParallax";
import mainBg from "../assets/bg-space.jpeg";

const Main = () => {
  return (
    <div>
      <MultiLayerParallax />
      <div className="w-full h-screen overflow-hidden relative grid place-items-center bg-black text-white">
        Testtt
      </div>
    </div>
  );
};

export default Main;
