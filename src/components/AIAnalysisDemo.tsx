import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const AIAnalysisDemo = () => {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, amount: 0.3 });
  
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };
  
  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        delay: 0.2
      }
    }
  };
  
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 70,
        damping: 10,
        delay: 0.1
      }
    }
  };

  return (
    <div className="mb-20">
      <motion.div 
        ref={containerRef}
        className="bg-card/50 backdrop-blur-sm rounded-3xl p-8 border border-border/50 shadow-lg"
        variants={containerVariants}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
      >
        <motion.h3 
          className="text-2xl font-bold text-center mb-8"
          variants={itemVariants}
        >
          How Our AI Sees the Footpath
        </motion.h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.div 
              className="aspect-square w-full max-w-md mx-auto relative"
              variants={imageVariants}
            >
              <img 
                src="/lovable-uploads/fa92a548-9b8b-40f2-ba61-4e38eb995650.png" 
                alt="AI Footpath Analysis Demo" 
                className="w-full h-full object-contain rounded-2xl shadow-lg"
              />
              
              {/* Animated overlay to demonstrate AI analysis */}
              <motion.div 
                className="absolute inset-0 bg-gradient-to-r from-primary/20 to-transparent rounded-2xl"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                transition={{ 
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse"
                }}
              />
              
              {/* Scanning line effect */}
              <motion.div 
                className="absolute top-0 left-0 w-full h-2 bg-primary/50 rounded-t-2xl"
                initial={{ top: 0 }}
                animate={{ top: "100%" }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "linear"
                }}
              />
            </motion.div>
            <motion.p className="text-muted-foreground text-center" variants={itemVariants}>
              <strong>Grey Area:</strong> Area segmented by our AI instance segmentation model
            </motion.p>
          </motion.div>
          
          <motion.div className="space-y-6" variants={itemVariants}>
            <motion.h4 
              className="text-xl font-semibold mb-4"
              variants={itemVariants}
            >
              Scoring System
            </motion.h4>
            <motion.p 
              className="text-muted-foreground mb-6"
              variants={itemVariants}
            >
              We provide a score on the footpath based on these three factors:
            </motion.p>
            
            <div className="space-y-4">
              <motion.div 
                className="bg-primary/10 rounded-lg p-4 border border-primary/20"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
              >
                <h5 className="font-semibold text-primary mb-2">Walkable Area Percentage (WAP)</h5>
                <p className="text-sm text-muted-foreground">
                  Indicates how much of the image is covered by footpath. Compares with the bounding box.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-primary/10 rounded-lg p-4 border border-primary/20"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
              >
                <h5 className="font-semibold text-primary mb-2">Connectivity Score (CS)</h5>
                <p className="text-sm text-muted-foreground">
                  Reflects how continuous or connected the footpath regions are.
                </p>
              </motion.div>
              
              <motion.div 
                className="bg-primary/10 rounded-lg p-4 border border-primary/20"
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.03, 
                  boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)" 
                }}
              >
                <h5 className="font-semibold text-primary mb-2">Object Spread (OS)</h5>
                <p className="text-sm text-muted-foreground">
                  Penalizes scattered or fragmented footpath segments.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIAnalysisDemo;
