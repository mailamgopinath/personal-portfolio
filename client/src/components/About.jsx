import { useRef } from 'react';
import { useInView } from 'framer-motion';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import useCountUp from '../hooks/useCountUp.js';
import { stats } from '../data/content.js';

function Stat({ value = 0, decimals = 0, suffix = '', text, label }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });
  const n = useCountUp(value, inView);
  const number = decimals ? n.toFixed(decimals) : Math.round(n).toLocaleString('en-IN');

  return (
    <div className="glass stat" ref={ref}>
      <strong className="gradient-text">{text ?? `${number}${suffix}`}</strong>
      <span>{label}</span>
    </div>
  );
}

export default function About() {
  return (
    <section id="about" className="section">
      <div className="container">
        <SectionHeading eyebrow="Who I am" title="About Me" />
        <Reveal className="about-text">
          <p>
            I'm a passionate Full Stack Developer with 1.5+ years of experience in developing production-grade web
            applications. I specialize in React.js, Node.js, Express.js, MongoDB, PHP, CodeIgniter and MySQL. I enjoy
            developing secure APIs, responsive interfaces, authentication systems and payment gateway integrations.
          </p>
        </Reveal>
        <div className="stats-grid">
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.08}>
              <Stat {...s} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
