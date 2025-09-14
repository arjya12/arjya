import { SocialLinks } from '@/components/ui/SocialLinks';
import { personalInfo } from '@/data/personal';

export const Footer = () => {
  return (
    <footer className="border-t border-gray-200 py-8 text-center text-sm text-gray-500 dark:border-gray-800">
      <div className="container mx-auto flex flex-col items-center gap-4 px-4">
        <SocialLinks />
        <div>
          © {new Date().getFullYear()} {personalInfo.name}
        </div>
      </div>
    </footer>
  );
};
