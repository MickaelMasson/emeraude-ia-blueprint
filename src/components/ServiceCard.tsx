import { ReactNode } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  benefits: string[];
  href?: string;
  image?: string;
}

const ServiceCard = ({ icon, title, description, benefits, href, image }: ServiceCardProps) => {
  const content = (
    <Card className="shadow-card hover:shadow-soft transition-all duration-300 h-full group cursor-pointer overflow-hidden">
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
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <div className="text-primary">{icon}</div>
        </div>
        <CardTitle className="text-2xl mb-2">{title}</CardTitle>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardHeader>
      <CardContent>
        <ul className="space-y-2">
          {benefits.map((benefit, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="text-primary mt-0.5">✓</span>
              <span>{benefit}</span>
            </li>
          ))}
        </ul>
        {href && (
          <div className="flex items-center gap-2 text-primary font-medium mt-6 group-hover:gap-3 transition-all">
            En savoir plus
            <ArrowRight className="h-4 w-4" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  return href ? <Link to={href}>{content}</Link> : content;
};

export default ServiceCard;
