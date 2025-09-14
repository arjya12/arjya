import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from '@/providers/ThemeProvider';
import { personalInfo } from '@/data/personal';

const inter = Inter({ subsets: ['latin'] });
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  personalInfo.social.portfolio ||
  'https://arjyachakma.com';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: personalInfo.name,
  description: undefined,
  keywords:
    'software engineer, full stack developer, portfolio, web development',
  authors: [{ name: personalInfo.name }],
  icons: {
    icon: '/icon.svg',
  },
  openGraph: {
    title: personalInfo.name,
    description: undefined,
    type: 'website',
    locale: 'en_US',
    url: personalInfo.social.portfolio,
    siteName: personalInfo.name,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
