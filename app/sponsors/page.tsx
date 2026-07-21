"use client";
import FeatureCard from "@/components/FeatureCard";
import {
  Award,
  BookOpen,
  TrendingUp,
  Users,
  BarChart3,
  Eye,
  Target,
  Library,
  BadgeCheck,
  FileText,
  Feather,
  ScrollText,
  CalendarDays,
  Landmark,
} from "lucide-react";
import { motion } from "framer-motion";
import { Animate, FadeLeft, FadeUp, ViewPort } from "@/Animation";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Footer from "@/components/Footer";
import { T, useGT } from "gt-next";

export default function SponsorFeaturesPage() {
  const t = useGT();
  const features = [
    {
      icon: Eye,
      title: t("Homepage Visibility"),
      description: t(
        "Your logo and name prominently displayed in our dedicated sponsors section on the homepage, visible to thousands of daily visitors.",
      ),
    },
    {
      icon: Award,
      title: t("Custom Badge System"),
      description: t(
        "Create and manage custom badges that users can earn by visiting your profile or engaging with your content. Track engagement in real-time through your dashboard.",
      ),
    },
    {
      icon: BookOpen,
      title: t("Book License Integration"),
      description: t(
        "Provide book licenses that we'll host on our platform. Your books will be available to our community with proper attribution and links back to your catalog.",
      ),
    },
    {
      icon: Users,
      title: t("Direct Audience Access"),
      description: t(
        "Connect with a dedicated community of book lovers. Users who support your partnership get special recognition on their profiles.",
      ),
    },
    {
      icon: BarChart3,
      title: t("Analytics Dashboard"),
      description: t(
        "Access detailed analytics about user engagement, badge claims, profile visits, and overall reach within our platform.",
      ),
    },
    {
      icon: Target,
      title: t("Targeted Recognition"),
      description: t(
        "Your partnership appears only in designated areas (homepage sponsors section and dedicated partner pages) - never intrusive, always respectful.",
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
            "Present selected titles within a focused reading-oriented platform",
          ),
        },
        {
          icon: FileText,
          text: t(
            "Provide licensed digital access to books or selected chapters",
          ),
        },
        {
          icon: BookOpen,
          text: t(
            "Support curated reading experiences and thematic collections",
          ),
        },
        {
          icon: TrendingUp,
          text: t(
            "Understand which literary topics attract sustained reader interest",
          ),
        },
        {
          icon: BadgeCheck,
          text: t(
            "Offer publication-linked badges that recognize reader engagement",
          ),
        },
      ],
    },
    {
      category: t("For Authors"),
      items: [
        {
          icon: Feather,
          text: t(
            "Highlight published works or works-in-progress in a respectful context",
          ),
        },
        {
          icon: ScrollText,
          text: t(
            "Share licensed excerpts or author-approved reading materials",
          ),
        },
        {
          icon: Award,
          text: t(
            "Create symbolic badges tied to specific books or reading milestones",
          ),
        },
        {
          icon: BookOpen,
          text: t(
            "Participate in long-form literary discussions around your work",
          ),
        },
        {
          icon: BadgeCheck,
          text: t(
            "Build a lasting author presence based on ideas, not promotion",
          ),
        },
      ],
    },
    {
      category: t("For Literary Organizations"),
      items: [
        {
          icon: Landmark,
          text: t("Support reading culture and long-term literary initiatives"),
        },
        {
          icon: CalendarDays,
          text: t("Sponsor reading themes, seasons, or cultural programs"),
        },
        {
          icon: BookOpen,
          text: t("Contribute educational or archival reading materials"),
        },
        {
          icon: FileText,
          text: t("Provide legally licensed cultural or educational content"),
        },
        {
          icon: Award,
          text: t(
            "Recognize participation through symbolic, non-commercial badges",
          ),
        },
      ],
    },
  ];

  const dashboardFeatures = [
    t("Badge Creation & Management - Design custom badges users can earn"),
    t("User Engagement Metrics - See who's supporting your partnership"),
    t("Content License Upload - Easily add book licenses to the platform"),
    t("Profile Customization - Control your sponsor profile appearance"),
    t("Analytics Reports - Monthly reports on reach and engagement"),
    t("Badge Distribution - Track who claimed your badges and when"),
  ];

  return (
    <main className="min-h-screen py-12 mt-20">
      <div className="max-w-6xl mx-auto px-4">
        {/* Header */}
        <header className="text-center mb-16">
          <T>
            <Badge className="mx-auto mb-4">Sponsors Features</Badge>
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
                See Our Sponsors
              </Button>
            </motion.div>
          </T>
        </header>

        {/* What We Offer */}
        <motion.section
          {...FadeUp}
          animate={{ ...Animate.animateonly }}
          transition={{ ...Animate.transition, delay: 0.4 }}
          className="mb-16"
        >
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-3xl font-bold mb-8 text-center"
            >
              What We Offer
            </motion.h2>
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
              Partnership Benefits
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

        {/* How It Works */}
        <section className="mb-16">
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-3xl font-bold mb-8 text-center"
            >
              How It Works
            </motion.h2>
          </T>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "1",
                title: t("Apply"),
                description: t(
                  "Submit your partnership application with details about your organization and what you'd like to contribute.",
                ),
              },
              {
                step: "2",
                title: t("Setup"),
                description: t(
                  "Once approved, we'll set up your profile, dashboard access, and help you customize your presence.",
                ),
              },
              {
                step: "3",
                title: t("Contribute"),
                description: t(
                  "Provide financial support, book licenses, or content. Create custom badges for user engagement.",
                ),
              },
              {
                step: "4",
                title: t("Engage"),
                description: t(
                  "Monitor your dashboard, track badge claims, and see how users engage with your partnership.",
                ),
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                {...FadeUp}
                {...ViewPort}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {step.step}
                </div>
                <h3 className="font-semibold mb-2">{step.title}</h3>
                <p className="max-w-96 mx-auto text-sm text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* What We DON'T Do */}
        <section className="mb-16 bg-muted/50 border rounded-lg p-8">
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-2xl font-bold mb-4"
            >
              Our Commitment to Integrity
            </motion.h2>
            <motion.p {...FadeUp} {...ViewPort} className="mb-6">
              We believe in transparent, respectful partnerships. Here's what we
              guarantee:
            </motion.p>
          </T>
          <ul className="space-y-3">
            {[
              t("No sponsor names or ads inside book content or user posts"),
              t(
                "No manipulation of book rankings or recommendation algorithms",
              ),
              t(
                "No tracking scripts or invasive analytics on user reading behavior",
              ),
              t("No pop-ups, banners, or disruptive promotional content"),
              t(
                "Your presence is limited to: homepage sponsors section and dedicated partner pages only",
              ),
              t(
                "Badge system is opt-in - users choose to engage with your partnership",
              ),
            ].map((item, index) => (
              <motion.li
                key={index}
                {...FadeLeft}
                {...ViewPort}
                className="flex items-start gap-3"
              >
                <div className="w-6 h-6 rounded-full bg-success/20 flex items-center justify-center shrink-0 mt-0.5">
                  ✓
                </div>
                <span className="text-sm">{item}</span>
              </motion.li>
            ))}
          </ul>
        </section>

        {/* CTA */}
        <section className="text-center bg-card border rounded-lg p-12">
          <T>
            <motion.h2
              {...FadeUp}
              {...ViewPort}
              className="text-3xl font-bold mb-4"
            >
              Ready to Partner With Us?
            </motion.h2>
            <motion.p
              {...FadeUp}
              {...ViewPort}
              className="text-lg mb-8 max-w-2xl mx-auto"
            >
              Join our community of publishers, authors, and literary
              organizations who support accessible reading culture.
            </motion.p>
            <Button
              link="/contact?subject=partnership"
              size={"xxl"}
              GlareHoverClassName="mx-auto"
            >
              Get Started Now!
            </Button>
          </T>
        </section>
      </div>
      <Footer />
    </main>
  );
}
