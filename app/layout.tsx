import '@/app/ui/global.css';
import { inter } from '@/app/ui/fonts';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: {
    template: '%s | Hebrom Dashboard',
    default: 'Hebrom Dashboard',
  },
  description: 'A melhor administradora do seu plano de saúde da atualidade.',
  metadataBase: new URL('https://hebrombeneficios.com.br'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}