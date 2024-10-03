import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { ClerkProvider } from '@clerk/nextjs';
import { ruRU } from '@clerk/localizations';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Butik - Store Auth',
  description: 'Next.js 14 Butik Ecommerce store',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider localization={ruRU}>
      <html lang="ru" suppressHydrationWarning={true}>
        <body className={inter.className}>{children}</body>
      </html>
    </ClerkProvider>
  );
}
