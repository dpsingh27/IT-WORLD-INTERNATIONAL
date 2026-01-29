import { Link } from "react-router-dom";
import { Home, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

const NotFound = () => {
  return (
    <div className="min-h-[70vh] flex items-center justify-center">
      <div className="text-center max-w-lg mx-auto px-4">
        <div className="font-display text-9xl font-bold text-primary/20 mb-4">404</div>
        <h1 className="font-display text-3xl md:text-4xl font-bold mb-4">
          Page Not Found
        </h1>
        <p className="text-muted-foreground text-lg mb-8">
          Oops! The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button asChild className="gradient-primary">
            <Link to="/">
              <Home className="w-4 h-4 mr-2" /> Go Home
            </Link>
          </Button>
          <Button asChild variant="outline">
            <Link to="/contact">
              <ArrowLeft className="w-4 h-4 mr-2" /> Contact Support
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
