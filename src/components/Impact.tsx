
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Testimonials from "@/components/Testimonials";

const Impact = () => {
  return (
    <section id="impact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <Badge className="mb-4 px-4 py-2 text-sm">🏆 Award Winning Solution</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Making <span className="text-primary">Real Impact</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Recognized by industry leaders and built by passionate developers from PES University, 
            Pathfinders is transforming how cities approach walkability.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto mb-16">
          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl mr-4">
                <span className="text-2xl">🏆</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">MoveInSync Mobility Hackathon 2024</h3>
                <p className="text-muted-foreground">First Place Winner</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Selected from over 200 teams nationwide for our innovative approach to solving 
              India's walkability crisis using AI and community collaboration.
            </p>
            <div className="flex items-center text-sm text-primary font-medium">
              <span className="mr-2">🎯</span>
              Out of 200+ participating teams
            </div>
          </Card>

          <Card className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30">
            <div className="flex items-center mb-6">
              <div className="p-3 bg-primary/10 rounded-2xl mr-4">
                <span className="text-2xl">🎓</span>
              </div>
              <div>
                <h3 className="text-xl font-bold text-foreground">Student Innovation</h3>
                <p className="text-muted-foreground">PES University</p>
              </div>
            </div>
            <p className="text-muted-foreground leading-relaxed mb-4">
              Developed by computer science students passionate about using technology 
              for social good and creating sustainable urban solutions.
            </p>
            <div className="flex items-center text-sm text-primary font-medium">
              <span className="mr-2">💡</span>
              Computer Science & Engineering
            </div>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-16">
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in">
            <div className="text-3xl font-bold text-primary mb-2">50K+</div>
            <div className="text-muted-foreground">Images Processed</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: '100ms'}}>
            <div className="text-3xl font-bold text-primary mb-2">12</div>
            <div className="text-muted-foreground">Cities Mapped</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: '200ms'}}>
            <div className="text-3xl font-bold text-primary mb-2">1,200+</div>
            <div className="text-muted-foreground">Community Reports</div>
          </Card>
          <Card className="p-6 text-center hover:shadow-lg transition-all duration-300 animate-scale-in" style={{animationDelay: '300ms'}}>
            <div className="text-3xl font-bold text-primary mb-2">92%</div>
            <div className="text-muted-foreground">Accuracy Rate</div>
          </Card>
        </div>

        <Testimonials />

        <div className="bg-gradient-to-r from-primary to-primary/80 rounded-3xl p-8 md:p-12 text-center text-primary-foreground mt-16">
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Recognition & Future Vision</h3>
          <p className="text-lg mb-8 max-w-3xl mx-auto opacity-90 leading-relaxed">
            Our innovative approach caught the attention of urban planners, mobility experts, and tech leaders. 
            We're now working with city governments to integrate Pathfinders into smart city initiatives.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="bg-primary-foreground/10 rounded-2xl p-6">
              <div className="text-2xl mb-2">🏙️</div>
              <div className="font-semibold mb-2">Smart City Integration</div>
              <div className="text-sm opacity-80">Partnering with municipal corporations</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-6">
              <div className="text-2xl mb-2">📱</div>
              <div className="font-semibold mb-2">Mobile App Launch</div>
              <div className="text-sm opacity-80">Public beta starting Q2 2024</div>
            </div>
            <div className="bg-primary-foreground/10 rounded-2xl p-6">
              <div className="text-2xl mb-2">🌍</div>
              <div className="font-semibold mb-2">National Expansion</div>
              <div className="text-sm opacity-80">Scaling to 50+ cities by 2025</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
