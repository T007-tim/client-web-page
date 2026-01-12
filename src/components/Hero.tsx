import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Building2, Home } from "lucide-react";

const Hero = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToProjects = () => {
    document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-hero-gradient" />
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-copper/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-slate-light/10 rounded-full blur-3xl" />
      
      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--primary-foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--primary-foreground)) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-4xl mx-auto"
        >
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-copper/20 text-copper-glow px-4 py-2 rounded-full text-sm font-medium mb-8"
          >
            <Building2 size={16} />
            <span>Professional Construction & Architecture</span>
          </motion.div>

          <h1 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight mb-6">
            Building Dreams into
            <span className="block text-gradient-copper">Reality</span>
          </h1>

          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mx-auto mb-10">
            Premium residential homes and commercial properties for rent and sale in 
            <span className="font-semibold text-copper"> Kitengela, Kajiado County</span>. 
            Expert architectural design and construction services.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="xl" onClick={scrollToContact}>
              Request Services
              <ArrowRight size={20} />
            </Button>
            <Button variant="heroOutline" size="xl" onClick={scrollToProjects}>
              <Home size={20} />
              View Our Projects
            </Button>
          </div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="grid grid-cols-3 gap-8 mt-16 pt-16 border-t border-primary-foreground/10"
          >
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-copper">15+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Years Experience</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-copper">50+</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="font-serif text-3xl md:text-4xl font-bold text-copper">100%</div>
              <div className="text-primary-foreground/70 text-sm mt-1">Client Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
