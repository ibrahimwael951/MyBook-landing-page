"use client";
import { AnimatePresence, motion } from "framer-motion";
import {
  Bookmark,
  BookUp2,
  Copy,
  Heart,
  Mars,
  MessageCircleOff,
  Quote,
  Share2,
  ShieldCheck,
  ThumbsUp,
  UserRoundPlus,
  Venus,
} from "lucide-react";
import { FadeLeft, FadeUp, ViewPort } from "@/Animation";
import { AnimatedImage } from "../ui/AnimatedImage";
import { Badge } from "../ui/badge";
import { T, useGT } from "gt-next";
import { Card, CardContent } from "../ui/card";
import Book3DModel from "../3dModels/book";
import PostCard from "../ui/postCard";
import AuthorCard from "../ui/AuthorCard";
import { useState } from "react";

const Features = () => {
  const t = useGT();
  const [privacyGender, setPrivacyGender] = useState<
    "girl" | "boy" | "not-selected"
  >("not-selected");

  return (
    <section
      id="features"
      className="relative mb-20 mx-auto max-w-7xl px-5 overflow-hidden"
    >
      <T>
        <div className="flex flex-col items-center text-center mb-14">
          <Badge animated>Best Book Sharing Platform 2026</Badge>

          <motion.h1
            {...FadeLeft}
            {...ViewPort}
            className="text-4xl sm:text-5xl lg:text-7xl mt-4"
          >
            What Awaits <span className="mark">You.</span>
          </motion.h1>
        </div>
      </T>

      <div className="flex flex-col gap-12 lg:gap-16">
        {/* ---------- Feature 1: Post Your Reads ---------- */}
        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="flex justify-between items-center flex-col-reverse lg:flex-row gap-8"
        >
          <div className="flex flex-col gap-6">
            <PostCard
              authorName="Ibrahim wael"
              authorHandle="apolo@"
              authorAvatar="/book-coffee.jpg"
              timestamp="4/2/2026, 3:16:16 AM"
              caption="I love coffee and I just bought this pin this morning. what do u think??"
              images={["/post1.jpg", "/post2.jpg"]}
              commentCount={26}
              likeCount={152}
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start">
            <Badge className="mb-2">
              <BookUp2 size={20} />
              <span>{t("Post Your Reads")}</span>
            </Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("Post Your Reads")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(
                "Upload the book you're currently reading, share a short caption or your thoughts, and let others discover it. Like and comment on your own posts or others' posts, join the conversation, and connect with fellow readers through meaningful discussions.",
              )}
            </p>
          </div>
        </motion.div>

        {/* ---------- Feature 2: Books with 3D Models ---------- */}
        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="flex justify-between items-center flex-col lg:flex-row gap-8"
        >
          <div className="flex flex-col items-center text-center md:items-start">
            <Badge className="mb-2">
              <ThumbsUp size={20} />
              <span>{t("Books with 3D Models")}</span>
            </Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("Books with 3D Models")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(
                "Explore books with stunning 3D models and rich information about every story, character, and author—soon this experience will be fully digital.",
              )}
            </p>
          </div>

          <Card className="flex flex-col gap-6 h-96 w-full max-w-140">
            <CardContent className="flex-1 min-h-0 h-100">
              <Book3DModel
                frontCover="/Book/atomic_Habbits.jpg"
                backCover="/Book/atomic_Habbits.jpg"
                pages={450}
                width={1.8}
                height={2.5}
                depth={0.4}
              />
            </CardContent>
          </Card>
        </motion.div>

        {/* ---------- Feature 3: Follow Your Favorite Authors ---------- */}
        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="flex justify-between items-center flex-col-reverse lg:flex-row gap-8"
        >
          <div className="flex flex-col gap-6">
            <AuthorCard
              name="Naguib Mahfouz"
              avatar="/Naguib Mahfouz.webp"
              bio="Naguib Mahfouz (1911–2006) was an Egyptian novelist and the first Arabic-language writer to win the Nobel Prize in Literature, in 1988. He studied philosophy at Cairo University."
              reviewCount={203}
              followerCount={652}
              bookCount={55}
            />
          </div>

          <div className="flex flex-col items-center text-center md:items-start">
            <Badge className="mb-2">
              <UserRoundPlus size={20} />
              <span>{t("Follow Your Favorite Authors")}</span>
            </Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("Follow Your Favorite Authors")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(
                "Stay connected with all your favorite authors and discover their stories, updates, and personal information you’d love to hear about.",
              )}
            </p>
          </div>
        </motion.div>

        {/* ---------- Feature 4: More Privacy for Girls and Boys ---------- */}
        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="flex justify-between items-center flex-col lg:flex-row gap-8"
        >
          <div className="flex flex-col items-center text-center md:items-start">
            <Badge className="mb-2">
              <ShieldCheck size={20} />
              <span>{t("More Privacy for Girls and Boys")}</span>
            </Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("More Privacy for Girls and Boys")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(
                "Your images stay protected: girls can only be seen by verified girls, and boys by verified boys, with MyBook admins ensuring safety and privacy.",
              )}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex justify-center">
              <div className="inline-flex items-center rounded-full border border-border bg-muted p-1">
                <button
                  type="button"
                  onClick={() => setPrivacyGender("girl")}
                  aria-pressed={privacyGender === "girl"}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    privacyGender === "girl"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Venus size={16} />
                  {t("Girl")}
                </button>
                <button
                  type="button"
                  onClick={() => setPrivacyGender("boy")}
                  aria-pressed={privacyGender === "boy"}
                  className={`flex items-center gap-1.5 rounded-full px-4 py-1.5 text-sm font-medium transition-colors ${
                    privacyGender === "boy"
                      ? "bg-primary text-primary-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  <Mars size={16} />
                  {t("Boy")}
                </button>
              </div>
            </div>

            <div className="max-w-160 grid grid-cols-2 gap-4">
              <motion.div
                animate={{
                  filter: privacyGender === "girl" ? "blur(0px)" : "blur(6px)",
                  opacity: privacyGender === "girl" ? 1 : 0.1,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedImage
                  alt={t("Privacy preview for girls")}
                  src="/girl.png"
                  noAnimate
                  className="rounded-[2rem]"
                />
              </motion.div>

              <motion.div
                animate={{
                  filter: privacyGender === "boy" ? "blur(0px)" : "blur(6px)",
                  opacity: privacyGender === "boy" ? 1 : 0.2,
                }}
                transition={{ duration: 0.3 }}
              >
                <AnimatedImage
                  alt={t("Privacy preview for boys")}
                  src="/boy.png"
                  noAnimate
                  className="rounded-[2rem]"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
        {/* ---------- Feature 5: No Private Chat ---------- */}
        <motion.div
          {...FadeUp}
          {...ViewPort}
          className="flex justify-between items-center flex-col-reverse lg:flex-row gap-8"
        >
          <div className="flex flex-col gap-6">
            <Card className="flex w-full flex-col gap-5 p-6 max-w-150">
              <Quote size={28} className="text-primary" />

              <p className="text-lg font-medium leading-relaxed text-foreground">
                “
                {t(
                  "The best time to plant a tree was 20 years ago. The second best time is now.",
                )}
                ”
              </p>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-primary/20 text-sm font-semibold text-primary">
                    CP
                  </div>
                  <span className="font-semibold">{t("Chinese Proverb")}</span>
                </div>
                <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                  {t("Wisdom")}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-4">
                  <span className="flex items-center gap-1.5">
                    <Heart size={16} />
                    1,845
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Share2 size={16} />
                    623
                  </span>
                  <span className="flex items-center gap-1.5">
                    <Bookmark size={16} />
                    432
                  </span>
                </div>
                <button
                  type="button"
                  className="flex items-center gap-1.5 font-medium text-foreground transition-colors hover:text-primary"
                >
                  <Copy size={16} />
                  {t("Copy")}
                </button>
              </div>
            </Card>
          </div>

          <div className="flex flex-col items-center text-center md:items-start ">
            <Badge className="mb-2">
              <Quote size={20} />
              <span>{t("Daily Quotes")}</span>
            </Badge>
            <h2 className="text-2xl font-semibold sm:text-3xl">
              {t("Daily Quotes")}
            </h2>
            <p className="mt-3 max-w-xl text-base text-muted-foreground sm:text-lg">
              {t(
                "Get a fresh, thought-provoking quote every day from great thinkers and proverbs—like, share, save, or copy your favorites.",
              )}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
