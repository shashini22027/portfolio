import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.section
      id="about"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-6"
    >
      <h2 className="text-3xl font-bold flex items-center gap-3">
        <span className="w-8 h-1 bg-white rounded-full"></span>
        About Me
      </h2>
      <div className="glass-card p-8 rounded-2xl text-neutral-300 leading-relaxed text-lg">
        Hello! I'm Shashini, a 3rd year Software Engineering undergraduate at University of Kelaniya. I am deeply passionate about creating impactful technology solutions that live on the internet. My core focus these days is building accessible, inclusive products and digital experiences.
      </div>
    </motion.section>
  );
};

export default About;
