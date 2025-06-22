
import { Card } from "@/components/ui/card";

const Sustainability = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-primary/5 via-background to-primary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <div className="inline-flex items-center bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-6">
            🌱 Sustainability Impact
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            <span className="text-primary">Walkable Streets</span><br />
            Sustainable Future
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Every step toward better walkability is a step toward reduced emissions, 
            healthier communities, and more livable, inclusive cities.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30 animate-scale-in">
            <div className="text-4xl mb-4">🌍</div>
            <h3 className="font-bold text-lg mb-3 text-foreground">Reduced Emissions</h3>
            <p className="text-muted-foreground leading-relaxed">
              Better walkability reduces dependency on private vehicles, cutting down CO₂ emissions 
              and improving air quality in urban areas.
            </p>
            <div className="mt-4 text-sm text-primary font-medium">
              -30% vehicle usage in walkable zones
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30 animate-scale-in" style={{animationDelay: '100ms'}}>
            <div className="text-4xl mb-4">🏃‍♀️</div>
            <h3 className="font-bold text-lg mb-3 text-foreground">Healthier Communities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Safe walking infrastructure encourages physical activity, reducing lifestyle diseases 
              and promoting overall community health and wellness.
            </p>
            <div className="mt-4 text-sm text-primary font-medium">
              +45% daily physical activity
            </div>
          </Card>

          <Card className="p-6 hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border/50 hover:border-primary/30 animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="text-4xl mb-4">🤝</div>
            <h3 className="font-bold text-lg mb-3 text-foreground">Inclusive Cities</h3>
            <p className="text-muted-foreground leading-relaxed">
              Accessible footpaths ensure mobility for everyone, including elderly citizens, 
              differently-abled individuals, and families with children.
            </p>
            <div className="mt-4 text-sm text-primary font-medium">
              100% accessibility compliance
            </div>
          </Card>
        </div>

        <div className="bg-card rounded-3xl p-8 md:p-12 max-w-5xl mx-auto border border-border/50 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl md:text-3xl font-bold mb-4 text-foreground">Environmental Impact Goals</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              By 2030, we aim to help Indian cities achieve significant sustainability milestones 
              through improved walkability infrastructure.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">🚗</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">25% Reduction in Short-Distance Vehicle Trips</div>
                  <div className="text-sm text-muted-foreground">Encouraging walking for trips under 2km</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">💨</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">15% Improvement in Air Quality Index</div>
                  <div className="text-sm text-muted-foreground">Through reduced vehicular pollution</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">🌳</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Urban Green Integration</div>
                  <div className="text-sm text-muted-foreground">Promoting walkways with green corridors</div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">⚡</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Smart Energy Integration</div>
                  <div className="text-sm text-muted-foreground">Solar-powered walkway lighting</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">💧</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Water Management</div>
                  <div className="text-sm text-muted-foreground">Permeable surfaces for better drainage</div>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-2xl flex items-center justify-center mr-4">
                  <span className="text-xl">📊</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground">Data-Driven Decisions</div>
                  <div className="text-sm text-muted-foreground">Evidence-based urban planning</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sustainability;
