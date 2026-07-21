"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useMainLinks } from "@/data/links";
import { Animate, FadeDown } from "@/Animation";
import { Button } from "./ui/button";
import { usePathname } from "next/navigation";
import LocaleSelector from "./LanguageSelector";
import { ModeToggle } from "@/components/ModeToggle";
import { Var } from "gt-next";

const Navbar = () => {
  const mainLinks = useMainLinks();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <>
      <motion.nav
        {...FadeDown}
        {...Animate}
        className="fixed top-2 left-1/2 z-50 flex h-14 w-[min(1100px,calc(100%-1rem))] -translate-x-1/2 items-center justify-between rounded-lg border border-border/70 bg-background/70 px-3 py-2 shadow-lg backdrop-blur-md sm:px-5"
      >
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/Logo.png"
            alt="Logo"
            width={200}
            height={200}
            className="h-9 w-9"
          />
          <span className="text-lg font-semibold">My Book</span>
        </Link>

        <div className="hidden items-center gap-2 lg:flex">
          {mainLinks.map((item) => (
            <Button
              key={item.title}
              variant={pathname === item.href ? "default" : "ghost"}
              link={item.href}
              className="px-3"
            >
              <span>{item.title}</span>
            </Button>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button link="/waitlist" size="sm">
            <span>Join Waitlist</span>
            <ArrowRight size={16} />
          </Button>

          <motion.button
            type="button"
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen((prev) => !prev)}
            whileTap={{ scale: 0.95 }}
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border/70 bg-background/70 text-foreground shadow-sm backdrop-blur-md lg:hidden"
          >
            {isMenuOpen ? <X size={18} /> : <Menu size={18} />}
          </motion.button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.98 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
            className="fixed left-1/2 md:right-2 md:left-auto top-18 z-40 w-[calc(100%-1rem)] md:w-80 -translate-x-1/2 md:translate-0 rounded-lg border border-border/70 bg-background/80 p-3 shadow-lg backdrop-blur-md lg:hidden"
          >
            <div className="flex flex-col gap-2">
              {mainLinks.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: -6 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <Button
                    variant={pathname === item.href ? "default" : "ghost"}
                    link={item.href}
                    className="w-full"
                    GlareHoverClassName="w-full"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <item.icon
                      className={`h-4 w-4 ${pathname === item.href ? "text-secondary" : "text-primary"}`}
                    />
                    <span>{item.title}</span>
                  </Button>
                </motion.div>
              ))}
            </div>
            <Var>
              <div className="mt-5 flex items-center justify-center gap-2">
                <ModeToggle />
                <LocaleSelector />
              </div>
            </Var>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
