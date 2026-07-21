"use client";
import { motion } from "framer-motion";
import { FadeLeft, FadeUp, ViewPort } from "@/Animation";
import { useFeatures } from "@/data/Features";
import { AnimatedImage } from "../ui/AnimatedImage";
import GlareHover from "../ui/GlareHover";
import { Badge } from "../ui/badge";
import { T } from "gt-next";
const Features = () => {
  const features = useFeatures()
  return (
    <section id="features" className="relative mb-20 mx-auto max-w-7xl px-5 overflow-hidden">
      <T>
        <Badge animated>Best Book Sharing Platform 2026</Badge>

        <motion.h1
          {...FadeLeft}
          {...ViewPort}
          className="text-7xl mb-10 lg:mb-6  "
        >
          What Awaits <span className="mark"> You. </span>
        </motion.h1>
      </T>
      <div className="flex flex-col lg:flex-row items-center h-2/3 justify-evenly gap-4 w-full">
        <AnimatedImage
          alt="book reader"
          src="/Book-Reader.jpg"
          className="rounded-2xl object-cover w-full lg:w-2/6 2xl:w-2/4  h-116 2xl:h-122 "
        />

        <div className="grid md:grid-cols-2  gap-4 w-fit">
          {features.slice(1, 5).map((item, i) => (
            <motion.div
              key={i}
              {...FadeUp}
              {...ViewPort}
              whileHover={{
                scale: 1.01,
                y: -2,
              }}
              className="text-center border-dashed border-2 border-primary rounded-2xl w-full lg:max-w-80"
            >
              <GlareHover
                className="py-7 p-5"
                width="100%"
                height="100%"
                borderColor="transparent"
                background="transparent"
              >
                <h1 className="text-2xl flex items-center  justify-center gap-2 ">
                  <item.icon size={30} className="text-primary" />
                  {item.title}
                </h1>
                <p>{item.description}</p>
              </GlareHover>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
