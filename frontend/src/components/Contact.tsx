'use client';
import React, { useState } from 'react';
import { LuArrowUpRight, LuDownload, LuSend } from 'react-icons/lu';
import { developer, socialLinks } from '@/data/site';
import SectionHeading from './ui/SectionHeading';
import Button from './ui/Button';
import styles from './styles/Contact.module.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <section id="contact" className={`section ${styles.contact}`} aria-labelledby="contact-title">
      <div className="site-container">
        <div className={styles.layout}>
          <div className={styles.intro}>
            <SectionHeading
              id="contact-title"
              index="04"
              eyebrow="Contact"
              title="Have a project in mind?"
              description="I'd love to hear about it — whether it's a web app, an AI agent, or both. Send a message or reach out on any of these."
            />

            <ul className={styles.channels}>
              {socialLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} target="_blank" rel="noopener noreferrer" className={styles.channel}>
                    <span className={styles.channelLabel}>{link.label}</span>
                    <span className={styles.channelHandle}>{link.handle}</span>
                    <LuArrowUpRight aria-hidden="true" className={styles.channelArrow} />
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>

            <Button
              href={developer.resume}
              download="Abdullah_Shaikh_Resume.pdf"
              variant="ghost"
              icon={<LuDownload />}
              className={styles.resume}
            >
              Download resume (PDF)
            </Button>
          </div>

          <form className={`${styles.form} reveal`} action={developer.formEndpoint} method="post">
            <div className={styles.row}>
              <div className={styles.field}>
                <label htmlFor="contact-name" className={styles.label}>
                  Name
                </label>
                <input
                  id="contact-name"
                  type="text"
                  name="name"
                  autoComplete="name"
                  placeholder="Your name"
                  className={styles.input}
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.field}>
                <label htmlFor="contact-email" className={styles.label}>
                  Email
                </label>
                <input
                  id="contact-email"
                  type="email"
                  name="email"
                  autoComplete="email"
                  placeholder="you@example.com"
                  className={styles.input}
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>
            <div className={styles.field}>
              <label htmlFor="contact-message" className={styles.label}>
                Message
              </label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Tell me a little about what you're building…"
                className={`${styles.input} ${styles.textarea}`}
                rows={6}
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>
            <Button type="submit" icon={<LuSend />} className={styles.submit}>
              Send message
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
