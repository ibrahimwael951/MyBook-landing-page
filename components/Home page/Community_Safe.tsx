"use client";
import {
  MessageCircleOff,
  MessageSquareHeart,
  ToolCase,
  UserLock,
} from "lucide-react";
import { FadeLeft, ViewPort } from "@/Animation";
import { motion } from "framer-motion";
import { AnimatedImage } from "../ui/AnimatedImage";
import { Badge } from "../ui/badge";
import { T, useGT } from "gt-next";

const Community_Safe = () => {
  const t = useGT();
  return (
    <section className="relative my-20 mx-auto max-w-7xl px-5 overflow-hidden">
      <T>
        <Badge>Safer Community</Badge>
        <motion.h1
          {...FadeLeft}
          {...ViewPort}
          className="text-6xl font-semibold mb-3"
        >
          How We Keep Our Community <span className="mark"> Safe</span>
        </motion.h1>
        <motion.p {...FadeLeft} {...ViewPort} className="mb-10">
          We’re committed to creating a{" "}
          <span className="mark"> respectful </span> and secure environment for
          everyone. Here’s how we do it:
        </motion.p>
      </T>
      <div className="flex flex-col lg:flex-row justify-center items-center gap-10">
        <AnimatedImage
          alt="image sly-smiling-bearded-man-business-clothes-pointing"
          src="/sly-smiling-bearded-man-business-clothes-pointing-camera.jpg"
          className="w-full h-72 md:h-137.5 lg:w-2/4 lg:max-w-xl rounded-2xl"
        />
        <div className="space-y-10 lg:max-w-2xl w-full lg:w-2/4">
          {[
            {
              title: t("Community Guidelines"),
              description: t(
                "We have clear, simple rules to ensure respectful behavior. No hate speech, bullying, or inappropriate content ever",
              ),
              icon: MessageSquareHeart,
            },
            {
              title: t("No Private Messaging"),
              description: t(
                "To protect users from unwanted DMs or harassment, MaBook doesn’t support private chat. All interactions are public, open, and friendly.",
              ),
              icon: MessageCircleOff,
            },
            {
              title: t("Easy Reporting Tools"),
              description: t(
                "If you ever see a post or comment that makes you uncomfortable, you can report it instantly. Our moderation team will handle it quickly and fairly.",
              ),
              icon: ToolCase,
            },
            {
              title: t("Human Moderation"),
              description: t(
                "Our team reviews reports and content to make sure the space stays safe, kind, and distraction-free.",
              ),
              icon: UserLock,
            },
          ].map((item, i) => (
            <motion.div key={i} {...FadeLeft} {...ViewPort} className=" w-full">
              <h1 className="text-2xl font-medium flex items-end gap-2 mb-1">
                <item.icon size={35} className="mark" />
                {item.title}
              </h1>
              <p className="ml-5 mt-0">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Community_Safe;
