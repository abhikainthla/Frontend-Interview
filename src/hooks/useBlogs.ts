import { useQuery } from "@tanstack/react-query";
import type { BlogData } from "../types/blogData";

const fetchBlogs = async (): Promise<BlogData[]> => {
  const res = await fetch("http://localhost:3001/blogs");

  if (!res.ok) {
    throw new Error("Failed to fetch blogs");
  }

  return res.json();
};

export const useBlogs = () => {
  return useQuery<BlogData[], Error>({
    queryKey: ["blogs"],
    queryFn: fetchBlogs,
  });
};
