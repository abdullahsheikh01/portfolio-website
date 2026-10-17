'use client';
import { useEffect, useState } from 'react';
import { LuDownload, LuMenu, LuX } from 'react-icons/lu';
import { developer, navLinks } from '@/data/site';
import Logo from './ui/Logo';
import Button from './ui/Button';
import styles from './styles/Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeHref, setActiveHref] = useState('');

  // Highlight the nav link for the section currently in view
  useEffect(() => {
    // The hero is observed too, so returning to the top clears the highlight
    const sections = ['#home', ...navLinks.map((link) => link.href)]
      .map((href) => document.querySelector<HTMLElement>(href))
      .filter((el): el is HTMLElement => el !== null);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHref(entry.target.id === 'home' ? '' : `#${entry.target.id}`);
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsOpen(false);
    };
    const onResize = () => {
      if (window.innerWidth > 860) setIsOpen(false);
    };
    document.addEventListener('keydown', onKeyDown);
    window.addEventListener('resize', onResize);
    return () => {
      document.removeEventListener('keydown', onKeyDown);
      window.removeEventListener('resize', onResize);
    };
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  return (
    <nav className={`site-container ${styles.navbar}`} aria-label="Primary">
      <Logo />

      <button
        type="button"
        className={styles.menuToggle}
        aria-expanded={isOpen}
        aria-controls="primary-navigation"
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        onClick={() => setIsOpen((open) => !open)}
      >
        {isOpen ? <LuX aria-hidden="true" /> : <LuMenu aria-hidden="true" />}
      </button>

      <div id="primary-navigation" className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        <ul className={styles.navLinks}>
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className={styles.navLink}
                aria-current={activeHref === link.href ? 'location' : undefined}
                onClick={closeMenu}
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <Button
          href={developer.resume}
          download="Abdullah_Shaikh_Resume.pdf"
          variant="secondary"
          size="sm"
          icon={<LuDownload />}
          onClick={closeMenu}
        >
          Resume
        </Button>
      </div>
    </nav>
  );
};
