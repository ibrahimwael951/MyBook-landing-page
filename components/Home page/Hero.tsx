"use client";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { FadeUp, Animate } from "@/Animation";
import LightRays from "../ui/LightRays";
import { Badge } from "../ui/badge";
import { T } from "gt-next";


const Hero = () => {
  return (
    <section
      id="home"
      className="relative flex flex-col justify-center items-center gap-5 h-screen w-full"
    >
      <LightRays
        className="absolute top-0 left-0 h-full w-full -z-10"
        noiseAmount={0.1}
        rayLength={0.8}
        fadeDistance={0.4}
      />
      <T>
        <Badge animated>Best Book Sharing Platform 2026</Badge>
        <motion.h1
          {...FadeUp}
          {...Animate}
          transition={{ duration: 0.4 }}
          className="text-6xl lg:text-7xl text-center -px-5 "
        >
          Latest <span className="mark"> Book</span> <br />
          Finding Waves
        </motion.h1>
        <motion.p
          {...FadeUp}
          {...Animate}
          transition={{ delay: 0.25 }}
          className="text-sm md:text-lg text-center max-w-3xl px-5"
        >
          My Book is a simple, friendly, and inspiring platform built for book
          lovers who want to share their reading journey with others. Whether
          you’re reading your first book or your 100th, My Book gives you a space
          to express, connect, and inspire through books.
        </motion.p>
        <motion.div
          {...FadeUp}
          {...Animate}
          transition={{ delay: 0.4 }}
          className="flex justify-center items-center gap-5"
        >
          <Button variant="default" size={"xl"} link="/waitlist">
            Join WaitList
          </Button>
          <Button variant="outline" size={"xl"} link="/about">
            About Us
          </Button>
        </motion.div>
      </T>
    </section>
  );
};

export default Hero;
