"use client";

import { Heart, MessageCircle, Share2, MoreHorizontal } from "lucide-react";
import { Card, CardContent } from "../ui/card";
import { Button } from "./button";

interface PostCardProps {
  authorName: string;
  authorHandle: string;
  authorAvatar: string;
  timestamp: string;
  caption: string;
  images: string[];
  commentCount?: number;
  likeCount?: number;
}

export default function PostCard({
  authorName,
  authorHandle,
  authorAvatar,
  timestamp,
  caption,
  images,
  commentCount = 0,
  likeCount = 0,
}: PostCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-[2rem] border-none bg-[#161616] text-white overflow-hidden">
      <CardContent className="flex flex-col gap-5 p-6">
        {/* Header: menu + author */}
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <img
              src={authorAvatar}
              alt={authorName}
              className="h-12 w-12 shrink-0 rounded-full object-cover ring-1 ring-white/10"
            />
            <div className="flex flex-col">
              <span className="font-semibold text-base leading-tight">
                {authorName}
              </span>
              <span className="text-sm text-neutral-400 leading-tight">
                {authorHandle}
              </span>
            </div>
          </div>

          <Button variant={"outline"} size={"icon"} aria-label="Post options">
            <MoreHorizontal size={50} />
          </Button>
        </div>

        {/* Caption */}
        <p className="text-lg leading-relaxed">{caption}</p>

        {/* Timestamp */}
        <span className="text-sm text-neutral-500">{timestamp}</span>

        {/* Images */}
        {images.length > 0 && (
          <div
            className={`grid gap-1.5 overflow-hidden rounded-2xl ${
              images.length === 1 ? "grid-cols-1" : "grid-cols-2"
            }`}
          >
            {images.map((src, i) => (
              <img
                key={src + i}
                src={src}
                alt=""
                className="h-56 w-full object-cover sm:h-72"
              />
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="mt-1 flex items-center justify-between mx-4 ">
          <button
            type="button"
            aria-label="Share"
            className="flex items-center gap-2 hover:text-white transition-colors"
          >
            <Share2 size={20} />
          </button>

          <button
            type="button"
            aria-label="Comments"
            className="flex items-center gap-2 hover:text-blue-400 transition-colors"
          >
            <span className="text-base">{commentCount}</span>
            <MessageCircle size={20} />
          </button>

          <button
            type="button"
            aria-label="Likes"
            className="flex items-center gap-2 hover:text-rose-400 transition-colors"
          >
            <span className="text-base">{likeCount}</span>
            <Heart size={20} />
          </button>
        </div>
      </CardContent>
    </Card>
  );
}
