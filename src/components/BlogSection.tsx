
import { Link } from "react-router-dom";
import { CalendarDays, User, ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  author: string;
}

interface BlogSectionProps {
  posts: BlogPost[];
}

const BlogSection = ({ posts }: BlogSectionProps) => {
  return (
    <section className="py-10 bg-background">
      <div className="container mx-auto px-3 md:px-4">
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">From Our Blog</h2>
            <p className="text-muted-foreground text-sm">
              Insights, reading recommendations, and literary discussions
            </p>
          </div>
          
          <Link 
            to="/blog"
            className="hidden md:flex items-center text-islamic-green hover:underline gap-1 mt-4 md:mt-0"
          >
            <span>View All Posts</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {posts.map((post) => (
            <Link
              key={post.id}
              to={`/blog/${post.id}`}
              className="group bg-card border border-border/40 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              <div className="p-4">
                <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <CalendarDays size={14} />
                    <span>{post.date}</span>
                  </div>
                  
                  <div className="flex items-center gap-1">
                    <User size={14} />
                    <span>{post.author}</span>
                  </div>
                </div>
                
                <h3 className="font-medium text-lg mb-2 group-hover:text-islamic-green transition-colors">
                  {post.title}
                </h3>
                
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center text-islamic-green text-sm font-medium">
                  <span>Read More</span>
                  <ArrowRight size={14} className="ml-1 transition-transform group-hover:translate-x-1" />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        <div className="flex justify-center mt-8 md:hidden">
          <Button
            variant="outline"
            className="border-islamic-green text-islamic-green hover:bg-islamic-green/10"
            asChild
          >
            <Link to="/blog">
              View All Posts
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;
