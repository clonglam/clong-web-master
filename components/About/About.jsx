import React, { useEffect, useRef, useState } from "react";
import { useParallax } from "react-scroll-parallax";
import { Section } from "../Section";
import clsx from "clsx";
import Link from "next/link";
import { Container } from "../Container";
import {
  AnimatePresence,
  animations,
  motion,
  useAnimation,
} from "framer-motion";
import { useInView } from "react-intersection-observer";
import { AboutCutOff } from "./AboutCutOff";
import { Testing_image, Hero_image } from "../../assets/Images";

export const About = ({ className, styles }) => {
  const animateControl = useAnimation();
  const [percentages, setPercentages] = useState(0);

  const titleVariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 0,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const variants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 10,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const CTAvariants = {
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.1,
        duration: 0.5,
        ease: "easeOut",
        stiffness: 400,
        damping: 40,
      },
    },
    hidden: {
      y: 10,
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 40,
      },
    },
    exit: {
      opacity: 0,
      transition: {
        delay: 0.1,
        duration: 0.3,
        ease: "easeInOut",
        stiffness: 400,
        damping: 60,
      },
    },
  };

  const { ref: parllref } = useParallax({
    translateY: [10, -5],
    scale: [0.9, 1],
    onProgressChange: (percentage) => {
      setPercentages(percentage);
    },
  });
  return (
    <>
      <Section title="About CLONG" navIndex="about">
        <AboutCutOff />

        <div
          id="about"
          className={clsx(
            "bg-white-800 w-full m-0 min-h-[600px] p-4 md:min-h-[60vh] z-5 md:px-8 max-w-[1500px] mx-auto ",
            className
          )}
          ref={parllref}
          style={styles}
        >
          <div title="" color="text-black-900" theme="light" description="">
            <motion.p
              variants={titleVariants}
              initial="hidden"
              animate={percentages > 0.1 ? "visible" : "exit"}
              exit="exit"
              className="text-black-900 text-5xl font-bold lg:text-[64px]"
            >
              WHO AM I?
            </motion.p>

            <motion.p
              className="text-black-700 italic md:mb-8"
              variants={titleVariants}
              initial="hidden"
              animate={percentages > 0.2 ? "visible" : "exit"}
              exit="exit"
            >
              World grow evolve every day, learn never stop.
            </motion.p>
            <div
              className={clsx(
                "flex flex-col m-0 p-0 my-15 z-10 items-center ",
                "md:mx-8 md:px-10 md:px-25 md:flex-row md:py-5 md:mt-8"
              )}
            >
              <div className="md:w-1/2 lg:w-1/4"></div>
              <div className="md:w-1/2 lg:w-3/4">
                <motion.p
                  custom={1}
                  variants={variants}
                  initial="hidden"
                  animate={percentages > 0.3 ? "visible" : "exit"}
                  exit="exit"
                  className="py-3 text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-12"
                >
                  Hi, I am CLong Lam. A{" "}
                  <span className="font-bold">Web Developer</span>
                  {` and `}
                  <span className=" font-bold">Media Designer</span>. Currently
                  bassed in Vancourver. Before this I worked in Hong Kong for
                  4-Year.
                </motion.p>

                <motion.p
                  custom={1}
                  variants={variants}
                  initial="hidden"
                  animate={percentages > 0.35 ? "visible" : "exit"}
                  exit="exit"
                  className="py-3 text-base max-w-[95%] md:text-2xl dark:text-white-700 text-black-700 md:mb-4"
                >
                  I love to explore new things, I did project on different
                  media, Rpi, p5js etc. If you wanna know more about me, scroll
                  down and see what I did. Cheers.
                </motion.p>

                <motion.button
                  custom={2}
                  variants={CTAvariants}
                  initial="hidden"
                  whileHover={{
                    scale: 1.05,
                    transition: {
                      delay: 0.05,
                      duration: 0.3,
                      ease: "easeOut",
                      stiffness: 400,
                      damping: 40,
                    },
                  }}
                  whileTap={{ scale: 0.9 }}
                  animate={percentages > 0.4 ? "visible" : "exit"}
                  exit="exit"
                  className="mt-5 text-base max-w-[95%] md:text-2xl text-orange-900 font-bold mouse-pointer"
                >
                  <Link href="/project">{`Know more ->`}</Link>
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
};
