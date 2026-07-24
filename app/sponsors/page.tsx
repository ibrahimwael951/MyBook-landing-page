"use client";
import FeatureCard from "@/components/FeatureCard";
import {
  Award,
  BookOpen,
  BadgeCheck,
  Feather,
  ScrollText,
  CalendarDays,
  Landmark,
  Heart,
  Compass,
  Rocket,
  Handshake,
  Sparkles,
  Library,
  FileText,
} from "lucide-react";
import { motion } from "framer-motion";
import { Animate, FadeLeft, FadeUp, ViewPort } from "@/Animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { T, useGT, Var } from "gt-next";
import Threads from "@/components/Threads";

export default function SponsorFeaturesPage() {
  const t = useGT();

  // Pre-launch positioning: no traffic/engagement numbers to lean on yet,
  // so the pitch is built around founding-partner status and brand
  // alignment with reading culture instead of reach or analytics.
  const features = [
    {
      icon: Award,
      title: t("Founding Partner Recognition"),
      description: t(
        "Be permanently credited as one of MyBook's founding supporters — a story you can only claim once, and one that only exists before launch.",
      ),
    },
    {
      icon: Heart,
      title: t("Brand Alignment With Reading Culture"),
      description: t(
        "Attach your name to literacy, storytelling, and lifelong reading — values readers already trust, without a hard sell in sight.",
      ),
    },
    {
      icon: Compass,
      title: t("Shape the Platform From Day One"),
      description: t(
        "Work directly with us on badge design, launch messaging, and featured content before the public ever sees any of it.",
      ),
    },
    {
      icon: Rocket,
      title: t("Guaranteed Launch Visibility"),
      description: t(
        "Lock in homepage and sponsor-page placement now, ahead of the demand — and the pricing — that comes after we're live.",
      ),
    },
    {
      icon: BadgeCheck,
      title: t("Custom Badge System"),
      description: t(
        "Help design a badge users can earn by engaging with your content, live and ready from the very first day MyBook opens.",
      ),
    },
    {
      icon: Handshake,
      title: t("A Direct Line to the Team"),
      description: t(
        "As an early partner, your feedback shapes the roadmap directly — not a support ticket queue, an actual seat at the table.",
      ),
    },
  ];

  const benefits = [
    {
      category: t("For Publishing Houses"),
      items: [
        {
          icon: Library,
          text: t(
            "Reserve premium placement for selected titles ahead of public launch",
          ),
        },
        {
          icon: FileText,
          text: t(
            "Provide licensed digital excerpts the platform will feature from day one",
          ),
        },
        {
          icon: BookOpen,
          text: t(
            "Help shape the curated reading collections early users see first",
          ),
        },
        {
          icon: BadgeCheck,
          text: t("Co-create publication-linked badges tied to your catalog"),
        },
      ],
    },
    {
      category: t("For Authors"),
      items: [
        {
          icon: Feather,
          text: t("Be featured among the very first author profiles at launch"),
        },
        {
          icon: ScrollText,
          text: t(
            "Share licensed excerpts or works-in-progress with a built-in early audience",
          ),
        },
        {
          icon: Award,
          text: t(
            "Create a symbolic badge tied to your book or a reading milestone",
          ),
        },
        {
          icon: Handshake,
          text: t(
            "Build a presence rooted in ideas, before the platform is public",
          ),
        },
      ],
    },
    {
      category: t("For Literary Organizations"),
      items: [
        {
          icon: Landmark,
          text: t(
            "Help define the reading culture MyBook is built around from day one",
          ),
        },
        {
          icon: CalendarDays,
          text: t(
            "Sponsor a themed reading season as part of the launch calendar",
          ),
        },
        {
          icon: BookOpen,
          text: t(
            "Contribute educational or archival content that anchors the library",
          ),
        },
        {
          icon: Sparkles,
          text: t(
            "Be recognized as a founding cultural partner, not just a sponsor",
          ),
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen ">
      <header className="relative py-12 px-5 flex flex-col justify-center text-center mb-16 overflow-hidden h-screen ">
        <T>
          <Var>
            <div className="absolute  inset-0 -z-10 overflow-hidden opacity-50 lg:opacity-70">
              <Threads
                color={[1, 1, 1]}
                amplitude={1.5}
                distance={0.3}
                enableMouseInteraction
              />
            </div>
          </Var>

          <Badge animated className="mx-auto mb-4">
            Sponsors Features
          </Badge>
          <motion.h1
            {...FadeUp}
            animate={{ ...Animate.animateonly }}
            transition={{ ...Animate.transition, delay: 0.1 }}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            Partner With Us
          </motion.h1>
          <motion.p
            {...FadeUp}
            animate={{ ...Animate.animateonly }}
            transition={{ ...Animate.transition, delay: 0.2 }}
            className="text-xl max-w-3xl mx-auto mb-8"
          >
            Support our book-loving community while gaining visibility and
            engagement. A partnership built on mutual respect and shared love
            for literature.
          </motion.p>
          <motion.div
            {...FadeUp}
            animate={{ ...Animate.animateonly }}
            transition={{ ...Animate.transition, delay: 0.3 }}
            className="flex gap-4 justify-center"
          >
            <Button size={"xl"} link="/contact?subject=partnership">
              Become a Partner
            </Button>
            <Button size={"xl"} variant={"outline"} link="/sponsors">
              Our Sponsors
            </Button>
          </motion.div>
        </T>
      </header>
      <div className="max-w-6xl mx-auto px-4">
        {/* Why Become a Founding Partner */}
        <motion.section
          {...FadeUp}
          animate={{ ...Animate.animateonly }}
          transition={{ ...Animate.transition, delay: 0.4 }}
          className="mb-16"
        >
          <T>
            <div className="text-center mb-8">
              <motion.h1 {...FadeUp} {...ViewPort} className="font-bold">
                Why Become a Founding Partner?
              </motion.h1>
              <motion.p
                {...FadeUp}
                {...ViewPort}
                className="text-muted-foreground mt-3 max-w-2xl mx-auto"
              >
                MyBook hasn't launched yet — which means the founding-partner
                spot is still open, and it only gets claimed once.
              </motion.p>
            </div>
          </T>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <FeatureCard key={index} feature={feature} />
            ))}
          </div>
        </motion.section>

        {/* Partnership Benefits */}
        <section className="mb-16">
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-3xl font-bold mb-8 text-center"
            >
              What Partnership Looks Like
            </motion.h2>
          </T>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="relative bg-card border rounded-lg p-6 overflow-hidden"
              >
                <motion.h3
                  {...FadeLeft}
                  {...ViewPort}
                  className="text-2xl font-semibold mb-4 text-center mark"
                >
                  {benefit.category}
                </motion.h3>
                <ul className="space-y-3">
                  {benefit.items.map((item, idx) => (
                    <motion.li
                      key={idx}
                      {...FadeLeft}
                      {...ViewPort}
                      className="flex items-start gap-2"
                    >
                      <item.icon size={18} className="shrink-0 mt-0.5" />
                      <span className="text-sm">{item.text}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-card border rounded-lg p-12">
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-3xl font-bold mb-4"
            >
              Help Us Build It From the Ground Up
            </motion.h2>
            <motion.p
              {...FadeUp}
              {...ViewPort}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Founding partnerships are limited by nature — once MyBook
              launches, this becomes a very different conversation. Join us
              while it's still the ground floor.
            </motion.p>
            <Button
              link="/contact?subject=partnership"
              size={"xxl"}
              GlareHoverClassName="mx-auto"
            >
              Become a Founding Partner
            </Button>
          </T>
        </section>
      </div>
      <Footer />
    </main>
  );
}
