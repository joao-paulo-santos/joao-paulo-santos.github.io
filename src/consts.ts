export const SITE_TITLE = 'João Paulo Santos';
export const SITE_SHORT_TITLE = 'João P.';
export const SITE_DESCRIPTION =
  'Software developer. Personal site, projects, and writing.';
export const SITE_URL = 'https://joao-paulo-santos.github.io';

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export type SocialIcon = 'github' | 'linkedin' | 'mail';

export const SOCIALS: { label: string; href: string; icon: SocialIcon }[] = [
  { label: 'GitHub', href: 'https://github.com/joao-paulo-santos', icon: 'github' },
];
