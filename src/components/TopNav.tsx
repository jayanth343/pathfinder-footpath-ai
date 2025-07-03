import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Menu, X, ChevronRight, Home, Map } from "lucide-react";
import { useIsMobile } from "@/hooks/use-mobile";

const TopNav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const isMobile = useIsMobile();
  const location = useLocation();
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [scrolled]);

  // Close mobile menu when clicking a link
  const handleLinkClick = () => {
    if (isMobile && isMenuOpen) {
      setIsMenuOpen(false);
    }
  };
  
  // Navigation Items
  const navItems = [
    { name: "How It Works", path: "/#how-it-works", anchor: true },
    { name: "Impact", path: "/#impact", anchor: true },
    { name: "Data", path: "/#data", anchor: true }
  ];
  
  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 ${scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/50 backdrop-blur-sm"} transition-all duration-300`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20 
      }}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/">
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div 
                className="w-10 h-10 bg-white rounded-2xl p-1.5 shadow-lg"
                whileHover={{ rotate: 5 }}
              >
                <img 
                  src="/lovable-uploads/303de826-e2be-4d59-82de-13fb6a18e67c.png" 
                  alt="Pathfinders Logo" 
                  className="w-full h-full object-contain"
                />
              </motion.div>
              <motion.span 
                className="text-2xl font-bold text-foreground"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 }}
              >
                Pathfinders
              </motion.span>
            </motion.div>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item, index) => {
              const isActive = item.anchor 
                ? location.pathname === "/" && location.hash === item.path.substring(1)
                : location.pathname === item.path;
                
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                >
                  {item.anchor ? (
                    <a 
                      href={item.path} 
                      className={`text-sm font-medium flex items-center space-x-1 border-b-2 ${isActive ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"} transition-colors py-1`}
                      onClick={handleLinkClick}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                      <span>{item.name}</span>
                    </a>
                  ) : (
                    <Link 
                      to={item.path} 
                      className={`text-sm font-medium flex items-center space-x-1 border-b-2 ${isActive ? "border-primary text-foreground" : "border-transparent text-muted-foreground hover:text-foreground"} transition-colors py-1`}
                      onClick={handleLinkClick}
                    >
                      {item.icon && <item.icon className="h-4 w-4 mr-1" />}
                      <span>{item.name}</span>
                    </Link>
                  )}
                </motion.div>
              );
            })}
            <ThemeToggle />
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button className="rounded-full px-6 shadow-md">
                Get Started
              </Button>
            </motion.div>
          </nav>

          {/* Mobile Controls */}
          <div className="md:hidden flex items-center space-x-3">
            <ThemeToggle />
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              className="md:hidden mt-4 pb-4 border-t border-border"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
            >
              <motion.nav 
                className="flex flex-col space-y-4 pt-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
              >
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                  >
                    {item.anchor ? (
                      <a 
                        href={item.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between"
                        onClick={handleLinkClick}
                      >
                        <span className="flex items-center">
                          {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                          {item.name}
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </a>
                    ) : (
                      <Link 
                        to={item.path} 
                        className="text-muted-foreground hover:text-foreground transition-colors flex items-center justify-between"
                        onClick={handleLinkClick}
                      >
                        <span className="flex items-center">
                          {item.icon && <item.icon className="h-4 w-4 mr-2" />}
                          {item.name}
                        </span>
                        <ChevronRight className="h-4 w-4" />
                      </Link>
                    )}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                >
                  <Button className="rounded-full w-full shadow-md">
                    Get Started
                  </Button>
                </motion.div>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.header>
  );
};

export default TopNav;