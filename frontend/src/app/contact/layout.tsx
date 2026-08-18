import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Get a Free Consultation & Quote | Custom Software & AI Automation',
  description: 'Contact Flexiti Studio to discuss custom software development, AI automation agency solutions, or SaaS MVP engineering. Get a free technical consultation today.',
  keywords: [
    'Get a free consultation',
    'Build custom software contact',
    'AI automation agency consultation',
    'SaaS MVP developers contact',
    'Flexiti Studio contact',
    'Software engineering quote'
  ],
  alternates: {
    canonical: '/contact',
  },
  openGraph: {
    type: 'website',
    url: 'https://flexitistudio.com/contact',
    title: 'Get a Free Consultation & Quote | Flexiti Studio',
    description: 'Discuss custom software development, AI automation solutions, or SaaS MVP engineering with Flexiti Studio.',
    images: [{ url: '/flexiti-logo.png', alt: 'Contact Flexiti Studio' }],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
