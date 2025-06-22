
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
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

  const steps = [
    {
      step: "01",
      icon: "📸",
      title: "AI Image Analysis",
      description: "Advanced computer vision segments footpath images to detect walkable areas, obstacles, and potential hazards in real-time.",
      tech: ["TensorFlow", "OpenCV", "Deep Learning"]
    },
    {
      step: "02",
      icon: "👥",
      title: "Community Reports",
      description: "Citizens upload photos and report issues directly through our mobile app, creating a comprehensive ground-truth dataset.",
      tech: ["React Native", "Cloud Storage", "GPS Integration"]
    },
    {
      step: "03",
      icon: "⚡",
      title: "Smart Scoring",
      description: "Our algorithm evaluates footpath quality with penalties for hazards like electric boxes, open drains, and accessibility barriers.",
      tech: ["Machine Learning", "Scoring Algorithm", "Real-time Analytics"]
    },
    {
      step: "04",
      icon: "🗺️",
      title: "Personalized Navigation",
      description: "Generate safe, accessible routes tailored for elderly users, wheelchair users, and other vulnerable populations.",
      tech: ["Route Optimization", "Accessibility APIs", "User Profiles"]
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            How Pathfinders Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Cutting-edge AI technology meets community power to create the most comprehensive walkability platform for Indian cities
          </p>
        </div>

        {/* Features Grid */}
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

        {/* How It Works Steps */}
        <div className="max-w-6xl mx-auto mb-20">
          <h3 className="text-3xl font-bold text-center mb-12">Our Process</h3>
          {steps.map((step, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <Card className="p-8 hover:shadow-xl transition-all duration-500 border-border/50 hover:border-primary/30 animate-scale-in" style={{animationDelay: `${index * 200}ms`}}>
                <div className="flex flex-col lg:flex-row items-start gap-8">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-4">
                      <span className="text-2xl">{step.icon}</span>
                    </div>
                    <div className="text-sm font-bold text-primary/60">{step.step}</div>
                  </div>
                  
                  <div className="flex-grow">
                    <h4 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h4>
                    <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.tech.map((tech, techIndex) => (
                        <Badge key={techIndex} variant="secondary" className="text-xs px-3 py-1">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Card>
              
              {index < steps.length - 1 && (
                <div className="flex justify-center my-8">
                  <div className="w-px h-12 bg-gradient-to-b from-primary/60 to-transparent"></div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* AI Analysis Demo */}
        <div className="mb-20">
          <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
            <h3 className="text-2xl font-bold text-center mb-8">How Our AI Sees the Footpath</h3>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <div className="aspect-square w-full max-w-md mx-auto">
                  <img 
                    src="/lovable-uploads/fa92a548-9b8b-40f2-ba61-4e38eb995650.png" 
                    alt="AI Footpath Analysis Demo" 
                    className="w-full h-full object-contain rounded-2xl shadow-lg"
                  />
                </div>
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

        <div className="mt-20 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-3xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">Real-Time Processing</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our AI processes images in under 3 seconds, providing instant feedback on footpath conditions 
            and updating the global walkability database in real-time.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="bg-background/50 rounded-2xl p-4">
              <div className="text-2xl font-bold text-primary mb-1">&lt;3s</div>
              <div className="text-sm text-muted-foreground">Image Processing</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-4">
              <div className="text-2xl font-bold text-primary mb-1">92%</div>
              <div className="text-sm text-muted-foreground">Accuracy Rate</div>
            </div>
            <div className="bg-background/50 rounded-2xl p-4">
              <div className="text-2xl font-bold text-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Live Updates</div>
            </div>
          </div>
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
