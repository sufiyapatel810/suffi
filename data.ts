// All the personal content lives here. Edit this file to update the site.

export const PROFILE = {
  name: 'Sufiya',
  fullName: 'Sufiya Nazim Patel',
  tagline: 'AIML student & web developer building responsive, user-friendly websites',
  email: 'sufiyanazimpatel@gmail.com',
  github: 'https://github.com/sufiyapatel810',
  linkedin: 'https://www.linkedin.com/in/sufiya-patel810/',
  instagram: 'https://www.instagram.com/suf.ptl',
  location: 'Pune, Maharashtra',
  // Drop your resume PDF into /public and name it resume.pdf
  resume: 'resume.pdf',
};

export const ABOUT_COPY =
  "I'm a third-year B.E. student in Artificial Intelligence & Machine Learning at Siddhant College of Engineering, Pune. I build responsive, user-friendly websites, from a crochet shop to a billing tool for a real store. I'm just as comfortable on stage, anchoring college fests and leading events. Let's build something good together!";

export const SKILLS_ROW_1 = [
  'HTML5',
  'CSS3',
  'JavaScript',
  'Python',
  'SQL',
  'Git & GitHub',
  'Firebase',
  'Google Analytics',
  'Vercel',
];

export const SKILLS_ROW_2 = [
  'Machine Learning',
  'Responsive Design',
  'UI/UX',
  'Microsoft Excel',
  'Public Speaking',
  'Event Management',
  'Leadership',
  'Problem Solving',
  'Crochet',
];

export const SERVICES = [
  {
    number: '01',
    name: 'Web Development',
    description:
      'Fast, responsive websites built with HTML, CSS and JavaScript, tested on phones, tablets and desktops, and deployed on Vercel.',
  },
  {
    number: '02',
    name: 'UI/UX Design',
    description:
      'Clean layouts and simple navigation. I care about how a site feels to use, not just how it looks.',
  },
  {
    number: '03',
    name: 'Backend & Data',
    description:
      'Firebase for authentication and live data, SQL for structured data, and Google Analytics to see how people actually use a site.',
  },
  {
    number: '04',
    name: 'AI & Machine Learning',
    description:
      'Python and machine learning fundamentals from my AIML degree, and a steady habit of learning new tools.',
  },
  {
    number: '05',
    name: 'Leadership & Speaking',
    description:
      'Event coordination, anchoring and hosting. I can run a team, a schedule and a stage.',
  },
];

export interface ProjectItem {
  number: string;
  name: string;
  category: string;
  summary: string;
  highlights: string[];
  tech: string[];
  live: string;
  repo: string;
  // Optional screenshot in /public/projects (e.g. 'sufstitch.png').
  // Until you add it, a styled placeholder is shown.
  image?: string;
}

export const PROJECTS: ProjectItem[] = [
  {
    number: '01',
    name: 'Famous Sales Billing Software',
    category: 'Business tool',
    summary:
      'An offline billing app built for Famous Sales Factory Outlet. It runs from a single file, with no install and no server.',
    highlights: [
      'GST billing with barcode scanning and IMEI/serial numbers',
      'Owner and cashier roles, low-stock alerts and a best-sellers dashboard',
      'Warranty lookup, bill reprints, and backup/restore',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Vercel'],
    live: 'https://famoussalesbillingsoftware.vercel.app',
    repo: 'https://github.com/sufiyapatel810/famous-sales-billing-software',
    image: 'billing.png',
  },
  {
    number: '02',
    name: 'SufStitch',
    category: 'E-commerce',
    summary:
      'A website for a handmade crochet business, with bags, accessories and decor to browse, a cart and a checkout.',
    highlights: [
      'Product browsing, cart and checkout flow',
      'Sign up and login with Firebase',
      'Google Analytics to track visits and engagement',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Google Analytics', 'Vercel'],
    live: 'https://suf-stitch.vercel.app',
    repo: 'https://github.com/sufiyapatel810/SufStitch',
    image: 'sufstitch.png',
  },
  {
    number: '03',
    name: 'Birthday Countdown & Wishlist',
    category: 'Fun project',
    summary:
      'A three-page site with a countdown to October 8th and a gift wishlist where friends claim items live, so nobody doubles up.',
    highlights: [
      'Gifts update in real time for every visitor',
      'Firebase Realtime Database, no server code',
      'Name gate remembered per visitor in the browser',
    ],
    tech: ['HTML', 'CSS', 'JavaScript', 'Firebase', 'Vercel'],
    live: 'https://8th-october.vercel.app',
    repo: 'https://github.com/sufiyapatel810/8th-October',
    image: 'wishlist.png',
  },
];

export const EDUCATION = [
  {
    period: '2024 – 2028',
    title: 'B.E. in Artificial Intelligence & Machine Learning',
    place: 'Siddhant College of Engineering, Pune',
    note: 'CGPA 8.32 / 10',
  },
  {
    period: '2024',
    title: 'Higher Secondary (Class XII)',
    place: 'Reena Mehta College, Maharashtra State Board',
    note: '',
  },
  {
    period: '2022',
    title: 'Secondary (Class X)',
    place: 'Gems International School, Maharashtra State Board',
    note: '',
  },
];

export const LEADERSHIP = [
  {
    title: 'Anchor, SPANDAN 2K25 and 2K26',
    detail: "The college's annual fest",
  },
  {
    title: 'Coordinator, three technical events',
    detail: 'Planned and ran events for the college',
  },
  {
    title: 'Class Representative',
    detail: 'One academic year',
  },
  {
    title: 'House Captain',
    detail: 'Three consecutive years at school',
  },
  {
    title: 'Silver Medal',
    detail: 'State-Level English Language Olympiad',
  },
];

export const LANGUAGES = ['English', 'Hindi', 'Marathi'];

export const CONTACT_TOPICS = [
  'Internship',
  'Project',
  'Collaboration',
  'Just saying hi',
];
