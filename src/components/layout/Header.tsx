import { Navigation } from './Navigation';
import { BrowserNav } from './BrowserNav';
import { Logo } from '@/components/ui/Logo';

export const Header = () => {
  return (
    <header className="sticky top-0 z-20 border-b border-gray-200 bg-white/70 backdrop-blur dark:border-gray-800 dark:bg-black/50">
      <div className="container mx-auto grid grid-cols-3 items-center px-4 py-3">
        <div className="justify-self-start">
          <Logo showIcon={false} />
        </div>
        <div className="justify-self-center">
          <BrowserNav />
        </div>
        <div className="justify-self-end">
          <Navigation />
        </div>
      </div>
    </header>
  );
};
