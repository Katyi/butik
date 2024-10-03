import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ClerkProvider } from '@clerk/nextjs';
import { ruRU } from '@clerk/localizations';

import '../globals.css';
import Navbar from '@/components/Navbar';
import ToasterProvider from '@/lib/providers/ToasterProvider';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Butik Store',
  description: 'Butik Ecommerce Store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body className={inter.className}>
        <ClerkProvider localization={ruRU}>
          <div>
            <ToasterProvider />
            <Navbar />
            {children}
            <Footer />
          </div>
        </ClerkProvider>
      </body>
    </html>
  );
}
