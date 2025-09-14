import { navLinks as links } from '@/data/nav';

export const Navigation = () => {
  return (
    <nav className="hidden gap-6 text-sm md:flex">
      {links.map((l) => (
        <a
          key={l.href}
          href={l.href}
          className="text-gray-600 hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
        >
          {l.label}
        </a>
      ))}
    </nav>
  );
};
