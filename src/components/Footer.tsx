
import { MapPin, Upload, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-primary rounded-2xl">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <span className="text-2xl font-bold text-foreground">Pathfinders</span>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              Redefining walkability through AI-powered mapping and community collaboration 
              for safer, smarter streets in Indian cities.
            </p>
            <div className="flex space-x-4">
              <Button size="sm" className="rounded-full">
                <Upload className="mr-2 h-4 w-4" />
                Report
              </Button>
              <Button variant="outline" size="sm" className="rounded-full">
                Explore
              </Button>
            </div>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Platform</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#how-it-works" className="hover:text-foreground transition-colors">How It Works</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Upload Photo</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Plan Route</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">View Map</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">API Access</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">Community</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Join Movement</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Report Issues</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Success Stories</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">City Partners</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Developer Hub</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-semibold text-foreground mb-4">About</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li><a href="#impact" className="hover:text-foreground transition-colors">Our Impact</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">The Team</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Press Kit</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 text-sm text-muted-foreground">
              <span>© 2024 Pathfinders. All rights reserved.</span>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a>
                <a href="#" className="hover:text-foreground transition-colors">Terms of Service</a>
                <a href="#" className="hover:text-foreground transition-colors">Data Usage</a>
              </div>
            </div>
            
            <div className="flex items-center space-x-4">
              <div className="text-sm text-muted-foreground">
                🏆 MoveInSync Hackathon 2024 Winner
              </div>
              <Button 
                variant="outline" 
                size="sm" 
                onClick={scrollToTop}
                className="rounded-full"
              >
                <ArrowUp className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
