"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { socialMedia, useCompanyLinks, useMainLinks } from "@/data/links";
import { motion } from "framer-motion";
import { ModeToggle } from "@/components/ModeToggle";
import { T } from "gt-next";

const MotionLink = motion.create(Link);

const Footer = () => {
  const Company = useCompanyLinks();
  const MainLinks = useMainLinks();
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-700 my-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative">
                <Image
                  alt="logo"
                  src="/Logo.png"
                  width={56}
                  height={56}
                  className="relative"
                />
              </div>
              <T>
                <span className="text-3xl font-extrabold">My Book</span>
              </T>
            </Link>
            <T>
              <p className=" leading-relaxed max-w-sm">
                Your digital sanctuary for discovering, tracking, and sharing
                your reading journey with a community of book lovers.
              </p>
            </T>

            <div className="flex items-center gap-3">
              <T>
                <span className="text-sm font-medium ">Theme:</span>
              </T>
              <ModeToggle />
            </div>
          </div>

          <section className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-8 lg:gap-12">
            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-b from-secondary to-primary rounded-full"></div>
                <T>Company</T>
              </h3>
              <div className="space-y-4">
                {Company.map((item, i) => (
                  <MotionLink
                    key={i}
                    whileHover={{ x: 5 }}
                    href={item.href}
                    className="flex items-center gap-3 hover:text-primary! transition-colors group"
                  >
                    <item.icon className="w-5 h-5 shrink-0 mark" />
                    <span className="font-medium">{item.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </MotionLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-b from-secondary to-primary rounded-full"></div>
                <T>Quick Links</T>
              </h3>
              <div className="space-y-4">
                {MainLinks.map((item, i) => (
                  <MotionLink
                    key={i}
                    whileHover={{ x: 5 }}
                    href={item.href}
                    className="flex items-center gap-3 hover:text-primary! transition-colors group"
                  >
                    <item.icon className="w-5 h-5 shrink-0 mark" />
                    <span className="font-medium">{item.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </MotionLink>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-linear-to-b from-secondary to-primary rounded-full"></div>
                <T>Connect</T>
              </h3>
              <div className="space-y-4">
                {socialMedia.map((item, i) => (
                  <MotionLink
                    key={i}
                    whileHover={{ x: 5 }}
                    href={item.href}
                    className="flex items-center gap-3 hover:text-primary! transition-colors group"
                  >
                    <span className="font-medium">{item.title}</span>
                    <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                  </MotionLink>
                ))}
              </div>
            </div>
          </section>
        </section>

        <section className="pt-8 border-t border-neutral-300 dark:border-neutral-700">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm ">
              © {new Date().getFullYear()}{" "}
              <T>
                <span className="font-semibold mark">My Book</span>. All rights
                reserved.
              </T>
            </p>

            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="text-sm mark border-b border-transparent hover:border-primary duration-100"
              >
                <T>Privacy Policy</T>
              </Link>
              <Link
                href="/terms"
                className="text-sm mark border-b border-transparent hover:border-primary duration-100"
              >
                <T>Terms of Service</T>
              </Link>
            </div>
          </div>
        </section>
      </div>
    </footer>
  );
};

export default Footer;
