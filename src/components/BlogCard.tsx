import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface BlogCardProps {
  id: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  readTime: string;
  image?: string;
}

const BlogCard = ({ id, title, excerpt, category, date, readTime, image }: BlogCardProps) => {
  return (
    <Link to={`/blog/${id}`}>
      <Card className="shadow-card hover:shadow-soft transition-all duration-300 h-full group overflow-hidden">
        {image && (
          <div className="h-48 overflow-hidden">
            <img 
              src={image} 
              alt={title} 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
          </div>
        )}
        <CardHeader>
          <div className="flex items-center gap-2 mb-2">
            <Badge variant="secondary">{category}</Badge>
          </div>
          <CardTitle className="text-xl mb-2 group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="flex items-center gap-4 text-xs">
            <span className="flex items-center gap-1">
              <Calendar className="h-3 w-3" />
              {date}
            </span>
            <span>{readTime} min de lecture</span>
          </CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{excerpt}</p>
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            Lire l'article
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default BlogCard;
