import Link from 'next/link';
import { personalInfo } from '@/data/personal';

type LogoProps = {
  showText?: boolean;
  showIcon?: boolean;
  className?: string;
};

export const Logo = ({
  showText = true,
  showIcon = true,
  className,
}: LogoProps) => {
  return (
    <Link
      href="/"
      aria-label={personalInfo.name}
      className={`flex items-center gap-2 ${className || ''}`}
    >
      {showIcon && (
        <svg
          width="28"
          height="28"
          viewBox="0 0 48 48"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-hidden={!showText}
        >
          <defs>
            <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#22d3ee" />
            </linearGradient>
          </defs>
          <rect x="4" y="4" width="40" height="40" rx="10" fill="url(#g)" />
          <path
            d="M16 32l8-16 8 16m-3-6H19"
            stroke="#0f172a"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
          />
        </svg>
      )}
      {showText && (
        <span className="font-bold tracking-tight text-gray-900 dark:text-white">
          {personalInfo.name.split(' ')[0]}
        </span>
      )}
    </Link>
  );
};
