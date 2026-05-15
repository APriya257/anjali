import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Anjali — Business Intelligence / Data Engineer',
  description:
    'Portfolio of Anjali, a Business Intelligence / Data Engineer building reliable lakehouse and streaming pipelines for analytics-ready data.',
  metadataBase: new URL('https://apriya257.github.io/anjali/'),
  openGraph: {
    title: 'Anjali — Business Intelligence / Data Engineer',
    description:
      'Lakehouse pipelines, streaming analytics, and BI for teams that need the truth in their data.',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-bg text-ink antialiased">{children}</body>
    </html>
  );
}
