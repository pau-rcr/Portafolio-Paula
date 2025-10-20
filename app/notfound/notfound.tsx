import { useLocation } from "react-router";
import { useEffect } from "react";

const NotFoundScreen = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-background to-muted">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl text-muted-foreground">Ups! Página no encontrada</p>
        <a href="/" className="text-primary underline hover:text-primary/80">
          Volver al Inicio
        </a>
      </div>
    </div>
  );
};

export default NotFoundScreen;
