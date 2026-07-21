"use client";
import { FadeUp, ViewPort } from "@/Animation";
import type { LucideIcon } from "lucide-react";
import { motion } from "framer-motion";

interface FeatureCardProps {
  feature: {
    icon: LucideIcon;
    title: string;
    description: string;
  };
}

export default function FeatureCard({ feature }: FeatureCardProps) {
  const Icon = feature.icon;

  return (
    <motion.div
      {...FadeUp}
      {...ViewPort}
      className="bg-card border rounded-lg p-6 hover:shadow-lg transition-shadow"
    >
      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
        <Icon size={24} className="text-primary" />
      </div>
      <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
      <p className="text-sm text-muted-foreground">{feature.description}</p>
    </motion.div>
  );
}
