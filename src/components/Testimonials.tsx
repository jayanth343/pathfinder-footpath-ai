
import { Card } from "@/components/ui/card";
import { Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      quote: "The integration of AI-driven walkability ratings, user inputs, and real-time heat maps on Google Maps is a fantastic approach to addressing the challenges faced by commuters. Ensuring well-connected, safe, and accessible footpaths, skywalks, intersections between metro stations, bus stops, railway stations, and auto stands is crucial for a more pedestrian-friendly city. We need an integrated localised app like this to help the pedestrians to support Namma Bengalureans find their way to the best options in using footpaths and guide them to their choice of public transport. This would in fact help in many manifold ways like reduction in vehicular traffic and support the use of public transport which in a way indirectly would help reduce carbon emissions. Also this would finally help in reducing pollution and better the AQI of the city for the health and fitness of all its citizens. I wish them all the best and look forward to a seamless app which would be a pathfinder for better walkability for the citizens of Bengaluru.",
      author: "Vinod Jacob",
      position: "General Manager of Namma Bengaluru Foundation"
    },
    {
      quote: "Created by Team Pathfinder, a standout at the MoveInSync Mobility Symposium Hackathon, this app lets users rate Bengaluru's footpaths just by uploading photos. Let's join hands to create safer, more walkable streets in every Indian city!",
      author: "Deepesh Agarwal",
      position: "Co-Founder, CEO at MoveInSync"
    }
  ];

  return (
    <section className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold mb-4 text-foreground">What Leaders Are Saying</h3>
          <p className="text-lg text-muted-foreground">
            Industry experts and city leaders recognize the potential of Pathfinders
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="p-8 hover:shadow-xl transition-all duration-300 border-border/50 hover:border-primary/30 relative">
              <Quote className="absolute top-6 left-6 h-8 w-8 text-primary/20" />
              <div className="pt-8">
                <blockquote className="text-muted-foreground leading-relaxed mb-6 text-lg">
                  "{testimonial.quote}"
                </blockquote>
                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground text-lg">{testimonial.author}</div>
                  <div className="text-primary font-medium">{testimonial.position}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
