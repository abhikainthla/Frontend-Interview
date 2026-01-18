import {
  Card,
  CardContent,
  CardHeader,
} from "./ui/card";

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
  onClick?: () => void;
  isActive?: boolean;
}

// ✅ Utility function
const truncateWords = (text: string, wordLimit: number) => {
  const words = text.trim().split(/\s+/);
  return words.length > wordLimit
    ? words.slice(0, wordLimit).join(" ") + "..."
    : text;
};

const BlogCard = ({ blog, onClick, isActive }: BlogCardProps) => {
  const { title, category, description, date } = blog;

  return (
    <Card
      onClick={onClick}
      className={`
        cursor-pointer transition-all
        ${
          isActive
            ? "border-l-4 border-l-[#4e47e5] bg-primary/5"
            : "hover:shadow-md"
        }
      `}
    >
      <CardHeader className="pb-2">
        <div className="flex items-center gap-3 text-xs text-muted-foreground justify-between">
          <span className="rounded-full bg-muted px-3 py-1 font-medium text-[#4e47e5]">
            {category?.[0]}
          </span>
          <span>{new Date(date).toLocaleDateString()}</span>
        </div>
      </CardHeader>

      <CardContent>
        <h2 className="mb-2 text-lg font-semibold">
          {title}
        </h2>

        <p className="text-sm text-muted-foreground">
          {truncateWords(description, 8)}
        </p>
      </CardContent>
    </Card>
  );
};

export default BlogCard;
