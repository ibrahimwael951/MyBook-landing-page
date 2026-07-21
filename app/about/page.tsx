"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  BookOpen,
  Users,
  Heart,
  Star,
  Zap,
  Shield,
  TrendingUp,
  Award,
  MessageSquare,
  ArrowRight,
  Lightbulb,
} from "lucide-react";
import { T } from "gt-next";
import Footer from "@/components/Footer";
import Image from "next/image";

export default function AboutPage() {
  const values = [
    {
      icon: Heart,
      title: "Passion for Reading",
      description:
        "We believe in the transformative power of books and reading. Every feature we build is designed to enhance your reading journey.",
    },
    {
      icon: Users,
      title: "Community First",
      description:
        "Our vibrant community of readers, authors, and book lovers is at the heart of everything we do. Together, we create magic.",
    },
    {
      icon: Lightbulb,
      title: "Innovation",
      description:
        "We constantly explore new ways to make reading more accessible, enjoyable, and rewarding for everyone.",
    },
    {
      icon: Shield,
      title: "Trust & Safety",
      description:
        "Your privacy and security are our top priorities. We create a safe space for readers to connect and share.",
    },
  ];

  const features = [
    {
      icon: BookOpen,
      title: "Vast Library",
      description:
        "Access thousands of books across all genres and discover your next favorite read.",
    },
    {
      icon: Star,
      title: "Personalized Recommendations",
      description:
        "Get book suggestions tailored to your reading preferences and history.",
    },
    {
      icon: MessageSquare,
      title: "Community Reviews",
      description:
        "Share your thoughts and discover what other readers think about books.",
    },
    {
      icon: TrendingUp,
      title: "Reading Analytics",
      description:
        "Track your reading progress and set goals to stay motivated.",
    },
    {
      icon: Users,
      title: "Book Clubs",
      description:
        "Join reading groups and connect with fellow book enthusiasts.",
    },
    {
      icon: Award,
      title: "Author Connections",
      description:
        "Discover author insights and exclusive content from your favorite writers.",
    },
  ];

  return (
    <main className="mt-20 mb-5">
      <section className="px-3">
        <div className="w-full max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <Badge className="mb-4 gap-1">
                <BookOpen className="w-3 h-3" />
                <T>Our Story</T>
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                <T>Born from a Love of Reading</T>
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  <T>
                    It all started with a simple idea: what if we could create a
                    space where book lovers from around the world could connect,
                    share their passion, and discover new stories together?
                  </T>
                </p>
                <p>
                  <T>
                    Our mission has always been clear: to make reading more
                    accessible, enjoyable, and social. We believe that books
                    have the power to change lives, spark conversations, and
                    build bridges between people from all walks of life.
                  </T>
                </p>
                <p>
                  <T>
                    Every feature we build, every decision we make, is guided by
                    our love for books and our commitment to serving our amazing
                    community of readers.
                  </T>
                </p>
              </div>
              <div className="flex flex-wrap gap-4 mt-8">
                <Button className="gap-2" size="lg">
                  <T>Join Our Community</T>
                  <ArrowRight className="w-4 h-4" />
                </Button>
                <Button variant="outline" size="lg" link="/contact">
                  <T>Contact Us</T>
                </Button>
              </div>
            </div>

            <div className="relative">
              <Card className="overflow-hidden p-0">
                <div className="overflow-hidden aspect-square flex items-center justify-center">
                  <Image
                    src={"/Girl-reading-book.jpg"}
                    alt="Logo"
                    width={2000}
                    height={2000}
                    className="absolute top-2/4 left-2/4 -translate-2/4 w-full h-full object-cover text-primary blur-sm"
                  />
                  <div className="text-center p-8 z-10">
                    <BookOpen className="w-24 h-24 text-primary mx-auto mb-4" />
                    <h4 className="text-2xl font-bold mb-2">
                      <T>Where Stories</T>
                    </h4>
                    <h4 className="text-2xl font-bold">
                      <T>Come Alive</T>
                    </h4>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 px-3">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 gap-1">
              <Heart className="w-3 h-3" />
              <T>Our Values</T>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <T>What We Stand For</T>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <T>
                These core principles guide everything we do and shape the
                experience we create for our community.
              </T>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card
                  key={index}
                  className="hover:shadow-lg transition-all group"
                >
                  <CardContent className="p-6">
                    <div
                      className={`w-14 h-14 rounded-xl bg-primary/20 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}
                    >
                      <Icon className={`w-7 h-7 text-primary`} />
                    </div>
                    <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="bg-muted/30 py-16 px-3">
        <div className="w-full max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <Badge className="mb-4 gap-1">
              <Zap className="w-3 h-3" />
              <T>Features</T>
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              <T>Everything You Need</T>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              <T>
                Powerful tools and features designed to enhance your reading
                experience and connect you with fellow book lovers.
              </T>
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className="hover:shadow-lg transition-all">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-bold mb-2">{feature.title}</h3>
                        <p className="text-sm text-muted-foreground">
                          {feature.description}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
