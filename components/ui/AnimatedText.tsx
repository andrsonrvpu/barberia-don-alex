"use client";

import * as React from "react";
import { motion, useReducedMotion } from "framer-motion";

interface AnimatedTextProps {
  text: string;
  el?: React.ElementType;
  className?: string;
  once?: boolean;
  type?: "words" | "chars";
  delay?: number;
}

export function AnimatedText({
  text,
  el: Wrapper = "span",
  className,
  once = true,
  type = "words",
  delay = 0,
}: AnimatedTextProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <Wrapper className={className}>{text}</Wrapper>;
  }

  const itemArray = type === "words" ? text.split(" ") : text.split("");

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: type === "chars" ? 0.04 : 0.1,
        delayChildren: delay,
      },
    },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const itemVariants: any = {
    hidden: { 
      opacity: 0, 
      y: 20,
      rotateX: -20,
      filter: "blur(4px)"
    },
    visible: { 
      opacity: 1, 
      y: 0, 
      rotateX: 0,
      filter: "blur(0px)",
      transition: { 
        duration: 0.8, 
        ease: "easeOut" 
      }
    },
  };

  return (
    <Wrapper className={className}>
      <motion.span
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once, margin: "-50px" }}
        className="inline-block"
      >
        {itemArray.map((item, index) => (
          <motion.span
            key={`${item}-${index}`}
            variants={itemVariants}
            className="inline-block"
            style={{ 
              marginRight: type === "words" ? "0.25em" : "0", 
              whiteSpace: "pre" 
            }}
          >
            {item === " " ? "\u00A0" : item}
          </motion.span>
        ))}
      </motion.span>
    </Wrapper>
  );
}
