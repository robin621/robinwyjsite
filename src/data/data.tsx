import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import heroImage from '../images/header-background.webp';
import porfolioImage1 from '../images/portfolio/portfolio-1.jpg';
import porfolioImage2 from '../images/portfolio/portfolio-2.jpg';
import porfolioImage3 from '../images/portfolio/portfolio-3.jpg';
import porfolioImage4 from '../images/portfolio/portfolio-4.jpg';
import porfolioImage5 from '../images/portfolio/portfolio-5.jpg';
import porfolioImage6 from '../images/portfolio/portfolio-6.jpg';
import porfolioImage7 from '../images/portfolio/portfolio-7.jpg';
import porfolioImage8 from '../images/portfolio/portfolio-8.jpg';
import porfolioImage9 from '../images/portfolio/portfolio-9.jpg';
import porfolioImage10 from '../images/portfolio/portfolio-10.jpg';
import porfolioImage11 from '../images/portfolio/portfolio-11.jpg';
import profilepic from '../images/profilepic.jpg';
import testimonialImage from '../images/testimonial.webp';
import {
  About,
  ContactSection,
  ContactType,
  Hero,
  HomepageMeta,
  PortfolioItem,
  SkillGroup,
  Social,
  TestimonialSection,
  TimelineItem,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'Robin Yajie Wang | International Political Economy',
  description:
    'Personal academic website for Robin Yajie Wang, Assistant Professor of International Political Economy.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Data: 'data',
  Portfolio: 'portfolio',
  Research: 'research',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Teaching: 'teaching',
  Testimonials: 'testimonials',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  profileImageSrc: profilepic,
  name: 'Yajie Wang',
  description: (
    <>
      <p className="prose-sm leading-7 text-neutral-300 sm:prose-base lg:prose-lg">
        Welcome! I am an{' '}
        <strong className="font-semibold text-white">Assistant Professor of International Political Economy</strong> in
        the Division of Global and Area Studies at{' '}
        <strong className="font-semibold text-white">The Chinese University of Hong Kong, Shenzhen</strong>.
      </p>
      <p className="prose-sm leading-7 text-neutral-300 sm:prose-base lg:prose-lg">
        I study how{' '}
        <strong className="font-semibold text-white">
          globalization, economic openness, and geopolitical competition
        </strong>{' '}
        reshape state capacity, fiscal institutions, industrial policy, firm behavior, and immigration policy, with a
        focus on China and emerging economies.
      </p>
    </>
  ),
  actions: [
    {
      href: '/Yajie_Robin_Wang_CV.pdf',
      text: 'CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Contact',
      primary: false,
    },
  ],
};

/**
 * About section
 */
export const aboutData: About = {
  profileImageSrc: profilepic,
  description: [
    'Yajie Wang is an Assistant Professor of International Political Economy in the Division of Global and Area Studies, School of Humanities and Social Science at The Chinese University of Hong Kong, Shenzhen.',
    'He received his Ph.D. in Political Science from Yale University, along with an M.A. in Statistics and Data Science, and holds an M.Phil. in International Relations from the University of Oxford. He earned his B.A. in English Literature from Beijing Foreign Studies University. He was a Yenching Scholar at Peking University and a Postdoctoral Fellow at Perry World House, University of Pennsylvania.',
    'His research lies at the intersection of comparative political economy, international political economy, and Chinese politics. He studies how globalization, economic openness, and geopolitical competition reshape state capacity, fiscal institutions, industrial policy, firm behavior, and immigration policy, with a particular focus on China and emerging economies. He seeks to use both qualitative and quantitative research methodologies, combining original data collection, statistical analysis, and fieldwork.',
    "Yajie's current projects examine fiscal centralization, taxation, and redistribution in response to globalization, as well as how firms and states respond to trade shocks, sanctions, and regulatory uncertainty. His research has been supported by multiple fellowships and has been presented at major international conferences.",
    'He teaches courses in research methods, political economy, international relations, and industrial policy. His teaching emphasizes rigorous research design, critical thinking, and the integration of theory with real-world policy questions.',
  ],
};

/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Research fields',
    skills: [
      {name: 'Comparative Political Economy', level: 10},
      {name: 'International Political Economy', level: 10},
      {name: 'Chinese Politics', level: 9},
    ],
  },
  {
    name: 'Methods',
    skills: [
      {name: 'Quantitative analysis', level: 9},
      {name: 'Qualitative fieldwork', level: 8},
      {name: 'Original data collection', level: 9},
    ],
  },
  {
    name: 'Current agendas',
    skills: [
      {name: 'Fiscal centralization', level: 9},
      {name: 'Trade shocks & sanctions', level: 9},
      {name: 'Firm-state political economy', level: 8},
    ],
  },
];

/**
 * Portfolio section
 */
export const portfolioItems: PortfolioItem[] = [
  {
    title: 'Embedded State-Building: Economic Openness, Tax Structure and Fiscal Capacity in Contemporary China',
    description:
      "Working paper on how China's WTO-era openness incentivized fiscal centralization, tax bureaucracy expansion, and targeted redistribution to laid-off workers.",
    url: 'https://papers.ssrn.com',
    image: porfolioImage1,
  },
  {
    title: 'Strategic Liberalization: The Political Economy of Targeted Tariff Reductions in China',
    description:
      'Working paper on how centrally supervised and tax-compliant firms gained disproportionate access to tariff reductions during liberalization.',
    url: 'https://papers.ssrn.com',
    image: porfolioImage2,
  },
  {
    title: 'How Great Power Competition Affects Public Support for High-Skilled Immigration',
    description: 'Ongoing project with Jiahua Yue.',
    url: 'https://robin-yajiewang.com/research-1',
    image: porfolioImage3,
  },
  {
    title: 'The Returns to Tax Compliance: How Chinese Firms Navigate Tax Reform',
    description: 'Ongoing project with Xiaobo Lü.',
    url: 'https://robin-yajiewang.com/research-1',
    image: porfolioImage4,
  },
  {
    title: 'Fools Rush Out: Geopolitical Disruptions and Firm Overcompliance',
    description: 'Ongoing project with Eric Keun Woo Jeong.',
    url: 'https://robin-yajiewang.com/research-1',
    image: porfolioImage5,
  },
  {
    title: 'The Unlikely Alliance: How Chinese Exporters Navigate Trade Tensions Through International Alliance',
    description: 'Ongoing project on exporter responses to trade tensions.',
    url: 'https://robin-yajiewang.com/research-1',
    image: porfolioImage6,
  },
  {
    title: 'Managing Openness in Hard Times: Export Slowdown and Bureaucratic Enforcement in China',
    description: 'Ongoing project on enforcement and slowdown dynamics.',
    url: 'https://robin-yajiewang.com/research-1',
    image: porfolioImage7,
  },
  {
    title: 'China Tariff Policy Hub (CTPH)',
    description:
      'Dataset covering China tariff policy across instruments, HS-8 lines, and historical periods from pre-WTO to present.',
    url: 'https://robin-yajiewang.com/data',
    image: porfolioImage8,
  },
  {
    title: 'GB 1986 - 1994 - 2002 - 2007 - 2011 - 2017 - 2020',
    description: 'Crosswalk resource listed on the data page.',
    url: 'https://robin-yajiewang.com/data',
    image: porfolioImage9,
  },
  {
    title: 'GB - ISIC - HS',
    description: 'Industry and product concordance resource.',
    url: 'https://robin-yajiewang.com/data',
    image: porfolioImage10,
  },
  {
    title: 'China HS-10 Concordance',
    description: 'Crosswalk/concordance resource for Chinese product coding.',
    url: 'https://robin-yajiewang.com/data',
    image: porfolioImage11,
  },
];

/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem[] = [
  {
    date: 'May 2025',
    location: 'Yale University',
    title: 'Ph.D. in Political Science',
    content: <p>Fields: International Relations, Political Economy, and Comparative Politics.</p>,
  },
  {
    date: '2021',
    location: 'Yale University',
    title: 'M.A. in Statistics and Data Science',
    content: <p>Graduate degree in statistics and data science.</p>,
  },
  {
    date: '2021',
    location: 'Yale University',
    title: 'M.Phil. in Political Science',
    content: <p>Graduate degree in political science.</p>,
  },
  {
    date: '2018',
    location: 'University of Oxford',
    title: 'M.Phil. in International Relations',
    content: <p>Graduate degree in international relations.</p>,
  },
  {
    date: '2015-2016',
    location: 'Peking University',
    title: 'Yenching Scholar',
    content: <p>Yenching Academy scholar in Beijing, China.</p>,
  },
  {
    date: '2015',
    location: 'Beijing Foreign Studies University',
    title: 'B.A. in English Literature',
    content: <p>Undergraduate degree in English literature.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Jan 2026-Present',
    location: 'Chinese University of Hong Kong, Shenzhen',
    title: 'Assistant Professor',
    content: <p>Division of Global and Area Studies, School of Humanities and Social Science.</p>,
  },
  {
    date: 'Aug 2024-Jan 2026',
    location: 'University of Pennsylvania',
    title: 'Research Fellow',
    content: <p>Perry World House.</p>,
  },
];

export const awards = [
  'University Development Fund Grant, CUHK-Shenzhen (2026)',
  'The Cosmos x IHS AI-Accelerated Scholarship (2026)',
  'Humane Studies Research Grant (2025)',
  'Postdoctoral Research Grant, University of Pennsylvania (2025)',
  'Chiang Ching-kuo Foundation Doctoral Fellowship (2024-2025)',
  'Coca-Cola World Fund at Yale (2024)',
  'Humane Studies Fellowship (2023-2024)',
  'University Dissertation Fellowship, Yale University (2021-2022)',
  'Hayek Fund Fellowship (2021-2022)',
];

export const conferencePresentations =
  'GSIPE (Berkeley 2025), CPRP 2024, NEWEPS 2024, New Faces in Chinese Politics (2024), VIPES 2024, MPSA 2024, APSA 2022-2025';

export const professionalService = 'Reviewer for American Political Science Review';

export const languagesAndSkills = 'Mandarin Chinese (native); R, Stata, Python, ArcGIS, LaTeX';

export const fieldworkExperience = 'Mainland China (Aug 2021-Aug 2022)';

export const references = [
  {
    name: 'Kenneth Scheve',
    affiliation: 'College of Arts & Letters, University of Notre Dame',
    email: 'kscheve@nd.edu',
  },
  {
    name: 'Didac Queralt',
    affiliation: 'Department of Political Science, Yale University',
    email: 'didac.queralt@yale.edu',
  },
  {
    name: 'Daniel Mattingly',
    affiliation: 'Department of Political Science, Yale University',
    email: 'daniel.mattingly@yale.edu',
  },
];

/**
 * Testimonial section
 */
export const testimonial: TestimonialSection = {
  imageSrc: testimonialImage,
  testimonials: [
    {name: 'Industrial Policy and Development', text: 'Course offering, Spring 2026.'},
    {name: 'Social Science Research Methods', text: 'Course offering, Spring 2026.'},
    {
      name: 'Teaching Fellow courses at Yale University',
      text: 'Game Theory & Political Science; Applied Quantitative Research Design; Introduction to International Relations; The Rise of China; Foundations of Statistical Inference.',
    },
  ],
};

/**
 * Contact section
 */

export const contact: ContactSection = {
  headerText: 'Get in touch.',
  description: 'I welcome collaborations and inquiries on political economy, trade, and Chinese politics research.',
  items: [
    {
      type: ContactType.Email,
      text: 'yajiewang@cuhk.edu.cn',
      href: 'mailto:yajiewang@cuhk.edu.cn',
    },
    {
      type: ContactType.Email,
      text: 'yajie.wang621@gmail.com',
      href: 'mailto:yajie.wang621@gmail.com',
    },
    {
      type: ContactType.Location,
      text: '11F, Teaching Complex B, 2001 Longxiang Road, Longgang District, Shenzhen, Guangdong, China',
      href: 'https://www.amap.com/search?query=2001%20Longxiang%20Road%20Longgang%20District%20Shenzhen',
    },
    {
      type: ContactType.Phone,
      text: '+86 134 3062 1063',
      href: 'tel:+8613430621063',
    },
    {
      type: ContactType.Github,
      text: 'robin621',
      href: 'https://github.com/robin621',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/robin621'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com'},
];
