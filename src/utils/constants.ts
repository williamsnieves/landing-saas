// Site Constants
export const SITE_TITLE = 'TeamSync - Remote Team Management Made Easy';
export const SITE_DESCRIPTION =
    'Empower your remote team with seamless collaboration, task management, and real-time communication. Built for modern distributed teams.';
export const SITE_URL = 'https://YOUR_USERNAME.github.io/landing-saas';
export const SITE_IMAGE = '/images/og-image.png';

// Social Media Links
export const SOCIAL_LINKS = {
    twitter: 'https://twitter.com/teamsync',
    linkedin: 'https://linkedin.com/company/teamsync',
    github: 'https://github.com/teamsync',
};

// Navigation Links
export const NAV_LINKS = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
    { label: 'Contact', href: '#contact' },
];

// Features Data
export const FEATURES = [
    {
        title: 'Real-time Collaboration',
        description:
            'Work together seamlessly with live updates, shared workspaces, and instant notifications.',
        icon: 'collaboration',
    },
    {
        title: 'Task Management',
        description:
            'Organize projects with intuitive boards, assign tasks, and track progress effortlessly.',
        icon: 'tasks',
    },
    {
        title: 'Time Tracking',
        description:
            'Monitor productivity with built-in time tracking and detailed activity reports.',
        icon: 'time',
    },
    {
        title: 'Video Conferencing',
        description:
            'Connect face-to-face with HD video calls, screen sharing, and recording capabilities.',
        icon: 'video',
    },
    {
        title: 'Analytics Dashboard',
        description:
            'Gain insights with comprehensive analytics, custom reports, and performance metrics.',
        icon: 'analytics',
    },
    {
        title: 'Integrations',
        description:
            'Connect with your favorite tools including Slack, GitHub, Jira, and 100+ more.',
        icon: 'integrations',
    },
];

// Pricing Tiers
export const PRICING_TIERS = [
    {
        name: 'Free',
        price: '$0',
        period: 'forever',
        description: 'Perfect for small teams getting started',
        features: [
            'Up to 5 team members',
            'Basic task management',
            '5GB storage',
            'Community support',
            'Mobile apps',
        ],
        cta: 'Get Started',
        popular: false,
    },
    {
        name: 'Pro',
        price: '$29',
        period: 'per month',
        description: 'For growing teams that need more power',
        features: [
            'Up to 50 team members',
            'Advanced task management',
            'Unlimited storage',
            'Priority support',
            'Video conferencing',
            'Advanced analytics',
            'Custom integrations',
        ],
        cta: 'Start Free Trial',
        popular: true,
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: 'contact us',
        description: 'For large organizations with custom needs',
        features: [
            'Unlimited team members',
            'Enterprise-grade security',
            'Dedicated account manager',
            '24/7 phone support',
            'Custom onboarding',
            'SLA guarantee',
            'Advanced permissions',
        ],
        cta: 'Contact Sales',
        popular: false,
    },
];

// FAQ Data
export const FAQ_ITEMS = [
    {
        question: 'How does the free trial work?',
        answer:
            'You can start a 14-day free trial of our Pro plan with no credit card required. After the trial ends, you can choose to upgrade or continue with our free plan.',
    },
    {
        question: 'Can I change plans later?',
        answer:
            'Yes! You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we will prorate any charges or credits.',
    },
    {
        question: 'Is my data secure?',
        answer:
            'Absolutely. We use bank-level encryption (AES-256) for data at rest and TLS 1.3 for data in transit. We are also SOC 2 Type II certified and GDPR compliant.',
    },
    {
        question: 'Do you offer refunds?',
        answer:
            'Yes, we offer a 30-day money-back guarantee. If you are not satisfied with our service, contact us within 30 days for a full refund.',
    },
    {
        question: 'What integrations are available?',
        answer:
            'We integrate with 100+ tools including Slack, Microsoft Teams, GitHub, Jira, Google Workspace, Salesforce, and many more. Check our integrations page for the full list.',
    },
    {
        question: 'How many team members can I add?',
        answer:
            'It depends on your plan. The Free plan supports up to 5 members, Pro up to 50, and Enterprise has unlimited members.',
    },
    {
        question: 'Is there a mobile app?',
        answer:
            'Yes! We have native apps for iOS and Android, available on the App Store and Google Play. All features are available on mobile.',
    },
    {
        question: 'How do I cancel my subscription?',
        answer:
            'You can cancel anytime from your account settings. Your access continues until the end of your billing period, and you will not be charged again.',
    },
];
