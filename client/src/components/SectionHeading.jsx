import Reveal from './Reveal.jsx';

export default function SectionHeading({ eyebrow, title }) {
  return (
    <Reveal className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      <span className="heading-line" />
    </Reveal>
  );
}
