
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const Team = () => {
  const teamMembers = [
    {
      name: "Shravan Jain",
      avatar: "SJ",
      image: "/lovable-uploads/02d7b8fa-0d2c-45bc-b080-14337d069a8e.png"
    },
    {
      name: "Indraneel KVS",
      avatar: "IK",
      image: "/lovable-uploads/8e1f37a8-2468-4142-b42c-449a8d06a5b2.png"
    },
    {
      name: "Fardeen Shaikh",
      avatar: "FS",
      image: "/lovable-uploads/6b19c468-9179-42bf-8183-4d0f28403035.png"
    },
    {
      name: "Ishaan Swain",
      avatar: "IS",
      image: "/lovable-uploads/37401609-5db3-44b8-b32f-94acacd44d93.png"
    },
    {
      name: "Siddharth K",
      avatar: "SK",
      image: "/lovable-uploads/28d0a5af-0cc5-440d-888b-43097675e11c.png"
    },
    {
      name: "Jayanth Srinivasan",
      avatar: "JS",
      image: "/lovable-uploads/701036cd-7521-40be-a55d-75e5f538a911.png"
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
            We are a team of engineers and innovators from PES University, passionate about making Indian cities safer for every pedestrian. Together, we combine AI, civic-tech, and community insight to solve India's most overlooked mobility problem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center hover:shadow-lg transition-all duration-300 animate-fade-in border-border/50 bg-card/50 backdrop-blur-sm" style={{animationDelay: `${index * 100}ms`}}>
              <CardContent className="p-6">
                <div className="mb-4">
                  <Avatar className="w-24 h-24 mx-auto mb-4 border-4 border-primary/20">
                    <AvatarImage 
                      src={member.image} 
                      alt={member.name}
                      className="object-cover object-center w-full h-full"
                    />
                    <AvatarFallback className="text-xl font-semibold bg-primary/10 text-primary">
                      {member.avatar}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold">{member.name}</h3>
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
