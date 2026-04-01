import React, { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "motion/react";

type Props = {
  children: React.ReactNode;
  width?: "fit-content" | "100%";
};

export default function RevealAnimation({ children, width = "100%" }: Props) {
  return (
    <div style={{ position: "relative", width, overflow: "hidden" }}>
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 75 },
          visible: { opacity: 1, y: 0 }
        }}
        initial="hidden"
        animate="visible"
      >
        {children}
      </motion.div>
    </div>
  );
}
