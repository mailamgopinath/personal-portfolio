import { motion } from 'framer-motion';
import { FiBriefcase, FiCheckCircle } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import { experience as exp } from '../data/content.js';

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="container">
        <SectionHeading eyebrow="My journey" title="Professional Experience" />
        <div className="timeline">
          <motion.div
            className="timeline-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.6 }}
          >
            <span className="timeline-dot"><FiBriefcase /></span>
            <div className="glass timeline-card">
              <span className="period">{exp.period}</span>
              <h3>{exp.role}</h3>
              <p className="company">{exp.company}, {exp.location}</p>
              <ul>
                {exp.points.map((p) => (
                  <li key={p}><FiCheckCircle /> {p}</li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
