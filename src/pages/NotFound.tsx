import { Button } from "@/components/ui/button";
import { Home, ArrowLeft } from "lucide-react";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="min-h-screen w-full flex items-center justify-center px-6">
      <div className="text-center max-w-2xl">
        <div className="glass-strong rounded-3xl p-12 shadow-glass">
          <h1 className="font-display font-bold text-8xl md:text-9xl gradient-text mb-4">404</h1>
          <h2 className="font-display font-semibold text-2xl md:text-3xl mb-4">Page Not Found</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Oops! The page you're looking for doesn't exist. It might have been moved or deleted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => navigate(-1)}
              variant="outline"
              className="glass-strong hover:glass"
              aria-label="Go back to previous page"
            >
              <ArrowLeft className="mr-2 w-5 h-5" aria-hidden="true" />
              Go Back
            </Button>
            <Button 
              size="lg"
              onClick={() => navigate("/")}
              className="gradient-primary shadow-glow hover:shadow-glow hover:scale-105 transition-all duration-300"
              aria-label="Return to home page"
            >
              <Home className="mr-2 w-5 h-5" aria-hidden="true" />
              Back to Home
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
