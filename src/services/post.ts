import path from "path";
import fs from "fs";
import { sync } from "glob";
import { MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

const BASE_PATH = "/contents/posts";
const POSTS_PATH = path.join(process.cwd(), BASE_PATH);

interface PostMatter {
  title: string;
  date: Date;
  categories: string[];
}

export interface Post extends PostMatter {
  slug: string;
  mdx: MDXRemoteSerializeResult;
}

const parsePost = async (postPath: string): Promise<Post> => {
  const file = fs.readFileSync(postPath, "utf8");
  const { data, content } = matter(file);
  const grayMatter = data as PostMatter;
  const slug = postPath
    .slice(postPath.indexOf(BASE_PATH))
    .replace(`${BASE_PATH}/`, "")
    .replace("/index.mdx", "");
  const mdx = await serialize(content, {
    mdxOptions: {
      remarkPlugins: [],
      rehypePlugins: [],
      format: "mdx",
    },
  });

  return {
    ...grayMatter,
    slug,
    mdx,
  };
};

export const getPosts = async (): Promise<Post[]> => {
  const postPaths: string[] = sync(`${POSTS_PATH}/**/*.mdx`);
  const result = await Promise.all(
    postPaths.map((postPath) => {
      return parsePost(postPath);
    })
  );

  return result.sort((a: Post, b: Post) => {
    const dateA = a.date;
    const dateB = b.date;

    if (dateA > dateB) return -1;
    if (dateA < dateB) return 1;
    return 0;
  });
};
