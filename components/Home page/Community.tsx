"use client";
import { motion } from "framer-motion";
import { Animate, FadeRight, FadeUp } from "@/Animation";

import { MaskContainer } from "../ui/svg-mask-effect";
import { Badge } from "../ui/badge";
import { T, useGT } from "gt-next";


const Community = () => {
  const t = useGT()
  const Text = {
    title: (
      <T>
        A Place Built on <span className="mark">Respect</span>,{" "}
        <span className="mark">Reading</span>, and Real Connections
      </T>
    ),
    description: t("We’re a community of readers who support, inspire, and grow together through books. Our mission is to build a positive and uplifting environment where every reader feels safe, seen, and heard"),
  };
  return (
    <>
      <section id="community" className="hidden xl:block">
        <motion.div
          {...FadeUp}
          {...Animate}
          className="min-h-screen flex flex-col w-full items-center justify-center overflow-x-hidden"
        >
          <MaskContainer
            revealText={
              <div className="flex flex-col justify-center items-center gap-3">
                <T>
                  <Badge>About our community</Badge>
                </T>
                <h1 className="mx-auto max-w-4xl text-center text-7xl font-bold text-foreground select-none">
                  {Text.title}
                </h1>
              </div>
            }
            className="h-160 w-full rounded-md text-white dark:text-black select-none"
          >
            {Text.description}
          </MaskContainer>
        </motion.div>
      </section>

      <section
        id="community"
        className="xl:hidden my-40 flex flex-col justify-center items-center gap-5 text-center px-5"
      >
        <motion.h1 {...FadeRight} {...Animate} className="text-5xl">
          {Text.title}
        </motion.h1>
        <motion.p {...FadeRight} {...Animate} className="mt-0">
          {Text.description}
        </motion.p>
      </section>
    </>
  );
};

export default Community;
