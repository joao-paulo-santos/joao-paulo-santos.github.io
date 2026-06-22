export const SITE_TITLE = 'João Paulo Santos';
export const SITE_SHORT_TITLE = 'João P. Santos';
export const SITE_DESCRIPTION =
  'Fullstack engineer. Personal site, projects, and writing.';
export const SITE_URL = 'https://joao-paulo-santos.github.io';

export const SITE_ROLE = 'Fullstack Engineer at Bloq.it';
export const SITE_LOCATION = 'Portugal';
export const SITE_BIO =
  'Programming generalist with 13+ years of experience. I tend to get curious about too many things, and then learn them.';

export const CURRENTLY_WORKING_ON: {
  name: string;
  href: string;
  note: string;
}[] = [
  {
    name: 'waypoint-memory',
    href: 'https://github.com/joao-paulo-santos/waypoint-memory',
    note: 'Self-hosted PM server with an MCP interface',
  },
  {
    name: 'velo',
    href: 'https://github.com/joao-paulo-santos/velo',
    note: 'Fast Wayland launcher, TOML plugins',
  },
];

export const CONTRIBUTIONS: {
  name: string;
  href: string;
  description: string;
}[] = [
  {
    name: 'opencode',
    href: 'https://github.com/sst/opencode',
    description: 'Terminal-based AI coding agent',
  },
  {
    name: 'Zen Browser',
    href: 'https://github.com/zen-browser/desktop',
    description: 'Firefox-based privacy browser',
  },
  {
    name: 'Hyprland',
    href: 'https://github.com/hyprwm/Hyprland',
    description: 'Dynamic Wayland compositor',
  },
  {
    name: 'Noctalia',
    href: 'https://github.com/noctalia-dev/noctalia-shell',
    description: 'All-in-one Wayland desktop shell',
  },
];

export const NAV_LINKS: { href: string; label: string }[] = [
  { href: '/projects', label: 'Projects' },
  { href: '/blog', label: 'Blog' },
  { href: '/about', label: 'About' },
];

export type SocialIcon = 'github' | 'linkedin' | 'mail';

export const SOCIALS: { label: string; href: string; icon: SocialIcon }[] = [
  {
    label: 'GitHub',
    href: 'https://github.com/joao-paulo-santos',
    icon: 'github',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/lw-jo%C3%A3o-paulo-santos/',
    icon: 'linkedin',
  },
  {
    label: 'Email',
    href: 'mailto:lw.joao.paulo.santos@gmail.com',
    icon: 'mail',
  },
];
