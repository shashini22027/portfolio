import { motion } from "framer-motion";
import { Mail, Github, Linkedin } from "lucide-react";

const Contact = () => {
  return (
    <motion.section
      id="contact"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass-card p-10 md:p-16 rounded-3xl relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 left-0 w-64 h-64 bg-white/5 blur-3xl rounded-full"></div>

      <div className="relative z-10 grid md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-neutral-400 mb-8 max-w-md">
            I'm currently looking for new opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
          </p>

          <div className="space-y-4">
            <a href="mailto:Shashiniruwanthika13@gmail.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <Mail className="w-5 h-5" />
              </div>
              Shashiniruwanthika13@gmail.com
            </a>
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="p-3 bg-white/5 rounded-lg border border-white/10">
                <span className="text-white font-bold">#</span>
              </div>
              +94 70 55 81800
            </div>
          </div>

          <div className="flex gap-4 mt-8">
            <a href="#" className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Github className="w-5 h-5 text-neutral-300" />
            </a>
            <a href="#" className="p-3 bg-white/5 rounded-lg border border-white/10 hover:bg-white/10 transition-colors">
              <Linkedin className="w-5 h-5 text-neutral-300" />
            </a>
          </div>
        </div>

        <form action="https://formsubmit.co/Shashiniruwanthika13@gmail.com" method="POST" className="flex flex-col gap-4">
          <input
            name="name"
            className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 transition-all"
            placeholder="Your Name"
            required
          />
          <input
            name="email"
            type="email"
            className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 transition-all"
            placeholder="Email Address"
            required
          />
          <textarea
            name="message"
            className="w-full bg-black/50 border border-white/10 outline-none focus:border-white focus:ring-1 focus:ring-white text-white rounded-lg p-4 min-h-[150px] resize-y transition-all"
            placeholder="Your Message"
            required
          ></textarea>
          <button
            type="submit"
            className="w-full py-4 mt-2 bg-white hover:bg-neutral-200 text-black transition-colors font-bold rounded-lg shadow-[0_0_20px_rgba(255,255,255,0.1)]"
          >
            Send Message
          </button>
        </form>
      </div>
    </motion.section>
  );
};

export default Contact;
