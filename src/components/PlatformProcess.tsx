
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const PlatformProcess = () => {
  const steps = [
    {
      step: "01",
      icon: "📸",
      title: "AI Image Analysis",
      description: "Advanced computer vision segments footpath images to detect walkable areas, obstacles, and potential hazards in real-time.",
      tech: ["Computer Vision", "Image Analysis", "Deep Learning"]
    },
    {
      step: "02",
      icon: "👥",
      title: "Community Reports",
      description: "Citizens upload photos and report issues directly through our mobile app, creating a comprehensive ground-truth dataset.",
      tech: ["Mobile App", "Cloud Storage", "GPS Integration"]
    },
    {
      step: "03",
      icon: "⚡",
      title: "Smart Scoring",
      description: "Our algorithm evaluates footpath quality with penalties for hazards like electric boxes, open drains, and accessibility barriers.",
      tech: ["Machine Learning", "Quality Assessment", "Real-time Analytics"]
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
  );
};

export default PlatformProcess;
