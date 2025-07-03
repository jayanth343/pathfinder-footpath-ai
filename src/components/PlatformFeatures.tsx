
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin, Database, Smartphone, Navigation, Shield, Bot } from "lucide-react";

const PlatformFeatures = () => {
  const features = [
    {
      icon: MapPin,
      title: "Geospatial Heatmaps + Map Integration",
      description: "Color-coded walkability scoring on interactive maps with dynamic rendering for real-time visualization"
    },
    {
      icon: Database,
      title: "Backend Infrastructure",
      description: "Secure backend system that processes AI analysis and user ratings with robust authentication and data storage"
    },
    {
      icon: Smartphone,
      title: "Mobile App Frontend",
      description: "Upload photos, submit feedback, view heatmaps with simple, user-first interface"
    },
    {
      icon: Navigation,
      title: "Navigation Component",
      description: "Safe route suggestions based on user profile with advanced pathfinding technology + real-time obstacle alerts"
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
