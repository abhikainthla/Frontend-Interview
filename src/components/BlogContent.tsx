import { Button } from "./ui/button";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { MessageSquare, Share2, ThumbsUp } from 'lucide-react';

interface Blog {
  id: string;
  title: string;
  category: string[];
  description: string;
  date: string;
  coverImage?: string;
  content?: string;
}

interface BlogCardProps {
  blog: Blog;
}

const BlogContent = ({ blog }: BlogCardProps) => {
  const { title, category, description, date, coverImage, content } = blog;

  return (
    <article className="max-w-5xl mx-auto px-4 py-10">
      {/* Cover Image */}
      {coverImage && (
        <div className="mb-8 overflow-hidden rounded-2xl">
          <img
            src={coverImage}
            alt="Cover"
            className="h-[320px] w-full object-cover"
          />
        </div>
      )}

      {/* Header */}
      <header className="mb-8">
        <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="">
            {category.map((cat) => (
            <Badge key={cat} variant="secondary" className="text-[#4e47e5]">
              {cat}
            </Badge>
          ))}
            </span>
          <span className="text-sm text-muted-foreground">
            • 5 mins read
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {title}
        </h1>

        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">
            Published on {new Date(date).toLocaleDateString()}
          </p>

          <Button className="bg-[#4e47e5] text-white hover:bg-[#3f39c9]">
            <Share2 />Share Article
          </Button>
        </div>
      </header>

      <Separator className="my-8" />

      {/* Content Layout */}
      <div className="grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 mb-12">
        {/* Main Content */}
        <div className="prose prose-neutral dark:prose-invert max-w-none">
          <p className="text-lg text-muted-foreground">{description}</p>

          <Separator className="my-6" />

          <div className="leading-relaxed whitespace-pre-line">
            {content}
          </div>
        </div>

        {/* Sidebar Meta */}
        <aside className="sticky top-24 h-fit rounded-xl border p-5 space-y-5 bg-[#f6f6f2]">
          <div>
            <h3 className="text-xs font-semibold text-muted-foreground">
              CATEGORY
            </h3>
            <p className="mt-1 font-medium">{category.join(", ")}</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground">
              READ TIME
            </h3>
            <p className="mt-1 font-medium">5 mins</p>
          </div>

          <div>
            <h3 className="text-xs font-semibold text-muted-foreground">
              DATE
            </h3>
            <p className="mt-1 font-medium">
              {new Date(date).toLocaleDateString()}
            </p>
          </div>
        </aside>
      </div>

<div className="flex items-center justify-between gap-6 rounded-2xl border bg-background p-4 md:p-6">
  {/* Author */}
  <div className="flex items-center gap-4">
    <img
      src="person.jpg"
      alt="Author"
      className="h-12 w-12 rounded-full object-cover"
    />

    <div>
      <h2 className="text-sm font-semibold leading-tight">
        Written by John Doe
      </h2>
      <p className="text-xs text-muted-foreground">
        Senior Financial Analyst
      </p>
    </div>
  </div>

  {/* Actions */}
  <div className="flex items-center gap-3">
    <button className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:bg-muted">
      <ThumbsUp className="h-4 w-4" />
      Like
    </button>

    <button className="flex items-center gap-2 rounded-full border px-4 py-2 text-sm transition hover:bg-muted">
      <MessageSquare className="h-4 w-4" />
      Comment
    </button>
  </div>
</div>

    </article>
  );
};

export default BlogContent;
