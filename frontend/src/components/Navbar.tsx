'use client';
import  { useState } from 'react';
import styles from './styles/Navbar.module.css';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles['navbar-container']}>
        <div className={styles['navbar-left']}>
          <a href="/Abdullah_Shaikh_Resume.pdf" download="Abdullah_Shaikh_Resume.pdf">
            <button className={styles['resume-button']}>Download Resume</button>
          </a>
        </div>
        <div className={styles['navbar-right']}>
          <div className={styles.hamburger} onClick={toggleMenu}>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
            <div className={styles.line}></div>
          </div>
          <ul className={`${styles['nav-links']} ${isOpen ? styles.open : ''}`}>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};


