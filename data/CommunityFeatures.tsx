import {
  BicepsFlexed,
  MessageCircleOff,
  MessageSquareHeart,
  SmilePlus,
  ToolCase,
  UserLock,
} from "lucide-react";
import { useGT } from "gt-next";


export const useCommunityFeatures = () => {
  const t = useGT();

  return [
    { title: t("Shared Love for Books"), description: t("Everyone here is connected by a simple passion: reading. Whether you’re into fiction, non-fiction, self-help, fantasy, or poetry you’ll always find someone who relates to your taste or wants to discover new reads."), icon: MessageSquareHeart, },
    { title: t("Meaningful Interactions"), description: t("You can post the books you’re reading and receive likes, comments, and encouragement from fellow readers. Comments like “Great choice!” or “This inspired me to start reading again!” are what make MaBook warm and personal."), icon: SmilePlus, },
    { title: t("Motivation Over Judgment"), description: t("No one here is judging how fast you read, what genre you like, or how long your post is. This is a space to cheer each other on, not compare."), icon: BicepsFlexed, },
  ];
};

export const useHowTOSaveIt = () => {
  const t = useGT();

  return [
    { title: t("Community Guidelines"), description: t("We have clear, simple rules to ensure respectful behavior. No hate speech, bullying, or inappropriate content ever"), icon: MessageSquareHeart, },
    { title: t("No Private Messaging"), description: t("To protect users from unwanted DMs or harassment, MaBook doesn’t support private chat. All interactions are public, open, and friendly."), icon: MessageCircleOff, },
    { title: t("Easy Reporting Tools"), description: t("If you ever see a post or comment that makes you uncomfortable, you can report it instantly. Our moderation team will handle it quickly and fairly."), icon: ToolCase, },
    { title: t("Human Moderation"), description: t("Our team reviews reports and content to make sure the space stays safe, kind, and distraction-free."), icon: UserLock, },
  ];
};
