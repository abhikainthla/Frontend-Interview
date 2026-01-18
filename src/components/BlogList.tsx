import { useBlogs } from "../hooks/useBlogs";
import BlogCard from "./BlogCard";

const BlogList = () => {
  const { data, isLoading, isError, error } = useBlogs();

  if (isLoading) {
    return <p className="text-gray-500">Loading blogs...</p>;
  }

  if (isError) {
    return <p className="text-red-500">{error.message}</p>;
  }

  return (
    <div className="grid gap-4">
      {data?.map((blog) => (
        <BlogCard key={blog.id} blog={blog} />
      ))}
    </div>
  );
};

export default BlogList;
