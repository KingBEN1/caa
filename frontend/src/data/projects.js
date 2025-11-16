const projects = [
  {
    id: 'cosmic-commerce',
    title: 'Cosmic Commerce',
    category: ['Branding', 'Web', 'UI/UX', 'Marketing'],
    summary: 'E-commerce platform reimagined with a brutalist yet luxurious interface.',
    goal: 'Increase conversion rate and average order value for a premium direct-to-consumer brand.',
    client: 'Confidential DTC Brand',
    challenge: 'Crowded market and complex product catalog requiring clarity without losing personality.',
    solution: 'Re-architected information hierarchy, bold visual storytelling, and refined checkout flows.',
    results: {
      conversionLift: '+32%',
      timeOnSite: '+48%',
      bounceRate: '-21%'
    },
    technologies: ['React', 'Next.js', 'Node.js', 'Headless CMS'],
    gallery: ['/images/cosmic-1.jpg', '/images/cosmic-2.jpg', '/images/cosmic-3.jpg']
  },
  {
    id: 'helios-bank',
    title: 'Helios Bank',
    category: ['Web', 'UI/UX'],
    summary: 'A modern digital banking interface with trust-first design.',
    goal: 'Position the bank as a digital-first, globally competitive institution.',
    client: 'Helios Bank',
    challenge: 'Legacy perception and complex product ecosystem.',
    solution: 'Minimalist visual language, simplified navigation, and transparent product pages.',
    results: {
      accountSignups: '+27%',
      supportCalls: '-18%'
    },
    technologies: ['React', 'Framer Motion', 'Design System'],
    gallery: ['/images/helios-1.jpg', '/images/helios-2.jpg']
  },
  {
    id: 'pulse-fitness',
    title: 'Pulse Fitness',
    category: ['Mobile', 'UI/UX'],
    summary: 'Mobile app experience for high-intensity training programs.',
    goal: 'Create a daily companion app that feels premium yet effortless to use.',
    client: 'Pulse Studio',
    challenge: 'Complex program data and user progression.',
    solution: 'Card-based navigation, progress visualizations, and micro-interactions for motivation.',
    results: {
      retention: '+41%'
    },
    technologies: ['React Native', 'Node.js'],
    gallery: ['/images/pulse-1.jpg', '/images/pulse-2.jpg']
  }
];

export default projects;
