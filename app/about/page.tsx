"use client";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookOpen, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { T, Var } from "gt-next";
import Footer from "@/components/Footer";
import Image from "next/image";
import { Animate, FadeUp, ViewPort } from "@/Animation";
import { AnimatedImage } from "@/components/ui/AnimatedImage";

export default function AboutPage() {
  return (
    <main className="mt-20 mb-5">
      <T>
        <section className="px-3">
          <div className="w-full max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <Badge animated className="mb-4 gap-1">
                  <BookOpen className="w-3 h-3" />
                  Our Story
                </Badge>
                <motion.h2
                  {...FadeUp}
                  animate={{ ...Animate.animateonly }}
                  transition={{ duration: 0.4 }}
                  className="text-3xl md:text-4xl font-bold mb-6"
                >
                  Born from a Love of Reading
                </motion.h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <motion.p
                    {...FadeUp}
                    animate={{ ...Animate.animateonly }}
                    transition={{ duration: 0.5 }}
                  >
                    It all started with a simple idea: what if we could create a
                    space where book lovers from around the world could connect,
                    share their passion, and discover new stories together?
                  </motion.p>
                  <motion.p
                    {...FadeUp}
                    animate={{ ...Animate.animateonly }}
                    transition={{ duration: 0.6 }}
                  >
                    Our mission has always been clear: to make reading more
                    accessible, enjoyable, and social. We believe that books
                    have the power to change lives, spark conversations, and
                    build bridges between people from all walks of life.
                  </motion.p>
                  <motion.p
                    {...FadeUp}
                    animate={{ ...Animate.animateonly }}
                    transition={{ duration: 0.7 }}
                  >
                    Every feature we build, every decision we make, is guided by
                    our love for books and our commitment to serving our amazing
                    community of readers.
                  </motion.p>
                </div>
                <motion.div
                  {...FadeUp}
                  animate={{ ...Animate.animateonly }}
                  transition={{ duration: 0.8 }}
                  className="flex flex-wrap gap-4 mt-8"
                >
                  <Button className="gap-2" size="lg" link="/waitlist">
                    Join WaitList
                    <ArrowRight className="w-4 h-4" />
                  </Button>
                  <Button variant="outline" size="lg" link="/contact">
                    Contact Us
                  </Button>
                </motion.div>
              </div>

              <motion.div {...FadeUp} {...Animate} className="relative">
                <Card className="overflow-hidden p-0">
                  <div className="overflow-hidden aspect-square flex items-center justify-center">
                    <Var>
                      <Image
                        src={"/books.jfif"}
                        alt="Logo"
                        width={2000}
                        height={2000}
                        className="absolute top-2/4 left-2/4 -translate-2/4 w-full h-full object-cover text-primary blur-sm"
                      />
                    </Var>

                    <div className="text-center p-8 z-10">
                      <BookOpen className="w-24 h-24 text-primary mx-auto mb-4" />
                      <h4 className="text-2xl font-bold mb-2">Where Stories</h4>
                      <h4 className="text-2xl font-bold">Come Alive</h4>
                    </div>
                  </div>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CEO Information */}
        <section className="min-h-screen max-w-7xl mx-auto py-20 px-3 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-5">
          <div className="w-full mt-10">
            <motion.h1 {...FadeUp} {...ViewPort} className="text-6xl font-bold">
              Ibrahim Wael
            </motion.h1>
            <motion.p
              {...FadeUp}
              {...ViewPort}
              className="text-muted-foreground text-lg"
            >
              Senior Full-Stack Developer and CEO of My Book.
            </motion.p>
          </div>

          <Var>
            <AnimatedImage
              alt="Ibrahim Wael"
              src="/apolo.png"
              className="rounded-lg mx-auto w-full max-w-lg "
            />
          </Var>
          <motion.p
            {...FadeUp}
            {...ViewPort}
            className="text-muted-foreground md:col-span-2 lg:col-span-1 "
          >
            With 3 years of full-stack experience building products at startups
            like EYCC and Hack Club of STEM Egypt, I've learned that great
            platforms are built for communities, not at them. My Book is my
            mission to create something that brings readers together in a way
            that actually matters.
          </motion.p>
        </section>
      </T>

      <Footer />
    </main>
  );
}
