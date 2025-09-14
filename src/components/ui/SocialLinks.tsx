'use client';

import { Github, Linkedin, Instagram, Twitter } from 'lucide-react';
import { personalInfo } from '@/data/personal';
import clsx from 'clsx';

interface SocialLinksProps {
  className?: string;
  iconClassName?: string;
}

export const SocialLinks = ({ className, iconClassName }: SocialLinksProps) => {
  const { social } = personalInfo;

  if (!social) return null;

  return (
    <div className={clsx('flex items-center gap-6', className)}>
      {social.github && (
        <a
          href={social.github}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub profile"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Github className={clsx('h-6 w-6', iconClassName)} />
        </a>
      )}
      {social.linkedin && (
        <a
          href={social.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn profile"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Linkedin className={clsx('h-6 w-6', iconClassName)} />
        </a>
      )}
      {social.twitter && (
        <a
          href={social.twitter}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="X (Twitter) profile"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Twitter className={clsx('h-6 w-6', iconClassName)} />
        </a>
      )}
      {social.instagram && (
        <a
          href={social.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram profile"
          className="text-gray-600 transition-colors hover:text-gray-900 dark:text-gray-400 dark:hover:text-white"
        >
          <Instagram className={clsx('h-6 w-6', iconClassName)} />
        </a>
      )}
    </div>
  );
};
