import { Skeleton } from "../ui/skeleton";

const BlogContentSkeleton = () => {
  return (
    <div className="space-y-6">
      <Skeleton className="h-64 w-full rounded-2xl" />

      <div className="space-y-4">
        <Skeleton className="h-8 w-3/4" />
        <Skeleton className="h-4 w-40" />
      </div>

      <div className="space-y-3">
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-full" />
        <Skeleton className="h-4 w-5/6" />
        <Skeleton className="h-4 w-4/6" />
      </div>
    </div>
  );
};

export default BlogContentSkeleton;
