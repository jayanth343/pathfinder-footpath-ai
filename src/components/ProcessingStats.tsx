
const ProcessingStats = () => {
  return (
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
  );
};

export default ProcessingStats;
