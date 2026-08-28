'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './Navbar.module.css';
import { ThemeToggle } from '../ThemeToggle/ThemeToggle';

const NAV_LINKS = [
  {
    label: 'About',
    href: '/#about',
  },
  {
    label: 'Experience',
    href: '/#experience',
  },
  {
    label: 'Certifications',
    href: '/#certifications',
  },
  {
    label: 'Projects',
    href: '/#projects',
  },
  {
    label: 'Blogs',
    href: '/blogs',
  },
  {
    label: 'Contact',
    href: '/#contact',
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const handleLogoClick = (event) => {
    if (pathname !== '/') return;

    const isPlainLeftClick =
      event.button === 0 &&
      !event.metaKey &&
      !event.ctrlKey &&
      !event.shiftKey &&
      !event.altKey;
    if (!isPlainLeftClick) return;
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <Link className={styles.title} href='/' onClick={handleLogoClick}>
        Koushik<span className={styles.titleDot}>.</span>dev
      </Link>

      <div className={styles.navRight}>
        <ThemeToggle />

        <button
          type='button'
          className={`${styles.menuBtn} ${menuOpen ? styles.menuBtnOpen : ''}`}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}>
          <span />
          <span />
          <span />
        </button>

        <ul
          className={`${styles.menuItems} ${menuOpen ? styles.menuOpen : ''}`}>
          {NAV_LINKS.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setMenuOpen(false)}>
                {label}
              </Link>
            </li>
          ))}
          <li className={styles.menuCta}>
            <Link href='/#contact' onClick={() => setMenuOpen(false)}>
              Let&apos;s talk
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};
