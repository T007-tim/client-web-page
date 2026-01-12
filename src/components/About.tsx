import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const About = () => {
  const highlights = [
    "Licensed Construction Architect",
    "15+ Years of Experience",
    "Serving Kitengela & Kajiado County",
    "Quality-Focused Construction",
    "Timely Project Delivery",
    "Competitive Pricing"
  ];


  return (
    <section id="about" className="py-24 bg-stone-warm">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-copper font-medium tracking-widest uppercase text-sm">About Us</span>
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
              Kennedy Mwau Wambua
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              As a professional construction architect based in Kitengela, Kajiado County, I specialize in 
              transforming visions into exceptional living and commercial spaces. With over 15 years of experience 
              in the construction industry, I bring expertise, dedication, and attention to detail to every project.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              Our focus is on private household residentials and commercial units designed for both rent 
              and sale. From initial architectural designs to final construction, we ensure quality 
              craftsmanship that stands the test of time.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {highlights.map((item, index) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-copper flex-shrink-0" />
                  <span className="text-foreground font-medium">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="bg-primary rounded-2xl p-8 shadow-strong">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-copper rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="font-serif text-3xl font-bold text-accent-foreground">KM</span>
                </div>
                <h3 className="font-serif text-2xl font-bold text-primary-foreground">Kennedy Mwau Wambua</h3>
                <p className="text-copper mt-1">Construction Architect</p>
              </div>
              
              <div className="space-y-4 text-primary-foreground/80">
                <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                  <span>Profession</span>
                  <span className="text-primary-foreground font-medium">Construction Architect</span>
                </div>
                <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                  <span>Experience</span>
                  <span className="text-primary-foreground font-medium">15+ Years</span>
                </div>
                <div className="flex justify-between py-3 border-b border-primary-foreground/10">
                  <span>Location</span>
                  <span className="text-primary-foreground font-medium">Kitengela, Kajiado</span>
                </div>
                <div className="flex justify-between py-3">
                  <span>Focus</span>
                  <span className="text-primary-foreground font-medium">Residential & Commercial</span>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-copper/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-slate-light/20 rounded-full blur-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
