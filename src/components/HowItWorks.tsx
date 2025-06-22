
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HowItWorks = () => {
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
    <section id="how-it-works" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            How <span className="text-primary">Pathfinders</span> Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Combining cutting-edge AI with community power to create the most comprehensive 
            walkability mapping system for Indian cities.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
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
                    <h3 className="text-2xl font-bold mb-4 text-foreground">{step.title}</h3>
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
      </div>
    </section>
  );
};

export default HowItWorks;
