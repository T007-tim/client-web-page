import { Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Header = () => {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      {/* Top bar */}
      <div className="bg-primary text-primary-foreground py-2 text-sm">
        <div className="container mx-auto px-4 flex flex-wrap justify-between items-center gap-2">
          <div className="flex items-center gap-6 flex-wrap">
            <a href="tel:0705822854" className="flex items-center gap-2 hover:text-copper transition-colors">
              <Phone size={14} />
              <span>0705822854</span>
            </a>
            <a href="mailto:kennedywambua@gmail.com" className="flex items-center gap-2 hover:text-copper transition-colors">
              <Mail size={14} />
              <span>kennedywambua@gmail.com</span>
            </a>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={14} />
            <span>Kitengela, Kajiado County</span>
          </div>
        </div>
      </div>

      {/* Main navigation */}
      <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex flex-col"
        >
          <span className="font-serif text-2xl font-bold text-primary">Kennedy Mwau Wambua</span>
          <span className="text-xs text-muted-foreground tracking-widest uppercase">Construction Architect</span>
        </motion.div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#services" className="text-foreground hover:text-copper transition-colors font-medium">Services</a>
          <a href="#projects" className="text-foreground hover:text-copper transition-colors font-medium">Projects</a>
          <a href="#about" className="text-foreground hover:text-copper transition-colors font-medium">About</a>
          <a href="#contact" className="text-foreground hover:text-copper transition-colors font-medium">Contact</a>
        </div>

        <Button variant="copper" onClick={scrollToContact} className="hidden sm:flex">
          Request Services
        </Button>
      </nav>
    </header>
  );
};

export default Header;
