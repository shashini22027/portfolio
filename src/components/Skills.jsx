import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.section
      id="skills"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="space-y-12"
    >
      <div className="text-center space-y-4">
        <h2 className="text-3xl font-bold inline-block relative">
          Skills
          <div className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-neutral-500 to-white rounded-full"></div>
        </h2>
        <p className="text-neutral-400 text-lg">Here are the technologies and tools I work with</p>
      </div>

      <div className="space-y-12">
        <div>
          <h3 className="text-xl font-bold text-white mb-6">Frontend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "HTML", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
              { title: "CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" },
              { title: "Tailwind CSS", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
              { title: "React", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
              { title: "JavaScript", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
            ].map((skill, idx) => (
              <motion.div key={skill.title} whileHover={{ y: -5 }} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 group">
                <img src={skill.icon} alt={skill.title} className="w-8 h-8 transition-all" />
                <h3 className="text-xs font-semibold text-white">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6">Backend Development</h3>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
            {[
              { title: "Java", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg" },
              { title: "PHP", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" },
              { title: "Spring Boot", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg" },
              { title: "Node.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
              { title: "Express.js", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg", bgWhite: true },
            ].map((skill, idx) => (
              <motion.div key={skill.title} whileHover={{ y: -5 }} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 group">
                <img src={skill.icon} alt={skill.title} className={`w-8 h-8 transition-all ${skill.bgWhite ? "bg-white p-1 rounded" : ""}`} />
                <h3 className="text-xs font-semibold text-white">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-xl font-bold text-white mb-6">Other Development Tools</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { title: "MySQL", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
              { title: "MongoDB", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
              { title: "Git", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" },
              { title: "Figma", icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg" },
            ].map((skill, idx) => (
              <motion.div key={skill.title} whileHover={{ y: -5 }} className="glass-card p-4 rounded-xl flex flex-col items-center justify-center gap-3 group">
                <img src={skill.icon} alt={skill.title} className="w-8 h-8 transition-all" />
                <h3 className="text-xs font-semibold text-white">{skill.title}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Skills;
