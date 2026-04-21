import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';
import TopNav from '@/components/TopNav';

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
});

const siteUrl = 'https://isa-walk.vercel.app';

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: '伊薩帶路｜ISA Walk — 關渡生活探索',
    template: '%s｜ISA Walk',
  },
  description:
    '跟著伊薩散步，先喜歡生活，再遇見適合的家。關渡生活探索，由全國不動產 關渡加盟店提供房源。',
  openGraph: {
    title: '伊薩帶路｜ISA Walk',
    description: '跟著伊薩散步，先喜歡生活，再遇見適合的家。',
    url: siteUrl,
    siteName: 'ISA Walk',
    locale: 'zh_TW',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: '伊薩帶路｜ISA Walk',
    description: '跟著伊薩散步，先喜歡生活，再遇見適合的家。',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-Hant" className={noto.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Huninn&family=LXGW+WenKai+TC:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-cream-50 font-sans text-ink-700 antialiased">
        <a href="#main" className="skip-link">
          跳至主要內容
        </a>
        <TopNav />
        <div id="main">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
