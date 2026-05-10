import { motion } from "framer-motion";

const Navbar = () => {
  return (
    <nav className="fixed w-full z-50 transition-all duration-300 glass border-b border-white/5 top-0">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-500"
        >
          Shashini
        </motion.div>

        <ul className="hidden md:flex gap-8 text-sm font-medium">
          {["About", "Education", "Skills", "Projects", "Blog", "Contact"].map((item, idx) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * idx }}
            >
              <a href={`#${item.toLowerCase()}`} className="hover:text-white text-neutral-400 transition-colors">
                {item}
              </a>
            </motion.li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
