import { Link, useLocation } from 'react-router-dom';
import { Home, User } from 'lucide-react';
interface MainLayoutProps {
  children: React.ReactNode;
}
const MainLayout = ({
  children
}: MainLayoutProps) => {
  const location = useLocation();
  const isActive = (path: string) => location.pathname === path;
  return <div className="min-h-screen bg-gradient-to-br from-background to-muted">
      <nav className="bg-card shadow-lg sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-2xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Mi Portafolio
            </div>
            <div className="flex gap-6">
              <Link to="/" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/') ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' : 'hover:bg-muted'}`}>
                <User className="w-5 h-5" />
                <span className="font-medium">Presentación</span>
              </Link>
              <Link to="/contacto" className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-300 ${isActive('/contacto') ? 'bg-gradient-to-r from-primary to-accent text-primary-foreground' : 'hover:bg-muted'}`}>
                <Home className="w-5 h-5" />
                <span className="font-medium">Contacto</span>
              </Link>
            </div>
          </div>
        </div>
      </nav>
      
      <main className="container mx-auto px-4 py-12">
        {children}
      </main>

      <footer className="bg-card mt-20 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">© 2025 Mi Portafolio. Desarrollado con React Router.</p>
        </div>
      </footer>
    </div>;
};
export default MainLayout;