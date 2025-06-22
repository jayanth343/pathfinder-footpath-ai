
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const DataSection = () => {
  return (
    <section id="data" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Data for Good</span> Initiative
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Transforming walkability data into actionable insights for urban planners, 
            policymakers, and communities to build better cities.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl mr-4">
                <span className="text-2xl">📊</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Real-Time Dashboards</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Interactive dashboards providing urban planners with live data on footpath conditions, 
              pedestrian traffic patterns, and accessibility metrics across city zones.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Heat maps of walkability scores
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Priority repair recommendations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Accessibility compliance tracking
              </li>
            </ul>
            <Button variant="outline" className="rounded-full">
              View Demo Dashboard
            </Button>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl mr-4">
                <span className="text-2xl">🔄</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">Community Feedback Loop</h3>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              Direct channel between citizens and municipal authorities, enabling faster response 
              to footpath issues and transparent tracking of repair progress.
            </p>
            <ul className="space-y-3 text-muted-foreground mb-6">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Issue reporting with photo evidence
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Real-time status updates
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-primary rounded-full mr-3"></span>
                Gamified community participation
              </li>
            </ul>
            <Button variant="outline" className="rounded-full">
              Join Community
            </Button>
          </Card>
        </div>

        <div className="mb-16">
          <Card className="p-8 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 border-primary/20">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-4 text-foreground">Smart City Integration Ready</h3>
              <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Pathfinders is designed to seamlessly integrate with existing smart city infrastructure, 
                providing APIs and data feeds for comprehensive urban mobility planning.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="p-4 bg-background rounded-2xl mb-4 inline-block">
                  <span className="text-2xl">🏗️</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Urban Planning</h4>
                <p className="text-sm text-muted-foreground">Data-driven footpath development and maintenance planning</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-background rounded-2xl mb-4 inline-block">
                  <span className="text-2xl">🚦</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Traffic Management</h4>
                <p className="text-sm text-muted-foreground">Pedestrian flow analysis for signal optimization</p>
              </div>
              <div className="text-center">
                <div className="p-4 bg-background rounded-2xl mb-4 inline-block">
                  <span className="text-2xl">♿</span>
                </div>
                <h4 className="font-semibold mb-2 text-foreground">Accessibility Audits</h4>
                <p className="text-sm text-muted-foreground">Compliance tracking for inclusive infrastructure</p>
              </div>
            </div>
          </Card>
        </div>

        <div className="text-center">
          <div className="inline-flex items-center bg-muted rounded-full p-2 mb-8">
            <div className="grid grid-cols-4 gap-1">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="w-3 h-3 bg-primary rounded-full animate-pulse" style={{animationDelay: `${i * 0.2}s`}}></div>
              ))}
            </div>
            <span className="ml-3 mr-2 text-sm font-medium">Processing live data...</span>
          </div>
          <h3 className="text-xl font-semibold mb-4 text-foreground">Ready to Transform Your City's Walkability?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Partner with us to implement data-driven walkability solutions in your municipality.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="rounded-full px-8">
              Request Partnership
            </Button>
            <Button variant="outline" className="rounded-full px-8">
              Download Data Brief
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DataSection;
