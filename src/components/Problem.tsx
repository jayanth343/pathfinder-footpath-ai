
import { Card } from "@/components/ui/card";

const Problem = () => {
  const problems = [
    {
      icon: "🚧",
      title: "Broken Pavements",
      description: "Cracked and uneven surfaces making walking hazardous"
    },
    {
      icon: "🏪",
      title: "Encroachments",
      description: "Illegal constructions blocking pedestrian pathways"
    },
    {
      icon: "💧",
      title: "Waterlogging",
      description: "Poor drainage causing flooding during monsoons"
    },
    {
      icon: "♿",
      title: "Accessibility Issues",
      description: "Lack of ramps and safe passages for differently abled"
    },
    {
      icon: "⚡",
      title: "Safety Hazards",
      description: "Open drains, loose cables, and electrical boxes"
    },
    {
      icon: "👴",
      title: "Elderly Unsafe",
      description: "High-risk areas with poor lighting and uneven surfaces"
    }
  ];

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            The <span className="text-primary">Walking Crisis</span> in Urban India
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every day, millions of Indians navigate dangerous, poorly maintained footpaths. 
            It's time for data-driven solutions to create safer, more accessible streets.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <Card 
              key={index} 
              className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-scale-in border-border/50 hover:border-primary/30"
              style={{animationDelay: `${index * 100}ms`}}
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="font-semibold text-lg mb-3 text-foreground">{problem.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{problem.description}</p>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-card rounded-2xl p-8 max-w-4xl mx-auto border border-border/50 shadow-lg">
            <div className="text-6xl mb-4">📊</div>
            <h3 className="text-2xl font-bold mb-4 text-foreground">The Impact</h3>
            <p className="text-lg text-muted-foreground mb-6">
              Poor walkability forces millions to use private vehicles, increasing pollution, 
              traffic congestion, and reducing quality of life in Indian cities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">68%</div>
                <div className="text-sm text-muted-foreground">Of urban Indians avoid walking</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">3.2M</div>
                <div className="text-sm text-muted-foreground">Pedestrian accidents yearly</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-destructive mb-2">40%</div>
                <div className="text-sm text-muted-foreground">Increase in air pollution</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Problem;
