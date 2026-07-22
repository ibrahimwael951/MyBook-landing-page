import {
  BookHeart,
  BookUp2,
  MessageCircleOff,
  ShieldCheck,
  ThumbsUp,
  UserRoundPlus,
} from "lucide-react";

import { useGT } from "gt-next";

export const useFeatures = () => {
  const t = useGT();

  return [
    {
      title: t("Post Your Reads"),
      description: t(
        "Upload the book you’re currently reading, write a short caption or thought, and let others engage with it.",
      ),
      icon: BookUp2,
      image: "/features/post.png",
    },
    {
      title: t("Books with 3D Models"),
      description: t(
        "Explore books with stunning 3D models and rich information about every story, character, and author—soon this experience will be fully digital.",
      ),
      icon: ThumbsUp,
      image: "/features/books.png",
    },
    {
      title: t("Follow Your Favorite Authors"),
      description: t(
        "Stay connected with all your favorite authors and discover their stories, updates, and personal information you’d love to hear about.",
      ),
      icon: UserRoundPlus,
      image: "/features/post.png",
    },
    {
      title: t("More Privacy for Girls and Boys"),
      description: t(
        "Your images stay protected: girls can only be seen by verified girls, and boys by verified boys, with MyBook admins ensuring safety and privacy.",
      ),
      icon: ShieldCheck,
      image: "/features/post.png",
    },
    {
      title: t("No Private Chat"),
      description: t(
        "We keep the platform clean and distraction-free. There’s no private messaging—just public interaction that motivates and uplifts.",
      ),
      icon: MessageCircleOff,
      image: "/features/post.png",
    },
  ];
};

export const features = [
  {
    title: "Easy to Use",
    description:
      "Designed with simplicity in mind. You don’t need to be tech-savvy. Just log in and start sharing!",
    icon: BookHeart,
  },
  {
    title: "Post Your Reads",
    description:
      "Upload the book you’re currently reading, write a short caption or thought, and let others engage with it.",
    icon: BookUp2,
  },
  {
    title: "Books with 3D Models",
    description:
      "Explore books with stunning 3D models and rich information about every story, character, and author—soon this experience will be fully digital.",
    icon: ThumbsUp,
  },
  {
    title: "Follow Your Favorite Authors",
    description:
      "Stay connected with all your favorite authors and discover their stories, updates, and personal information you’d love to hear about.",
    icon: UserRoundPlus,
  },
  {
    title: "More Privacy for Girls and Boys",
    description:
      "Your images stay protected: girls can only be seen by verified girls, and boys by verified boys, with MyBook admins ensuring safety and privacy.",
    icon: ShieldCheck,
  },
  {
    title: "No Private Chat",
    description:
      "We keep the platform clean and distraction-free. There’s no private messaging—just public interaction that motivates and uplifts.",
    icon: MessageCircleOff,
  },
];
