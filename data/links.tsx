import {
  Bookmark,
  BookOpen,
  Contact,
  HeartPlus,
  Home,
  Info,
  InfoIcon,
  Quote,
  Signature,
  Sparkles,
  Users,
} from "lucide-react";
import { useGT } from "gt-next";

export const useMainLinks = () => {
  const t = useGT();

  return [
    { href: "/", title: t("Home"), icon: Home },
    { href: "/about", title: t("About"), icon: InfoIcon },
    { href: "/features", title: t("Features"), icon: Sparkles },
    { href: "/community", title: t("Community"), icon: Users },
    { href: "/sponsors", title: t("Sponsors"), icon: HeartPlus },
  ];
};
export const useLoggedInLinks = () => {
  const t = useGT();

  return [
    { href: "/feed", title: t("Posts"), icon: Home },
    { href: "/quotes", title: t("Quotes"), icon: Quote },
    { href: "/books", title: t("Books"), icon: BookOpen },
    { href: "/authors", title: t("Authors"), icon: Signature },
    { href: "/bookmarks", title: t("Bookmarks"), icon: Bookmark },
  ];
};

export const useCompanyLinks = () => {
  const t = useGT();

  return [
    { href: "/about", title: t("About"), icon: Info },
    { href: "/contact", title: t("Contact Us"), icon: Contact },
    { href: "/sponsors", title: t("Sponsors"), icon: HeartPlus },
  ];
};

export const socialMedia = [
  {
    title: "instagram",
    href: "https://www.instagram.com/ma_book95/",
  },
  {
    title: "WhatsApp Channel",
    href: "https://whatsapp.com/channel/0029VbC7iiqLo4hjOiJik402",
  },
];
