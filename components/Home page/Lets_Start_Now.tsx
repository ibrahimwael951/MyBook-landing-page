"use client";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { Button } from "../ui/button";
import { opacityWithBlur } from "@/Animation";
import Particles from "../ui/Particles";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const Lets_Start_Now = () => {
  const { resolvedTheme } = useTheme();
  const [colors, setColors] = useState<string[]>([""]);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    if (resolvedTheme == "dark") {
      setColors(["#ffffff", "#ffffff"]);
    } else {
      setColors(["black"]);
    }
  }, [resolvedTheme]);

  useEffect(() => {
    setMounted(true);
  }, [resolvedTheme]);

  if (!mounted) {
    return null;
  }
  return (
    <motion.section
      {...opacityWithBlur}
      viewport={{ margin: "-150px" }}
      className="relative h-100 max-w-4xl mx-auto text-center flex flex-col justify-center items-center gap-5 bg-card p-10 rounded-2xl shadow-xl"
    >
      <Particles
        particleColors={colors}
        particleCount={200}
        particleSpread={10}
        speed={0.1}
        particleBaseSize={100}
        moveParticlesOnHover={true}
        alphaParticles={false}
        disableRotation={false}
        className="absolute top-2/4 left-2/4 -translate-2/4 overflow-auto "
      />
      <Badge>Stop delaying this!</Badge>
      <div>
        <h1>Let's Join Community Now!!</h1>
        <p className="m-0 max-w-xl text-sm ">
          A space for readers to share thoughts, discuss ideas, and discover
          books through real conversations — not algorithms shouting at you.
        </p>
      </div>
      <div className="flex items-center gap-2">
        <Button size={"xl"} link="/sign_in?mode=signup">
          Create Account
        </Button>
        <Button size={"xl"} variant={"outline"} link="/sign_in">
          LogIn
        </Button>
      </div>
    </motion.section>
  );
};

export default Lets_Start_Now;
