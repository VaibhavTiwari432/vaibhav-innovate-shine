import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navItems = [
    { href: "/", label: "Home" },
    { href: "#projects", label: "Projects" },
    { href: "#thought-experiments", label: "Thought Experiments" },
    { href: "#collection", label: "My Collection" },
    { href: "#achievements", label: "Achievements" },
    { href: "#experience", label: "Experience" },
    { href: "#cv", label: "CV" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    if (href === "/") {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith("#")) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  const isActive = (href: string) => {
    if (href === "/") return location.pathname === href;
    return false; // For anchor links, we'll handle active state differently
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-purple-400/20">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-2xl font-bold text-white">
              VT
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                item.href === "/" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-md ${
                      isActive(item.href)
                        ? "text-white bg-white/20 backdrop-blur-sm"
                        : "text-purple-200 hover:text-white hover:bg-white/10"
                    }`}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="transition-colors duration-300 text-sm font-medium px-3 py-2 rounded-md text-purple-200 hover:text-white hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-black/40 backdrop-blur-md border-t border-purple-400/20">
              {navItems.map((item) => (
                item.href === "/" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className={`block px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md ${
                      isActive(item.href)
                        ? "text-white bg-white/20"
                        : "text-purple-200 hover:text-white hover:bg-white/10"
                    }`}
                    onClick={() => setIsOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <button
                    key={item.href}
                    onClick={() => handleNavClick(item.href)}
                    className="block w-full text-left px-3 py-2 text-base font-medium transition-colors duration-300 rounded-md text-purple-200 hover:text-white hover:bg-white/10"
                  >
                    {item.label}
                  </button>
                )
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;