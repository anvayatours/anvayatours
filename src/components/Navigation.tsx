import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";
import { useState } from "react";

const Navigation = () => {
  const location = useLocation();
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Packages", path: "/packages" },
    { name: "Feedback", path: "/feedback" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo & Name */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/lovable-uploads/778912f2-061e-4970-b5df-bced34d8aba6.png"
              alt="Anvaya Tours"
              className="h-12 w-12"
            />
            <div className="font-serif italic text-2xl tracking-wide font-semibold text-primary">
              Anvaya Tours
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={cn(
                  "px-3 py-2 text-sm font-medium transition-colors duration-200",
                  location.pathname === item.path
                    ? "text-primary border-b-2 border-primary"
                    : "text-foreground hover:text-primary"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="text-foreground hover:text-primary p-2"
            >
              {menuOpen ? (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="flex flex-col space-y-2 p-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                onClick={() => setMenuOpen(false)}
                className={cn(
                  "px-3 py-2 text-base font-medium transition-colors duration-200 rounded-md",
                  location.pathname === item.path
                    ? "bg-primary/10 text-primary"
                    : "text-foreground hover:text-primary hover:bg-muted"
                )}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
