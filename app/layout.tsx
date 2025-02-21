import type { Metadata } from 'next';
import { DM_Sans } from 'next/font/google';
import './globals.css';
import Header from '@/components/header';
import Lenis from '@/components/lenis';
import Footer from '@/components/footer';

const dmSans = DM_Sans({
  variable: '--font-dm-sans',
  weight: ['400', '500', '600', '700'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veratel.io'),

  title: {
    default: 'Veratel',
    template: '%s | Veratel',
  },
  description: 'Veratel',
  openGraph: {
    title: 'Veratel',
    description: 'Veratel turbo',
    url: 'https://veratel.io',
    siteName: 'Veratel',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    title: 'Veratel',
    card: 'summary_large_image',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${dmSans.variable} antialiased`}>
        <Lenis>
          <Header />
          {children}
          <Footer />
        </Lenis>
      </body>
    </html>
  );
}
