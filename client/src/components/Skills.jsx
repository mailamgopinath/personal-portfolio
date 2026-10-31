import { motion } from 'framer-motion';
import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaBootstrap, FaJs, FaGitAlt, FaGithub, FaGitlab,
  FaDatabase, FaMobileAlt, FaKey, FaLock, FaRobot, FaProjectDiagram,
} from 'react-icons/fa';
import {
  SiRedux, SiExpress, SiMongodb, SiMysql, SiPostman, SiJsonwebtokens, SiRazorpay,
} from 'react-icons/si';
import { TbApi } from 'react-icons/tb';
import { VscVscode } from 'react-icons/vsc';
import SectionHeading from './SectionHeading.jsx';

const groups = [
  {
    title: 'Frontend',
    items: [
      { name: 'React.js', Icon: FaReact, color: '#61dafb' },
      { name: 'JavaScript', Icon: FaJs, color: '#f7df1e' },
      { name: 'HTML5', Icon: FaHtml5, color: '#e34f26' },
      { name: 'CSS3', Icon: FaCss3Alt, color: '#1572b6' },
      { name: 'Bootstrap', Icon: FaBootstrap, color: '#a371f7' },
      { name: 'Redux Toolkit', Icon: SiRedux, color: '#9b6ef3' },
    ],
  },
  {
    title: 'Backend',
    items: [
      { name: 'Node.js', Icon: FaNodeJs, color: '#68d391' },
      { name: 'Express.js', Icon: SiExpress, color: '#e2e8f0' },
      { name: 'REST API', Icon: TbApi, color: '#22d3ee' },
      { name: 'JWT Authentication', Icon: SiJsonwebtokens, color: '#f472b6' },
      { name: 'MVC Architecture', Icon: FaProjectDiagram, color: '#60a5fa' },
      { name: 'PHP', Icon: FaProjectDiagram, color: '#60a5fa' },
    ],
  },
  {
    title: 'Database',
    items: [
      { name: 'MongoDB', Icon: SiMongodb, color: '#47a248' },
      { name: 'MySQL', Icon: SiMysql, color: '#4aa3df' },
    ],
  },
  {
    title: 'Tools',
    items: [
      { name: 'Git', Icon: FaGitAlt, color: '#f05032' },
      { name: 'GitHub', Icon: FaGithub, color: '#e2e8f0' },
      { name: 'GitLab', Icon: FaGitlab, color: '#fc6d26' },
      { name: 'Postman', Icon: SiPostman, color: '#ff6c37' },
      { name: 'VS Code', Icon: VscVscode, color: '#3b9ce6' },
    ],
  },
  {
    title: 'Additional',
    items: [
      { name: 'Razorpay Integration', Icon: SiRazorpay, color: '#3395ff' },
      { name: 'OTP Authentication', Icon: FaKey, color: '#fbbf24' },
      { name: 'MPIN Authentication', Icon: FaLock, color: '#a78bfa' },
      { name: 'Responsive Web Design', Icon: FaMobileAlt, color: '#34d399' },
      { name: 'AI Development Tools', Icon: FaRobot, color: '#22d3ee' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="section">
      <div className="container">
        <SectionHeading eyebrow="What I work with" title="Technical Skills" />
        <div className="skills-grid">
          {groups.map((g, gi) => (
            <motion.div
              key={g.title}
              className="glass skill-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.55, delay: gi * 0.07 }}
            >
              <h3>{g.title}</h3>
              <div className="chips">
                {g.items.map(({ name, Icon, color }, i) => (
                  <motion.span
                    key={name}
                    className="chip"
                    style={{ '--c': color }}
                    initial={{ opacity: 0, scale: 0.85 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.15 + i * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <Icon style={{ color }} /> {name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
