
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Upload, MapPin } from "lucide-react";
import { useState } from "react";

const CTA = () => {
  const [email, setEmail] = useState("");

  return (
    <section className="py-20 bg-gradient-to-br from-primary via-primary/90 to-primary/80 text-primary-foreground">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Join the Movement for<br />
            <span className="text-primary-foreground/90">Safer Streets</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto leading-relaxed">
            Upload a photo, report a hazard, or plan a walkable route. 
            Every action you take helps build a more accessible city for everyone.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-scale-in">
            <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-2xl mb-4">
              <Upload className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Report a Footpath</h3>
            <p className="opacity-90 mb-4 leading-relaxed">
              Upload photos of footpath conditions in your area. Our AI will analyze and score them instantly.
            </p>
            <Button variant="secondary" className="w-full rounded-full">
              Upload Now
            </Button>
          </Card>

          <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-scale-in" style={{animationDelay: '100ms'}}>
            <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-2xl mb-4">
              <MapPin className="h-6 w-6" />
            </div>
            <h3 className="font-bold text-lg mb-3">Plan Your Route</h3>
            <p className="opacity-90 mb-4 leading-relaxed">
              Get personalized walking routes based on your mobility needs and safety preferences.
            </p>
            <Button variant="secondary" className="w-full rounded-full">
              Start Planning
            </Button>
          </Card>

          <Card className="p-6 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 hover:bg-primary-foreground/15 transition-all duration-300 animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="flex items-center justify-center w-12 h-12 bg-primary-foreground/20 rounded-2xl mb-4">
              <span className="text-2xl">👥</span>
            </div>
            <h3 className="font-bold text-lg mb-3">Join Community</h3>
            <p className="opacity-90 mb-4 leading-relaxed">
              Connect with other urban mobility advocates and stay updated on city improvements.
            </p>
            <Button variant="secondary" className="w-full rounded-full">
              Get Involved
            </Button>
          </Card>
        </div>

        <div className="bg-primary-foreground/10 backdrop-blur-sm rounded-3xl p-8 max-w-4xl mx-auto border border-primary-foreground/20">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold mb-4">Stay Updated on Urban Progress</h3>
            <p className="opacity-90 max-w-2xl mx-auto">
              Get weekly reports on walkability improvements in your city and be the first to know 
              about new features and community initiatives.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 bg-primary-foreground/20 border-primary-foreground/30 text-primary-foreground placeholder:text-primary-foreground/60 rounded-full px-6 py-3"
            />
            <Button 
              variant="secondary" 
              className="rounded-full px-8 py-3 whitespace-nowrap"
            >
              Subscribe
            </Button>
          </div>
          
          <p className="text-center text-sm opacity-70 mt-4">
            Join 5,000+ urban mobility advocates. Unsubscribe anytime.
          </p>
        </div>


      </div>
    </section>
  );
};

export default CTA;
