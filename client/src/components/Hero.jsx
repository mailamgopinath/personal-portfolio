import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { FiDownload, FiSend, FiArrowRight } from 'react-icons/fi';
import { FaReact, FaNodeJs } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';
import SocialLinks from './SocialLinks.jsx';
import { profile, typingTitles } from '../data/content.js';

// Type a title, hold 1.5s, delete it, move to the next. Loops forever.
const sequence = typingTitles.flatMap((t) => [t, 1500]);

const floaters = [
  { Icon: FaReact, cls: 'f-react', color: '#61dafb', delay: 0 },
  { Icon: FaNodeJs, cls: 'f-node', color: '#68d391', delay: 0.8 },
  { Icon: SiExpress, cls: 'f-express', color: '#e2e8f0', delay: 1.6 },
  { Icon: SiMongodb, cls: 'f-mongo', color: '#47a248', delay: 2.4 },
];

const go = (id) => (e) => {
  e.preventDefault();
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
};

const fade = (delay) => ({
  initial: { opacity: 0, y: 16 },
  animate: { opacity: 1, y: 0 },
  transition: { delay, duration: 0.6 },
});

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero-grid">
        <div className="hero-copy">
          <motion.span className="hello" {...fade(1.2)}>HELLO, I'M</motion.span>
          <motion.h1 {...fade(1.3)}>
            <span className="gradient-text">M.K. GOPINATH</span>
          </motion.h1>
          <motion.p className="hero-sub" {...fade(1.4)}>
            Full Stack Developer | Building Modern Web Applications
          </motion.p>

          <motion.div className="typing" {...fade(1.5)}>
            <span>I am </span>
            <TypeAnimation
              sequence={sequence}
              wrapper="span"
              speed={55}
              deletionSpeed={70}
              repeat={Infinity}
              cursor={false}
              className="typing-text"
            />
            <span className="cursor" aria-hidden="true" />
          </motion.div>

          <motion.p className="hero-desc" {...fade(1.6)}>
            Full Stack Developer with 1.5+ years of experience building scalable web applications, secure REST APIs,
            responsive user interfaces and database-driven solutions.
          </motion.p>

          <motion.div className="hero-actions" {...fade(1.7)}>
            <a href="#projects" className="btn btn-primary" onClick={go('projects')}>
              Explore My Work <FiArrowRight />
            </a>
            <a href={profile.resume} download className="btn btn-outline">
              <FiDownload /> Download Resume
            </a>
            <a href="#contact" className="btn btn-ghost" onClick={go('contact')}>
              <FiSend /> Contact Me
            </a>
          </motion.div>

          <motion.div {...fade(1.8)}>
            <SocialLinks />
          </motion.div>
        </div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
        >
          <div className="glow glow-a" />
          <div className="glow glow-b" />
          <div className="avatar-ring">
            <div className="avatar">
              <img src="/profile.png" alt="M.K. Gopinath" />

            </div>
          </div>
          {floaters.map(({ Icon, cls, color, delay }) => (
            <motion.div
              key={cls}
              className={`floater ${cls}`}
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay }}
              style={{ color }}
            >
              <Icon />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
