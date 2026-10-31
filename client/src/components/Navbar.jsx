import { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { FiMenu, FiX, FiDownload } from 'react-icons/fi';
import useScrolled from '../hooks/useScrolled.js';
import useScrollSpy from '../hooks/useScrollSpy.js';
import { navLinks, profile } from '../data/content.js';

const ids = navLinks.map((l) => l.id);

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const scrolled = useScrolled();
  const active = useScrollSpy(ids);

  const go = (e, id) => {
    e.preventDefault();
    setOpen(false);
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className={`navbar ${scrolled || open ? 'is-scrolled' : ''}`}>
      <div className="container nav-inner">
        <a href="#home" className="logo" onClick={(e) => go(e, 'home')}>
          <span className="logo-mark">G</span>
          <span>{profile.brand}<em>.</em></span>
        </a>

        <nav className="nav-links" aria-label="Primary">
          {navLinks.map((l) => (
            <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => go(e, l.id)}>
              {l.label}
            </a>
          ))}
        </nav>

        <a href={profile.resume} download className="btn btn-primary btn-sm nav-cta">
          <FiDownload /> Download Resume
        </a>

        <button className="hamburger" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.nav
            className="mobile-menu"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {navLinks.map((l) => (
              <a key={l.id} href={`#${l.id}`} className={active === l.id ? 'active' : ''} onClick={(e) => go(e, l.id)}>
                {l.label}
              </a>
            ))}
            <a href={profile.resume} download className="btn btn-primary">
              <FiDownload /> Download Resume
            </a>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
