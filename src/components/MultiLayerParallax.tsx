import mainBg from "../assets/bg-space.jpeg";
import sun from "../assets/sun.png";
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const MultiLayerParallax = () => {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
  const textY = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

  return (
    <div
      ref={ref}
      className="w-full h-screen overflow-hidden relative grid place-items-center "
    >
      <motion.div
        style={{ y: textY }}
        className="font-bold text-white text-7xl relative z-30"
      >
        Welcome
      </motion.div>
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          backgroundPosition: "bottom",
          backgroundSize: "cover",
          backgroundImage: `url(${mainBg.src})`,
          y: backgroundY,
        }}
      />
      <motion.div
        className="absolute inset-0 z-10"
        animate={{
          rotate: [0, 360],
          animationDelay: "0.5s",
        }}
        transition={{ repeat: Infinity, duration: 100 }}
        style={{
          backgroundSize: "contain",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${sun.src})`,
          y: textY,
        }}
      />
    </div>
  );
};

export default MultiLayerParallax;
