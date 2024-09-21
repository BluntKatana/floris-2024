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
          size="md"
        >
          I&apos;m a visitor
        </Tag>
        <Tag
          number={1}
          onClick={() => setFilter("recruiter")}
          active={filter === "recruiter"}
          size="md"
        >
          I&apos;m a recruiter
        </Tag>
      </div>
      <div className="flex gap-5 mt-7 flex-col">
        {posts.map((post) => (
          <Link
            className="w-fit h-fit"
            key={post.slug}
            href={`/post/${post.slug}`}
          >
            <FeedCard post={post} />
          </Link>
        ))}
      </div>
    </>
  );
}

function FeedCard({ post }: { post: Post }) {
  return (
    <fieldset className="rounded-md max-w-xl w-fit p-5 border border-border">
      <legend className="text-sm text-muted-foreground text-nowrap px-2">
        {formatDistance(formatPublishedAt(post.metadata.publishedAt))}
      </legend>
      <h3 className="font-semibold text-[22px]">{post.metadata.title}</h3>
      <p className="mt-2">{post.metadata.summary}</p>
      {post.metadata.tags && (
        <div className="flex gap-2 mt-3">
          {post.metadata.tags.map((tag) => (
            <Tag key={tag} number={1} size="sm">
              {`#${tag}`}
            </Tag>
          ))}
        </div>
      )}
    </fieldset>
  );
}
