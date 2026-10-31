import SocialLinks from './SocialLinks.jsx';
import { navLinks, profile } from '../data/content.js';

export default function Footer() {
  const go = (e, id) => {
    e.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">{profile.brand} – MERN Stack Developer</p>
        <nav className="footer-links" aria-label="Footer">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} onClick={(e) => go(e, l.id)}>{l.label}</a>
          ))}
        </nav>
        <SocialLinks />
        <p className="copy">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  );
}
