import { motion } from "framer-motion";
import { Building2, Home, PenTool, Hammer, HardHat, TreePine } from "lucide-react";

const services = [
  {
    icon: Building2,
    title: "Commercial Properties",
    description: "Modern commercial units designed for businesses, retail spaces, and office buildings optimized for success."
  },
  {
    icon: Home,
    title: "Residential Homes",
    description: "Beautiful private household residentials crafted to become your dream home with premium finishes."
  },
  {
    icon: PenTool,
    title: "Architectural Design",
    description: "Professional architectural blueprints and 3D visualizations bringing your vision to life."
  },
  {
    icon: Hammer,
    title: "Construction Services",
    description: "Full-scale construction from foundation to finishing, delivered with quality craftsmanship."
  },
  {
    icon: HardHat,
    title: "Project Management",
    description: "Expert oversight ensuring your project stays on budget, on time, and exceeds expectations."
  },
  {
    icon: TreePine,
    title: "Landscaping & Exterior",
    description: "Complete outdoor design including gardens, driveways, and perimeter walls for stunning curb appeal."
  }
];

const Services = () => {
  return (
    <section id="services" className="py-24 bg-stone-warm">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-copper font-medium tracking-widest uppercase text-sm">What We Offer</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Our Core Services
          </h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive construction and architectural solutions for properties in Kitengela and Kajiado County
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-card rounded-xl p-8 shadow-soft hover:shadow-strong transition-all duration-300 hover:-translate-y-2 border border-border"
            >
              <div className="w-14 h-14 bg-copper/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-copper group-hover:scale-110 transition-all duration-300">
                <service.icon className="w-7 h-7 text-copper group-hover:text-accent-foreground transition-colors" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
