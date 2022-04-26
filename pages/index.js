import styles from "../styles/Home.module.css";
import Head from "next/head";

import React, { useEffect, useRef, useCallback, useState } from "react";
import {
  Hero,
  About,
  Project,
  Contact,
  Fanfare,
  NavBar,
  Footer,
} from "../components";
import { useWindowSize } from "../hooks/useWindowSize";
import { motion, useTransform, useElementScroll } from "framer-motion";

import { useInView } from "react-intersection-observer";
import { Skills } from "../components/Skills/Skills";

export default function Home() {
  const [fanfare, setFanfare] = useState(true);
  const [main, setMain] = useState(false);

  const [scrollY, setScrollY] = useState(0);

  // const onScroll = useCallback((event) => {
  //   const { pageYOffset, scrollY } = window;
  //   // console.log("yOffset", pageYOffset, "scrollY", scrollY);
  //   setScrollY(window.pageYOffset);
  // }, []);

  // useEffect(() => {
  //   //add eventlistener to window
  //   window.addEventListener("scroll", onScroll, { passive: true });
  //   // remove event on unmount to prevent a memory leak
  //   () => window.removeEventListener("scroll", onScroll, { passive: true });
  // }, []);

  // useEffect(() => {
  //   const ids = [
  //     setTimeout(() => setFanfare(false), 4800),
  //     setTimeout(() => setMain(true), 5700),
  //   ];
  //   return () => ids.forEach((id) => clearTimeout(id));
  // }, [setFanfare]);

  return (
    <>
      <Head>
        <title>C Long - Sze Long</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* <Fanfare control={fanfare} /> */}

      <NavBar />
      <main className="min-h-screen font-sans bg-lightTheme dark:bg-darkTheme transition-colors -z-10 m-0 max-w-screen">
        <div
          className="min-h-screen w-full flex flex-col flex-1 justify-center z-10 
            justify-items-stretch  "
        >
          <Hero className="mb-8 p-2 min-h-screen -z-10" />
          <About
            className="w-screen"
            //styles={{ transform: `translateY(-${scrollY}px)` }}
          />
          <Project
            className="mx-4 my-8 p-2 px-10 md:px-36"
            // styles={{ transform: `translateY(-${scrollY}px)` }}
          />
          <Skills
            className="mx-4 my-8 p-2 px-10 md:px-36"
            //styles={{ transform: `translateY(-${scrollY}px)` }}
          />
          <Contact
            className="mx-4 my-8 p-2 px-10 md:px-36 "
            //styles={{ transform: `translateY(-${scrollY}px)` }}
          />
        </div>
        {/* </motion.div> */}
      </main>
      <Footer />
    </>
  );
}