
const AIAnalysisDemo = () => {
  return (
    <div className="mb-20">
      <div className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50">
        <h3 className="text-2xl font-bold text-center mb-8">How Our AI Sees the Footpath</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <div className="aspect-square w-full max-w-md mx-auto">
              <img 
                src="/lovable-uploads/fa92a548-9b8b-40f2-ba61-4e38eb995650.png" 
                alt="AI Footpath Analysis Demo" 
                className="w-full h-full object-contain rounded-2xl shadow-lg"
              />
            </div>
            <p className="text-muted-foreground text-center">
              <strong>Grey Area:</strong> Area segmented by our AI instance segmentation model
            </p>
          </div>
          
          <div className="space-y-6">
            <h4 className="text-xl font-semibold mb-4">Scoring System</h4>
            <p className="text-muted-foreground mb-6">
              We provide a score on the footpath based on these three factors:
            </p>
            
            <div className="space-y-4">
              <div className="bg-primary/10 rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Walkable Area Percentage (WAP)</h5>
                <p className="text-sm text-muted-foreground">
                  Indicates how much of the image is covered by footpath. Compares with the bounding box.
                </p>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Connectivity Score (CS)</h5>
                <p className="text-sm text-muted-foreground">
                  Reflects how continuous or connected the footpath regions are.
                </p>
              </div>
              
              <div className="bg-primary/10 rounded-lg p-4">
                <h5 className="font-semibold text-primary mb-2">Object Spread (OS)</h5>
                <p className="text-sm text-muted-foreground">
                  Penalizes scattered or fragmented footpath segments.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAnalysisDemo;
