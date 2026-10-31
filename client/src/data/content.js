// Single source of truth for portfolio content. Edit links here.
// Empty URL strings render as disabled buttons until you fill them in.

export const profile = {
  name: 'M.K. Gopinath',
  brand: 'Gopinath',
  phone: '+91 8639935924',
  email: 'mailamgopinath@gmail.com',
  linkedin: 'https://www.linkedin.com/in/gopinath-m-k-98a08636b/',
  github: 'https://github.com/mailamgopinath', // TODO: add your GitHub profile URL
  resume: '/Gopinath_Resume.pdf',
};

export const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

export const typingTitles = [
  'a MERN Stack Developer',
  'a React.js Developer',
  'a Node.js Developer',
  'a Full Stack Developer',
  'a Backend Developer',
  'an API Integration Developer',
];

export const stats = [
  { value: 1.5, decimals: 1, suffix: '+', label: 'Years Experience' },
  { value: 4, suffix: '', label: 'Production Applications' },
  { value: 1000, suffix: '+', label: 'Real Users' },
  { text: 'Multiple', label: 'Full Stack Projects' },
];

export const experience = {
  role: 'Full Stack Developer',
  company: 'Yours Efficiently Software Solution',
  location: 'Thousand Light, Tamil Nadu',
  period: 'December 2025 – Present',
  points: [
    'Developed production-grade web applications.',
    'Built secure RESTful APIs.',
    'Implemented role-based authentication and access control.',
    'Integrated payment gateways.',
    'Developed responsive React interfaces.',
    'Worked with relational databases and API integrations.',
  ],
};

export const projects = [
  {
    name: 'KJ Loyalty',
    tagline: 'Customer Loyalty Management System',
    description:
      'A loyalty platform where every customer gets a unique code to track reward points, referrals and benefits, with staff access controlled by role.',
    features: [
      'Loyalty card and code management',
      'Reward points management',
      'Customer referral system',
      'Staff role-based access management',
      'Customer self-service',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL'],
    image: '/projects/kj-loyalty.png',
    demo: '',
    github: '',
  },
  {
    name: 'StyleHub',
    tagline: 'Clothing E-commerce Website',
    description:
      'A full-stack clothing store with protected user and admin areas, product browsing, cart and checkout, backed by a REST API.',
    features: [
      'JWT authentication',
      'Product browsing and category filters',
      'Shopping cart and checkout',
      'Admin dashboard',
      'Product and order management',
      'Razorpay payment integration',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'MySQL', 'Bootstrap', 'JWT', 'Razorpay'],
    image: '/projects/stylehub.png',
    demo: '',
    github: '',
  },
  {
    name: 'Product Management & Razorpay',
    tagline: 'Product Catalogue with Online Payments',
    description:
      'A product management app with image uploads and a complete Razorpay payment flow, from order creation to signature verification.',
    features: [
      'Product CRUD operations',
      'Product image upload',
      'Razorpay order creation',
      'Payment signature verification',
      'Payment status management',
    ],
    stack: ['React.js', 'Node.js', 'Express.js', 'Razorpay'],
    demo: '',
    github: '',
  },
];

export const education = [
  {
    degree: 'Master of Computer Applications (MCA)',
    school: 'Siddharth Institute of Engineering and Technology, Puttur',
    year: '2023',
  },
  {
    degree: 'Higher Secondary – MPC',
    school: 'Sri Sai Jyothi Junior College',
    year: '2020',
  },
];

export const achievements = [
  {
    title: 'Tech Trailblazer Developer Award',
    meta: 'December 2025',
    text: 'Yours Efficiently Software Solution – recognized for exceptional commitment and technical excellence across 4 production-grade applications.',
  },
  {
    title: '4 Live Production Applications',
    meta: '1,000+ users',
    text: 'Delivered 4 live production applications serving 1,000+ real users.',
  },
];
