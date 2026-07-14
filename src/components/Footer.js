import { motion } from "framer-motion";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  const socialLinks = [
    { icon: <FaLinkedinIn size={18} />, href: "https://www.linkedin.com/in/lokesh-sukhwal/" },
    { icon: <FaGithub size={18} />, href: "https://github.com/lokeshsukhwal" },
    { icon: <FaTwitter size={18} />, href: "https://x.com/LokeshSukhwal15" },
  ];

  return (
    <motion.footer initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="border-t border-white/10 bg-slate-950/90 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-4 text-center sm:px-6 lg:flex-row lg:text-left lg:px-8">
        <div>
          <h2 className="text-2xl font-semibold text-white">Lokesh Sukhwal</h2>
          <p className="mt-2 text-sm text-slate-400">DevOps & Cloud Engineer • Automation • Reliability</p>
        </div>
        <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-400">
          <a href="#home" className="hover:text-cyan-300">Home</a>
          <a href="#about" className="hover:text-cyan-300">About</a>
          <a href="#skills" className="hover:text-cyan-300">Skills</a>
          <a href="#projects" className="hover:text-cyan-300">Projects</a>
          <a href="#contact" className="hover:text-cyan-300">Contact</a>
        </div>
        <div className="flex gap-3">
          {socialLinks.map((social) => (
            <a key={social.href} href={social.href} target="_blank" rel="noreferrer" className="rounded-full border border-white/10 bg-white/5 p-3 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-300">
              {social.icon}
            </a>
          ))}
        </div>
      </div>
      <div className="mx-auto mt-6 max-w-7xl border-t border-white/10 px-4 pt-6 text-center text-sm text-slate-500 sm:px-6 lg:px-8">
        © {new Date().getFullYear()} Lokesh Sukhwal. Crafted for modern cloud and platform engineering.
      </div>
    </motion.footer>
  );
};

export default Footer;
