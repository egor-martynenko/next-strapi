import type { Metadata } from 'next';
import '../globals.css';
import { Breadcrumbs } from '@/blocks/Breadcrumbs/Breadcrumbs';

export const metadata: Metadata = {
  title: 'Аис Сталь | Каталог',
  description: 'Каталог металлопроката - низкие цены на весь ассортимент',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="catalog_layout">
      <Breadcrumbs />
      {children}
    </main>
  );
}
