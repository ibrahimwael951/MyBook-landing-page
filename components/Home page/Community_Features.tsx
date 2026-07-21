"use client";
import { motion } from "framer-motion";
import { AnimatedImage } from "../ui/AnimatedImage";
import { FadeLeft, ViewPort } from "@/Animation";
import { useCommunityFeatures } from "@/data/CommunityFeatures";
import { Badge } from "../ui/badge";
import { T } from "gt-next";
const Community_Features = () => {
  const Features = useCommunityFeatures()
  return (
    <section className="relative mb-20 mx-auto max-w-7xl px-5 overflow-hidden">
      <T>
        <Badge animated>Best Community</Badge>
        <motion.h1
          {...FadeLeft}
          {...ViewPort}
          className="text-6xl font-semibold mb-10"
        >
          What Makes Our <span className="mark"> Community </span> Special?
        </motion.h1>
      </T>
      <div className="flex flex-col lg:flex-row justify-center  items-center gap-0  lg:gap-10">
        <div className="w-full lg:w-2/4 flex flex-col gap-10">
          {Features.map((item, i) => (
            <motion.div
              key={i}
              {...FadeLeft}
              {...ViewPort}
              className="h-1/4 w-full"
            >
              <h1 className="text-2xl font-medium flex items-end gap-2">
                <item.icon size={35} className="mark" />
                {item.title}
              </h1>
              <p className="ml-5 mt-0">{item.description}</p>
            </motion.div>
          ))}
        </div>
        <AnimatedImage
          src="/book-coffee.jpg"
          alt="Community image"
          className="w-full lg:w-2/4 lg:max-w-xl max-h-120 rounded-2xl"
        />
      </div>
    </section>
  );
};

export default Community_Features;
