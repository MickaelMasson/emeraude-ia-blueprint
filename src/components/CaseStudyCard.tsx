import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  sector: string;
  description: string;
  results: string[];
  image?: string;
}

const CaseStudyCard = ({ id, title, client, sector, description, results, image }: CaseStudyCardProps) => {
  return (
    <Link to={`/etudes-de-cas/${id}`}>
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
            <Badge variant="secondary">{sector}</Badge>
          </div>
          <CardTitle className="text-xl mb-1 group-hover:text-primary transition-colors">{title}</CardTitle>
          <CardDescription className="text-sm font-medium">{client}</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>
          <div className="space-y-1 mb-4">
            {results.slice(0, 2).map((result, index) => (
              <div key={index} className="flex items-start gap-2 text-sm">
                <span className="text-primary font-bold">→</span>
                <span className="text-foreground font-medium">{result}</span>
              </div>
            ))}
          </div>
          <div className="flex items-center gap-2 text-primary font-medium group-hover:gap-3 transition-all">
            Voir l'étude complète
            <ArrowRight className="h-4 w-4" />
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default CaseStudyCard;
