import ContactContent from './components/ContactContent';

export default function ContactPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'ContactPage',
    'name': 'Get a Free Consultation & Quote | Flexiti Studio',
    'description': 'Schedule a technical consultation with Flexiti Studio for custom software, SaaS MVP development, and AI automations.',
    'url': 'https://flexitistudio.com/contact',
    'mainEntity': {
      '@type': 'Organization',
      'name': 'Flexiti Studio',
      'url': 'https://flexitistudio.com',
      'contactPoint': {
        '@type': 'ContactPoint',
        'contactType': 'customer support',
        'email': 'hello@flexitistudio.com',
        'availableLanguage': ['English'],
      },
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactContent />
    </>
  );
}