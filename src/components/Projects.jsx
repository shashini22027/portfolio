import { motion } from "framer-motion";
import { Github, ExternalLink } from "lucide-react";

import project1Img from "../assets/project1.image.jpg";
import project2Img from "../assets/project2.image.jpg";


const Projects = () => {
  const projects = [
    { title: "Sports Equipments E-Commerce Platform",
      description:
        "A responsive e-commerce site featuring user authentication, profile management, and interactive product showcases.",
      image: project2Img,
      tags: ["HTML/CSS/JS", "PHP", "Git"],
      github:
        "https://github.com/shashini22027/sports_eqiupments_stock",
    },
    {
      title: "Bookfair Stall Reservation System",
      description:
        "A comprehensive reservation system featuring vendor registration, stall selection, and payment processing for large-scale bookfair events.",
      image: project1Img,
      tags: ["React", "Node.js", "MongoDB", "Express"],
      github:
        "https://github.com/shashini22027/bookfair-stall-reservation-system",
    }
  ];

  return (
    <motion.section
      id="projects"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-8"
    >
      {/* Header */}
      <div className="text-center space-y-3">
        <h2 className="text-4xl font-bold">
          <span className="text-neutral-400">Featured </span>
          <span className="text-white">Projects</span>
        </h2>

        <p className="text-neutral-400 text-base">
          Some of my recent collaborative work and applications.
        </p>
      </div>

      {/* Projects Grid */}
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project, idx) => (
          <motion.div
            key={project.title}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            className="glass-card rounded-2xl overflow-hidden border border-white/5 group bg-[#0f172a]"
          >
            {/* Image */}
            <div className="h-56 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-neutral-300 transition-colors">
                {project.title}
              </h3>

              <p className="text-neutral-400 text-sm leading-relaxed mb-5">
                {project.description}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-4 py-1.5 bg-[#1e293b] text-sm font-semibold text-neutral-300 rounded-full border border-white/5"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              {/* Buttons */}
              <div className="mt-auto pt-4 border-t border-white/5 flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm font-bold text-white hover:text-neutral-400 transition-colors"
                >
                  <Github className="w-4 h-4" />
                  GitHub Repo
                </a>

                <button className="inline-flex items-center gap-2 text-sm font-bold text-neutral-400 hover:text-white transition-colors">
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Projects;