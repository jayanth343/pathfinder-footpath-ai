
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Arjun Sharma",
      role: "Lead AI Engineer",
      bio: "Specializes in computer vision and machine learning. Passionate about solving urban mobility challenges through AI.",
      avatar: "AS",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Priya Patel",
      role: "Full-Stack Developer",
      bio: "Expert in React and Flask development. Focuses on creating intuitive user experiences for complex data.",
      avatar: "PP",
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b47c?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Rohit Kumar",
      role: "Backend Engineer",
      bio: "Database architect and API specialist. Ensures scalable infrastructure for real-time data processing.",
      avatar: "RK",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Sneha Reddy",
      role: "UX/UI Designer",
      bio: "Creates user-centered designs that make complex geospatial data accessible to everyone.",
      avatar: "SR",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Karthik Menon",
      role: "Data Scientist",
      bio: "Specializes in geospatial analysis and pathfinding algorithms. Transforms raw data into actionable insights.",
      avatar: "KM",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
    },
    {
      name: "Ananya Singh",
      role: "Product Manager",
      bio: "Bridges technology and user needs. Ensures our solutions address real-world pedestrian challenges.",
      avatar: "AS",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300&h=300&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-foreground to-primary bg-clip-text text-transparent">
            Meet the Pathfinders
          </h2>
          <p className="text-xl text-muted-foreground max-w-4xl mx-auto leading-relaxed">
            We are a 6-member team of engineers and innovators from PES University, passionate about making Indian cities safer for every pedestrian. Together, we combine AI, civic-tech, and community insight to solve India's most overlooked mobility problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage src={member.image} alt={member.name} />
                    <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                  <p className="text-primary font-medium mb-3">{member.role}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {member.bio}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
