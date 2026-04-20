import type { Metadata } from 'next';
import { Noto_Sans_TC } from 'next/font/google';
import './globals.css';
import Footer from '@/components/Footer';

const noto = Noto_Sans_TC({
  subsets: ['latin'],
  weight: ['400', '500', '700'],
  variable: '--font-noto',
  display: 'swap',
});

export const metadata: Metadata = {
  title: '伊薩帶路｜ISA Walk — 關渡生活探索',
  description:
    '跟著伊薩散步，先喜歡生活，再遇見適合的家。關渡生活探索，由全國不動產 關渡加盟店提供房源。',
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
        {children}
        <Footer />
      </body>
    </html>
  );
}
