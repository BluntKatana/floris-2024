import type { MDXComponents } from "mdx/types";
import { customComponents } from "@/app/_components/mdx";

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...customComponents,
    ...components,
  };
}
