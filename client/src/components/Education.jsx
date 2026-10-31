import { FiBookOpen } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { education } from '../data/content.js';

export default function Education() {
  return (
    <section id="education" className="section">
      <div className="container">
        <SectionHeading eyebrow="Academic background" title="Education" />
        <div className="edu-grid">
          {education.map((e, i) => (
            <Reveal key={e.degree} delay={i * 0.1}>
              <div className="glass edu-card">
                <span className="icon-box"><FiBookOpen /></span>
                <div>
                  <h3>{e.degree}</h3>
                  <p>{e.school}</p>
                  <span className="period">{e.year}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
