import { motion } from "framer-motion";
import { Play } from "lucide-react";
import { useState } from "react";

import project1 from "@/assets/project-1.jpeg";
import project2 from "@/assets/project-2.jpeg";
import project3 from "@/assets/project-3.jpeg";
import project4 from "@/assets/project-4.jpeg";
import projectVideo from "@/assets/project-video.mp4";

const projects = [
  {
    image: project1,
    title: "Modern Bungalow Design",
    category: "Residential",
    description: "Contemporary single-story residence with open floor plan and landscaped gardens"
  },
  {
    image: project2,
    title: "Luxury Family Home",
    category: "Residential",
    description: "Elegant family home featuring modern architecture and premium finishes"
  },
  {
    image: project3,
    title: "Maisonette Under Construction",
    category: "Construction",
    description: "Multi-level residence showcasing quality construction in progress"
  },
  {
    image: project4,
    title: "Premium Residential Project",
    category: "Residential",
    description: "Beautiful hilltop residence with stunning architectural details"
  }
];

const Projects = () => {
  const [videoPlaying, setVideoPlaying] = useState(false);

  return (
    <section id="projects" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="text-copper font-medium tracking-widest uppercase text-sm">Our Portfolio</span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-4 mb-6">
            Featured Projects
          </h2>
          <p className="text-muted-foreground text-lg">
            Explore our completed and ongoing construction projects across Kitengela and Kajiado County
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative overflow-hidden rounded-2xl shadow-medium hover:shadow-strong transition-all duration-500"
            >
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block bg-copper text-accent-foreground px-3 py-1 rounded-full text-xs font-medium mb-3">
                  {project.category}
                </span>
                <h3 className="font-serif text-xl font-semibold text-primary-foreground mb-2">
                  {project.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Video Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-2xl overflow-hidden shadow-strong"
        >
          <div className="aspect-video bg-primary relative">
            <video
              src={projectVideo}
              className="w-full h-full object-cover"
              controls={videoPlaying}
              playsInline
              onClick={() => setVideoPlaying(true)}
            />
            {!videoPlaying && (
              <div 
                className="absolute inset-0 flex items-center justify-center bg-primary/40 cursor-pointer group"
                onClick={() => setVideoPlaying(true)}
              >
                <div className="w-20 h-20 bg-copper rounded-full flex items-center justify-center shadow-copper group-hover:scale-110 transition-transform duration-300">
                  <Play className="w-8 h-8 text-accent-foreground ml-1" />
                </div>
                <div className="absolute bottom-8 left-8">
                  <span className="bg-copper text-accent-foreground px-3 py-1 rounded-full text-xs font-medium">
                    Video Tour
                  </span>
                  <h3 className="font-serif text-2xl font-semibold text-primary-foreground mt-2">
                    Construction Progress Video
                  </h3>
                </div>
              </div>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
