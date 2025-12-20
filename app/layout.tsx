import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'AI BizWay - Use the tool. Get the result.',
  description: 'Complete AI business toolkit with 10 powerful kits for content, marketing, and growth',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
