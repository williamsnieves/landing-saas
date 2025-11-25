// SEO Helper Functions

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
}

export function generateSEOTags({
  title,
  description,
  image,
  url,
  type = 'website',
}: SEOProps) {
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      image,
      url,
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      image,
    },
  };
}

export function generateStructuredData(type: 'Organization' | 'WebSite') {
  if (type === 'Organization') {
    return {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'TeamSync',
      url: 'https://YOUR_USERNAME.github.io/landing-saas',
      logo: 'https://YOUR_USERNAME.github.io/landing-saas/images/logo.svg',
      description:
        'Remote team management platform for modern distributed teams',
      sameAs: [
        'https://twitter.com/teamsync',
        'https://linkedin.com/company/teamsync',
        'https://github.com/teamsync',
      ],
    };
  }

  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'TeamSync',
    url: 'https://YOUR_USERNAME.github.io/landing-saas',
    description:
      'Empower your remote team with seamless collaboration, task management, and real-time communication.',
  };
}
