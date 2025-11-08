import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Con Los Pies En La Tierra - Arte, Cultura y Deporte',
  description: 'Construimos procesos con jóvenes a través del arte, la cultura y el deporte. Transformamos vidas con propósito. Organizadores de la SAMARIA CUP en Santa Marta.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}