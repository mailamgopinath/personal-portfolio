import { useState } from 'react';
import axios from 'axios';
import { FiPhone, FiMail, FiLinkedin, FiGithub, FiSend } from 'react-icons/fi';
import SectionHeading from './SectionHeading.jsx';
import Reveal from './Reveal.jsx';
import { profile } from '../data/content.js';

const API_URL = import.meta.env.VITE_API_URL || '';
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const empty = { name: '', email: '', subject: '', message: '' };

const validate = (v) => {
  const e = {};
  if (v.name.trim().length < 2) e.name = 'Please enter your full name.';
  if (!EMAIL_RE.test(v.email.trim())) e.email = 'Please enter a valid email.';
  if (v.subject.trim().length < 3) e.subject = 'Subject must be at least 3 characters.';
  if (v.message.trim().length < 10) e.message = 'Message must be at least 10 characters.';
  return e;
};

export default function Contact() {
  const [values, setValues] = useState(empty);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: '', text: '' });
  const [sending, setSending] = useState(false);

  const onChange = (e) => {
    const { name, value } = e.target;
    setValues((v) => ({ ...v, [name]: value }));
    if (errors[name]) setErrors((er) => ({ ...er, [name]: undefined }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const found = validate(values);
    setErrors(found);
    if (Object.keys(found).length) return;

    setSending(true);
    setStatus({ type: '', text: '' });
    try {
      const { data } = await axios.post(`${API_URL}/api/contact`, values);
      setStatus({ type: 'success', text: data.message });
      setValues(empty);
    } catch (err) {
      const res = err.response?.data;
      if (res?.errors) setErrors(res.errors);
      setStatus({ type: 'error', text: res?.message || 'Could not send your message. Please try again.' });
    } finally {
      setSending(false);
    }
  };

  const info = [
    { Icon: FiPhone, label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s/g, '')}` },
    { Icon: FiMail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { Icon: FiLinkedin, label: 'LinkedIn', value: 'View profile', href: profile.linkedin },
    { Icon: FiGithub, label: 'GitHub', value: profile.github ? 'View profile' : 'Not added yet', href: profile.github },
  ];

  const field = (name, label, props = {}) => (
    <div className={`field ${errors[name] ? 'has-error' : ''}`}>
      <label htmlFor={name}>{label}</label>
      {props.rows ? (
        <textarea id={name} name={name} value={values[name]} onChange={onChange} {...props} />
      ) : (
        <input id={name} name={name} value={values[name]} onChange={onChange} {...props} />
      )}
      {errors[name] && <span className="error">{errors[name]}</span>}
    </div>
  );

  return (
    <section id="contact" className="section">
      <div className="container">
        <SectionHeading eyebrow="Get in touch" title="Let's Build Something Amazing Together" />
        <div className="contact-grid">
          <Reveal className="contact-info">
            {info.map(({ Icon, label, value, href }) => {
              const body = (
                <>
                  <span className="icon-box"><Icon /></span>
                  <span>
                    <small>{label}</small>
                    <strong>{value}</strong>
                  </span>
                </>
              );
              return href ? (
                <a key={label} className="glass info-card" href={href} {...(href.startsWith('http') ? { target: '_blank', rel: 'noreferrer' } : {})}>
                  {body}
                </a>
              ) : (
                <div key={label} className="glass info-card is-disabled" title="Add your link in src/data/content.js">
                  {body}
                </div>
              );
            })}
          </Reveal>

          <Reveal delay={0.1}>
            <form className="glass contact-form" onSubmit={onSubmit} noValidate>
              {field('name', 'Full Name', { type: 'text', autoComplete: 'name' })}
              {field('email', 'Email', { type: 'email', autoComplete: 'email' })}
              {field('subject', 'Subject', { type: 'text' })}
              {field('message', 'Message', { rows: 5 })}
              <button className="btn btn-primary" type="submit" disabled={sending}>
                <FiSend /> {sending ? 'Sending...' : 'Send Message'}
              </button>
              {status.text && (
                <p className={`form-status ${status.type}`} role="status">{status.text}</p>
              )}
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
