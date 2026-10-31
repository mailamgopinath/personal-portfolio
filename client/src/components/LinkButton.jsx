// Anchor button that degrades to a disabled state when no URL is configured.
export default function LinkButton({ href, children, className = 'btn', icon }) {
  if (!href) {
    return (
      <span
        className={`${className} is-disabled`}
        aria-disabled="true"
        title="Link not added yet - edit src/data/content.js"
      >
        {icon}{children}
      </span>
    );
  }
  return (
    <a className={className} href={href} target="_blank" rel="noreferrer">
      {icon}{children}
    </a>
  );
}
