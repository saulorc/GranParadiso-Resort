import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-4">
        <h1 className="mb-4 text-6xl font-bold text-primary">404</h1>
        <p className="mb-8 text-xl text-muted-foreground">Página não encontrada</p>
        <Button asChild variant="luxury" size="lg">
          <Link to="/" className="inline-flex items-center gap-2">
            <Home size={20} />
            Voltar ao Início
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
