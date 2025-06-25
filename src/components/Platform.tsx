
import PlatformFeatures from "@/components/PlatformFeatures";
import PlatformProcess from "@/components/PlatformProcess";
import AIAnalysisDemo from "@/components/AIAnalysisDemo";
import ProcessingStats from "@/components/ProcessingStats";

const Platform = () => {
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

        <PlatformFeatures />
        <PlatformProcess />
        <AIAnalysisDemo />
        <ProcessingStats />

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
