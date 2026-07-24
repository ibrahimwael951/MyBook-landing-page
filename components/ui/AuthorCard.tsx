"use client";

import { Heart, Star, Users, BookOpen } from "lucide-react";
import { Card, CardContent } from "../ui/card";

interface AuthorCardProps {
  name: string;
  avatar: string;
  bio: string;
  isFollowing?: boolean;
  reviewCount?: number;
  followerCount?: number;
  bookCount?: number;
  onFollowClick?: () => void;
}

export default function AuthorCard({
  name,
  avatar,
  bio,
  isFollowing = false,
  reviewCount = 0,
  followerCount = 0,
  bookCount = 0,
  onFollowClick,
}: AuthorCardProps) {
  return (
    <Card className="w-full max-w-xl rounded-[2rem] border-none overflow-hidden">
      <CardContent className="flex flex-col gap-5 p-6">
        {/* Header: follow button + author */}
        <div className="flex items-start justify-between">
          <button
            type="button"
            onClick={onFollowClick}
            className={`flex items-center gap-2 rounded-full px-4 py-1.5 text-sm font-semibold transition-colors ${
              isFollowing
                ? "bg-transparent text-primary ring-1 ring-primary/60"
                : "bg-primary text-white dark:text-black  hover:bg-emerald-300"
            }`}
          >
            {isFollowing ? "Following" : "Follow"}
            <Heart size={16} className={isFollowing ? "fill-primary" : ""} />
          </button>

          <div className="flex items-center gap-3">
            <span className="text-right text-xl font-bold leading-tight">
              {name}
            </span>
            <img
              src={avatar}
              alt={name}
              className="h-14 w-14 shrink-0 rounded-full object-cover  "
            />
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm leading-relaxed">{bio}</p>

        {/* Stats */}
        <div className="mt-1 flex items-center gap-6 text-sm">
          <div className="flex items-center gap-2">
            <span >(reviews {reviewCount})</span>
            <span className="font-semibold">{reviewCount}</span>
            <Star size={16} className="fill-amber-400 text-amber-400" />
          </div>

          <div className="flex items-center gap-2">
            <span>Followers</span>
            <span className="font-semibold">{followerCount}</span>
            <Users size={16} />
          </div>

          <div className="flex items-center gap-2">
            <span>Books</span>
            <span className="font-semibold">{bookCount}</span>
            <BookOpen size={16} />
          </div>
        </div>
      </CardContent>
    </Card>
  );
}