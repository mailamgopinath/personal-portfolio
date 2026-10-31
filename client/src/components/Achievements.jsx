import { FiAward, FiUsers } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { achievements } from '../data/content.js';

const icons = [FiAward, FiUsers];

export default function Achievements() {
  return (
    <section id="achievements" className="section">
      <div className="container">
        <SectionHeading eyebrow="Recognition" title="Achievements" />
        <div className="ach-grid">
          {achievements.map((a, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={a.title} delay={i * 0.1}>
                <div className="glass ach-card">
                  <span className="icon-box"><Icon /></span>
                  <span className="period">{a.meta}</span>
                  <h3>{a.title}</h3>
                  <p>{a.text}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
