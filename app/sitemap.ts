import { getPosts } from "./post/parse-posts";

const baseUrl = process.env.BASE_URL;

export default async function sitemap() {
  const blogs = getPosts().map((post) => ({
    url: `${baseUrl}/post/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }));

  const routes = ["", "/post"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString().split("T")[0],
  }));

  return [...routes, ...blogs];
}
