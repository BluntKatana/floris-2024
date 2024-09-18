"use client";

import { Tag } from "./tag";
import { useState } from "react";
import { Post } from "../post/parse-posts";
import Link from "next/link";
import { formatDistance, formatPublishedAt } from "../utils/date";

/**
Potential items on the feed:
- Start of career things
- New projects
- Random fun thoughts (like some UI thing I saw, or some new algo I learned)
- Traveling
- (anything I have on LinkedIn as well... :) )

Each item has a couple tags to filter by (and use as a category):
- career, project, fun, travel, thought, ...

Each item must have:
- title, description, date

Each item may have:
- image, link to full post or website, ...
*/

type FeedProps = {
  posts: Post[];
};

export function Feed({ posts }: FeedProps) {
  const [filter, setFilter] = useState<"visitor" | "recruiter" | "all">("all");

  return (
    <>
      <div className="flex gap-2 text-sm">
        <Tag
          number={1}
          onClick={() => setFilter("all")}
          active={filter === "all"}
        >
          I&apos;m a visitor
        </Tag>
        <Tag
          number={1}
          onClick={() => setFilter("recruiter")}
          active={filter === "recruiter"}
        >
          I&apos;m a recruiter
        </Tag>
      </div>
      <div className="space-y-5 mt-7">
        {posts.map((post) => (
          <Link key={post.slug} href={`/post/${post.slug}`}>
            <FeedCard post={post} />
          </Link>
        ))}
      </div>
    </>
  );
}

function FeedCard({ post }: { post: Post }) {
  return (
    <div className="rounded-md max-w-xl w-fit p-5 border border-border">
      <div className="flex justify-between items-center">
        <h3 className="font-semibold text-[22px]">{post.metadata.title}</h3>
        <time className="text-sm text-muted-foreground">
          {formatDistance(formatPublishedAt(post.metadata.publishedAt))}
        </time>
      </div>
      <p className="mt-4">{post.metadata.summary}</p>
    </div>
  );
}
