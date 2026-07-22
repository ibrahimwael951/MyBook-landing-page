"use client";
import { motion } from "framer-motion";
import { AnimatedImage } from "../ui/AnimatedImage";
import { FadeLeft, ViewPort } from "@/Animation";
import { Badge } from "../ui/badge";
import { T, useGT } from "gt-next";
import { BicepsFlexed, MessageSquareHeart, SmilePlus } from "lucide-react";
const Community_Features = () => {
  const t = useGT();
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
          {[
            {
              title: t("Shared Love for Books"),
              description: t(
                "Everyone here is connected by a simple passion: reading. Whether you’re into fiction, non-fiction, self-help, fantasy, or poetry you’ll always find someone who relates to your taste or wants to discover new reads.",
              ),
              icon: MessageSquareHeart,
            },
            {
              title: t("Meaningful Interactions"),
              description: t(
                "You can post the books you’re reading and receive likes, comments, and encouragement from fellow readers. Comments like “Great choice!” or “This inspired me to start reading again!” are what make MaBook warm and personal.",
              ),
              icon: SmilePlus,
            },
            {
              title: t("Motivation Over Judgment"),
              description: t(
                "No one here is judging how fast you read, what genre you like, or how long your post is. This is a space to cheer each other on, not compare.",
              ),
              icon: BicepsFlexed,
            },
          ].map((item, i) => (
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
