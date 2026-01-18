import { useState, useEffect } from "react";
import BlogCard from "../components/BlogCard";
import BlogContent from "../components/BlogContent";
import { useBlogs } from "../hooks/useBlogs";
import BlogCardSkeleton from "../components/skeletons/BlogCardSkeleton";
import BlogContentSkeleton from "../components/skeletons/BlogContentSkeleton";

interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage?: string;
  content?: string;
}

const Home = () => {
  const { data: blogs, isLoading, isError } = useBlogs();

const [selectedBlog, setSelectedBlog] = useState<Blog | null>(null);


  useEffect(() => {
  if (blogs?.length && !selectedBlog) {
    setSelectedBlog(blogs[0]);
  }
}, [blogs, selectedBlog]);


  return (
   <div className="space-y-10">

  {/* Header */}
  <div className="flex flex-col items-center text-center">
    <h1 className="text-4xl font-bold mb-2">CA Monk Blog</h1>
    <p className="text-[#646a73] text-lg">
      Stay updated with the latest trends in finance, accounting, and career growth.
    </p>
  </div>

  {/* Layout */}
  <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,420px)_1fr] gap-6 lg:gap-10">

    {/* Left: Blog List */}
    <div className="h-[calc(100vh-220px)] overflow-y-auto pr-2">
      <h2 className="mb-4 text-2xl font-semibold sticky top-0 z-10 pb-2">
        Latest Articles
      </h2>

      {isLoading ? (
        <div className="space-y-4">
          {Array.from({ length: 5 }).map((_, i) => (
            <BlogCardSkeleton key={i} />
          ))}
        </div>
      ) : (
        <div className="space-y-4">
          {blogs?.map((blog) => (
            <BlogCard
              key={blog.id}
              blog={blog}
              onClick={() => setSelectedBlog(blog)}
              isActive={selectedBlog?.id === blog.id}
            />
          ))}
        </div>
      )}
    </div>

    {/* Right: Selected Blog */}
    <div className="bg-background rounded-2xl shadow-sm p-4 md:p-6">
      {isLoading ? (
        <BlogContentSkeleton />
      ) : selectedBlog ? (
        <BlogContent blog={selectedBlog} />
      ) : (
        <div className="flex h-full items-center justify-center text-muted-foreground">
          Select a blog to read
        </div>
      )}
    </div>
  </div>
</div>

  );
};

export default Home;
