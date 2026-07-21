"use client";
import { FadeUp, Animate } from "@/Animation";
import { motion } from "framer-motion";
import { T } from "gt-next";
const Loading = () => {
  return (
    <main className="min-h-screen flex justify-center items-center ">
      <div className="flex flex-col items-center gap-3">
        <motion.div
          {...FadeUp}
          {...Animate}
          className="w-12 h-12 border-4 border-foreground border-t-primary rounded-full animate-spin"
        />
        <T>
          <motion.p {...FadeUp} {...Animate} className=" font-medium">
            Loading...
          </motion.p>
        </T>
      </div>
    </main>
  );
};

export default Loading;
