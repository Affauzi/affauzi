import React, { useEffect, useRef, useState } from "react";
import {
  Variants,
  motion,
  useMotionValueEvent,
  useScroll,
  useTransform,
} from "framer-motion";
import mainBg from "../assets/bg-space.jpeg";
import sun from "../assets/sun.png";
import planet1 from "../assets/planet-1.png";
import planet2 from "../assets/planet-2.png";

const MultiLayerParallax = () => {
  const [active, setActive] = useState<{ planet: number; active: boolean }[]>([
    { planet: 1, active: true },
    { planet: 2, active: false },
    { planet: 3, active: false },
  ]);
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);
  });

  useEffect(() => {
    console.log(active);
  }, [active]);
  const sunY = useTransform(scrollYProgress, [0, 1], [1, 0]);

  const planetTransition = {
    first: {
      scale: useTransform(scrollYProgress, [0.04, 0.25], [1, 20]),
      opacity: useTransform(scrollYProgress, [0, 0.25], [1, 0]),
      display: useTransform(scrollYProgress, [1, 0], ["block", "none"]),
      top: useTransform(scrollYProgress, [0, 0.3], ["20%", "40%"]),
      left: useTransform(scrollYProgress, [0, 0.3], ["20%", "40%"]),
    },
    second: {
      // scale: useTransform(scrollYProgress, [0.2, 1], [1, 20]),
      // opacity: useTransform(scrollYProgress, [0, 1], [1, 0]),
      display: useTransform(scrollYProgress, [1, 0], ["block", "none"]),
      top: useTransform(scrollYProgress, [0, 0.3], ["80%", "20%"]),
      left: useTransform(scrollYProgress, [0, 0.3], ["70%", "70%"]),
    },
  };

  return (
    <div ref={ref}>
      <div className="w-full h-screen relative grid z-0">
        <motion.div
          style={{ y: sunY }}
          className="font-bold text-white text-7xl relative z-30 m-auto"
        >
          Welcome
        </motion.div>

        <motion.div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] z-10">
          <motion.img
            src={sun.src}
            width={300}
            height={300}
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              repeat: Infinity,
              duration: 200,
              ease: "linear",
            }}
          />
        </motion.div>

        {/* <motion.div
        className="absolute z-20 m-auto"
        style={{ left: planetTransition.x, top: planetTransition.y }}
      > */}
        <div className="absolute z-30">
          <motion.img
            className="fixed top-10 left-10"
            animate={{
              rotateZ: [0, -180],
            }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            src={planet1.src}
            width={120}
            height={120}
            style={{
              scale: planetTransition.first.scale,
              opacity: planetTransition.first.opacity,
              display: planetTransition.first.display,
              top: planetTransition.first.top,
              left: planetTransition.first.left,
            }}
          />
        </div>

        {/* <div className="absolute z-30">
          <motion.img
            className="fixed top-7 left-6"
            animate={{
              rotateZ: [0, -180],
            }}
            transition={{
              repeat: Infinity,
              duration: 100,
              ease: "linear",
            }}
            src={planet2.src}
            width={120}
            height={120}
            style={{
              // scale: planetTransition.second.scale,
              // opacity: planetTransition.second.opacity,
              display: planetTransition.second.display,
              top: planetTransition.second.top,
              left: planetTransition.second.left,
            }}
          />
        </div> */}
      </div>
      <div className="w-full h-screen overflow-hidden relative grid place-items-center border border-black">
        Testtt
      </div>
      <div className="w-full h-screen overflow-hidden relative grid place-items-center border border-black">
        Testtt 2
      </div>
      <div className="w-full h-screen overflow-hidden relative grid place-items-center border border-black">
        Testtt 2
      </div>
    </div>
  );
};

export default MultiLayerParallax;
