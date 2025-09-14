'use client';

import { useEffect, useMemo, useState } from 'react';
import {
  ChevronLeft,
  ChevronRight,
  Monitor,
  Tablet,
  Smartphone,
  ChevronDown,
} from 'lucide-react';
import { useDeviceType } from '@/lib/useDeviceType';
import { cn } from '@/lib/utils';

import { navLinks as links } from '@/data/nav';

export const BrowserNav = () => {
  const device = useDeviceType();
  const [open, setOpen] = useState(false);
  const [current, setCurrent] = useState<string>('');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const update = () => setCurrent(window.location.hash || '/');
    update();
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, []);

  // Avoid SSR/CSR markup mismatch for device-dependent UI
  useEffect(() => {
    setMounted(true);
  }, []);

  const DeviceIcon = useMemo(() => {
    if (device === 'desktop') return Monitor;
    if (device === 'tablet') return Tablet;
    return Smartphone;
  }, [device]);

  const order = useMemo<string[]>(() => links.map((l) => l.href as string), []);

  const handleNavigate = (href: string) => {
    setOpen(false);
    const el = document.querySelector(href) as HTMLElement | null;
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      try {
        // Use a non-null state object to avoid Next.js dev overlay intercept error
        window.history.replaceState({ hash: href }, '', href);
      } catch {
        window.location.hash = href;
      }
      setCurrent(href);
    } else {
      window.location.hash = href;
    }
  };

  const normalizedCurrent = useMemo(() => {
    return current && current !== '/' ? current : '#home';
  }, [current]);

  const displayHash = useMemo(() => {
    return normalizedCurrent === '#home' ? '#about' : normalizedCurrent;
  }, [normalizedCurrent]);

  const goPrev = () => {
    const idx = Math.max(0, order.indexOf(normalizedCurrent));
    const prevIdx = (idx - 1 + order.length) % order.length;
    handleNavigate(order[prevIdx]);
  };

  const goNext = () => {
    const idx = Math.max(0, order.indexOf(normalizedCurrent));
    const nextIdx = (idx + 1) % order.length;
    handleNavigate(order[nextIdx]);
  };

  return (
    <div className="relative">
      <div
        className="flex items-center gap-2 rounded-xl bg-gray-900/70 px-2 py-1 text-gray-200 ring-1 ring-white/10 backdrop-blur"
        role="navigation"
        aria-label="Browser style navigation"
      >
        {/* Left arrows */}
        <button
          className="rounded-md p-1 hover:bg-white/5"
          aria-label="Previous section"
          onClick={goPrev}
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <button
          className="rounded-md p-1 hover:bg-white/5"
          aria-label="Next section"
          onClick={goNext}
        >
          <ChevronRight className="h-4 w-4" />
        </button>

        {/* Address area with device icon */}
        <button
          onClick={() => setOpen((v) => !v)}
          className="group flex min-w-[180px] items-center gap-2 rounded-md bg-black/30 px-2 py-1 ring-1 ring-white/10 hover:bg-black/40"
          aria-haspopup="listbox"
          aria-expanded={open}
        >
          {mounted ? (
            <DeviceIcon className="h-4 w-4 text-gray-300" />
          ) : (
            <span className="h-4 w-4" aria-hidden="true" />
          )}
          <span className="truncate text-xs text-gray-300">
            {displayHash.replace('#', '/#')}
          </span>
          <ChevronDown className="ml-auto h-3.5 w-3.5 text-gray-400 transition group-aria-expanded:rotate-180" />
        </button>

        {/* Right controls removed per spec */}
      </div>

      {/* Dropdown */}
      {open && (
        <div
          className={cn(
            'absolute left-1/2 z-30 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-lg border border-white/10 bg-gray-950/95 p-1 shadow-xl backdrop-blur',
          )}
          role="listbox"
        >
          {links.map((l) => (
            <button
              key={l.href}
              onClick={() => handleNavigate(l.href)}
              className="w-full rounded-md px-3 py-2 text-left text-sm text-gray-200 hover:bg-white/5"
              role="option"
              aria-selected={current === l.href}
            >
              {l.label}
              <span className="ml-2 text-xs text-gray-500">
                {l.href === '#home' ? '#about' : l.href}
              </span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
