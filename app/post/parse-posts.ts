// source: https://github.com/vercel/examples/blob/main/solutions/blog/app/blog/utils.ts

import matter, { GrayMatterFile } from "gray-matter";
import fs from "fs";
import path from "path";

type MetaData = {
  title: string;
  publishedAt: string;
  summary: string;
  image?: string;
  tags?: string[];
  public?: boolean;
};

function parseFrontmatter(fileContent: string) {
  return matter(fileContent) as GrayMatterFile<string> & {
    data: MetaData;
  };
}

function getMDXFiles(dir: fs.PathLike) {
  return fs.readdirSync(dir).filter((file) => path.extname(file) === ".mdx");
}

function readMDXFile(filePath: fs.PathOrFileDescriptor) {
  const rawContent = fs.readFileSync(filePath, "utf-8");
  return parseFrontmatter(rawContent);
}

function getMDXData(dir: string) {
  const mdxFiles = getMDXFiles(dir);
  return mdxFiles.map((file) => {
    const { content, data } = readMDXFile(path.join(dir, file));
    const slug = path.basename(file, path.extname(file));
    return {
      metadata: data,
      slug,
      content,
    };
  });
}

export function getPublicPosts() {
  const posts = getMDXData(path.join(process.cwd(), "app", "post"));

  // TEMP: Update this when implementing projects and thoughts sections
  return [];
  return posts.filter((post) => post.metadata.public);
}

export type Post = ReturnType<typeof getPublicPosts>[number];
