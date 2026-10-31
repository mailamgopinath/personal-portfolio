import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { profile } from '../data/content.js';

export default function SocialLinks() {
  const items = [
    { label: 'GitHub', href: profile.github, icon: <FiGithub />, external: true },
    { label: 'LinkedIn', href: profile.linkedin, icon: <FiLinkedin />, external: true },
    { label: 'Email', href: `mailto:${profile.email}`, icon: <FiMail />, external: false },
  ];
  return (
    <div className="socials">
      {items.map(({ label, href, icon, external }) =>
        href ? (
          <a
            key={label}
            href={href}
            aria-label={label}
            title={label}
            {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}
          >
            {icon}
          </a>
        ) : (
          <span key={label} className="is-disabled" aria-label={`${label} (link not added)`} title={`${label} link not added yet`}>
            {icon}
          </span>
        )
      )}
    </div>
  );
}
