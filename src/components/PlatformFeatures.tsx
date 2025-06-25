
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Database, Smartphone, Navigation, Shield, Bot } from "lucide-react";

const PlatformFeatures = () => {
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
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
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
  );
};

export default PlatformFeatures;
