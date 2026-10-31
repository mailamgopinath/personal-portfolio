import { motion } from 'framer-motion';
import { FiExternalLink, FiGithub, FiCheck } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import LinkButton from './LinkButton.jsx';
import { projects } from '../data/content.js';

export default function Projects() {
  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHeading eyebrow="Selected work" title="Projects" />
        <div className="projects-grid">
          {projects.map((p, i) => (
            <motion.article
              key={p.name}
              className="glass project-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <div className={`project-thumb thumb-${i % 3}`}>
                {p.image ? (
                  <img src={p.image} alt={`${p.name} screenshot`} loading="lazy" />
                ) : (
                  <>
                    <span>{p.name.split(' ')[0]}</span>
                    <small>Screenshot placeholder</small>
                  </>
                )}
              </div>
              <div className="project-body">
                <h3>{p.name}</h3>
                <p className="project-tag">{p.tagline}</p>
                <p className="project-desc">{p.description}</p>
                <ul className="project-features">
                  {p.features.map((f) => (
                    <li key={f}><FiCheck /> {f}</li>
                  ))}
                </ul>
                <div className="badges">
                  {p.stack.map((s) => (
                    <span key={s} className="badge">{s}</span>
                  ))}
                </div>
                {/* <div className="project-actions">
                  <LinkButton href={p.demo} className="btn btn-primary btn-sm" icon={<FiExternalLink />}>
                    Live Demo
                  </LinkButton>
                  <LinkButton href={p.github} className="btn btn-outline btn-sm" icon={<FiGithub />}>
                    GitHub
                  </LinkButton>
                </div> */}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
