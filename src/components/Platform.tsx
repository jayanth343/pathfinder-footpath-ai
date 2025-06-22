
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Database, Smartphone, Navigation, Shield, Bot } from "lucide-react";

const Platform = () => {
  const features = [
    {
      icon: MapPin,
      title: "Geospatial Heatmaps + OSM Integration",
      description: "Color-coded walkability scoring on map with dynamic rendering using OpenStreetMaps API"
    },
    {
      icon: Database,
      title: "Backend Infrastructure",
      description: "Flask API processes AI + user ratings with Supabase for auth and data storage"
    },
    {
      icon: Smartphone,
      title: "Mobile App Frontend",
      description: "Upload photos, submit feedback, view heatmaps with simple, user-first interface"
    },
    {
      icon: Navigation,
      title: "Navigation Component",
      description: "Safe route suggestions based on profile with A* pathfinding algorithm + real-time obstacle alerts"
    },
    {
      icon: Shield,
      title: "Authority Tagging Interface",
      description: "Maps AI-flagged hazards for municipal tracking with severity-based prioritization"
    },
    {
      icon: Bot,
      title: "PathPal – AI Chatbot",
      description: "Chat-based walkability assistant recommending safe, clean routes for walking, commuting, or running"
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Our Platform
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technology meets community-driven data to create the most comprehensive walkability platform for Indian cities
          </p>
        </div>

        {/* AI Analysis Demo */}
        <div className="mb-20">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-center mb-8">How Our AI Sees the Footpath</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <img 
                  src="/lovable-uploads/d4f070f8-759d-4731-bc58-62c904806e02.png" 
                  alt="AI Footpath Analysis Demo" 
                  className="w-full rounded-2xl shadow-lg"
                />
                <p className="text-muted-foreground text-center">
                  <strong>Grey Area:</strong> Area segmented by our AI instance segmentation model
                </p>
              </div>
              
              <div className="space-y-6">
                <h4 className="text-xl font-semibold mb-4">Scoring System</h4>
                <p className="text-muted-foreground mb-6">
                  We provide a score on the footpath based on these three factors:
                </p>
                
                <div className="space-y-4">
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Walkable Area Percentage (WAP)</h5>
                    <p className="text-sm text-muted-foreground">
                      Indicates how much of the image is covered by footpath. Compares with the bounding box.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Connectivity Score (CS)</h5>
                    <p className="text-sm text-muted-foreground">
                      Reflects how continuous or connected the footpath regions are.
                    </p>
                  </div>
                  
                  <div className="bg-primary/10 rounded-lg p-4">
                    <h5 className="font-semibold text-primary mb-2">Object Spread (OS)</h5>
                    <p className="text-sm text-muted-foreground">
                      Penalizes scattered or fragmented footpath segments.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 100}ms`}}>
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-2xl w-fit">
                  <feature.icon className="h-8 w-8 text-primary" />
                </div>
                <CardTitle className="text-lg">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-lg text-primary font-semibold">
            📱 Mobile App Coming Soon
          </p>
        </div>
      </div>
    </section>
  );
};

export default Platform;
