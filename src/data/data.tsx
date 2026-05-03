import {
  AcademicCapIcon,
  ArrowDownTrayIcon,
  BuildingOffice2Icon,
  CalendarIcon,
  FlagIcon,
  MapIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import LinkedInIcon from '../components/Icon/LinkedInIcon';
import TwitterIcon from '../components/Icon/TwitterIcon';
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
  description: 'Personal academic website for Robin Yajie Wang, Assistant Professor of International Political Economy.',
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];

/**
 * Hero section
 */
export const heroData: Hero = {
  imageSrc: heroImage,
  profileImageSrc: profilepic,
  name: `I'm Robin Yajie Wang.` ,
  description: (
    <>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        I am an <strong className="text-stone-100">Assistant Professor of International Political Economy</strong> in the Division of Global and Area Studies at <strong className="text-stone-100">The Chinese University of Hong Kong, Shenzhen</strong>.
      </p>
      <p className="prose-sm text-stone-200 sm:prose-base lg:prose-lg">
        My research sits at the intersection of <strong className="text-stone-100">comparative political economy</strong>, <strong className="text-stone-100">international political economy</strong>, and <strong className="text-stone-100">Chinese politics</strong>.
      </p>
    </>
  ),
  actions: [
    {
      href: 'https://drive.google.com',
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
  description: `I received my Ph.D. in Political Science from Yale University, along with an M.A. in Statistics and Data Science. I also hold an M.Phil. in International Relations from the University of Oxford and a B.A. in English Literature from Beijing Foreign Studies University. I was a Yenching Scholar at Peking University and a Postdoctoral Fellow at Perry World House, University of Pennsylvania.`,
  aboutItems: [
    {label: 'Location', text: 'Shenzhen / Hong Kong', Icon: MapIcon},
    {label: 'Current Role', text: 'Assistant Professor, CUHK-Shenzhen', Icon: CalendarIcon},
    {label: 'Research Focus', text: 'Comparative & International Political Economy', Icon: FlagIcon},
    {label: 'Methods', text: 'Quantitative + Qualitative, fieldwork, original data', Icon: SparklesIcon},
    {label: 'PhD', text: 'Yale University, Political Science', Icon: AcademicCapIcon},
    {label: 'Previous', text: 'Perry World House, University of Pennsylvania', Icon: BuildingOffice2Icon},
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
    description: 'Dataset covering China tariff policy across instruments, HS-8 lines, and historical periods from pre-WTO to present.',
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
    date: 'Ph.D.',
    location: 'Yale University',
    title: 'Political Science',
    content: <p>Ph.D. training in political science with focus on comparative and international political economy.</p>,
  },
  {
    date: 'M.A.',
    location: 'Yale University',
    title: 'Statistics and Data Science',
    content: <p>Formal training in statistical methods and empirical research design.</p>,
  },
  {
    date: 'M.Phil.',
    location: 'University of Oxford',
    title: 'International Relations',
    content: <p>Graduate study in international relations and global politics.</p>,
  },
  {
    date: 'B.A.',
    location: 'Beijing Foreign Studies University',
    title: 'English Literature',
    content: <p>Undergraduate degree in English literature.</p>,
  },
];

export const experience: TimelineItem[] = [
  {
    date: 'Current',
    location: 'The Chinese University of Hong Kong, Shenzhen',
    title: 'Assistant Professor of International Political Economy',
    content: <p>Division of Global and Area Studies, School of Humanities and Social Science.</p>,
  },
  {
    date: 'Previous',
    location: 'Perry World House, University of Pennsylvania',
    title: 'Postdoctoral Fellow / Research Fellow',
    content: <p>Research on globalization, trade policy, and state capacity.</p>,
  },
  {
    date: 'Previous',
    location: 'Peking University',
    title: 'Yenching Scholar',
    content: <p>Academic fellowship focused on China-related scholarship.</p>,
  },
  {
    date: 'Teaching',
    location: 'Yale University',
    title: 'Teaching Fellow',
    content: <p>Supported courses including Game Theory & Political Science, Applied Quantitative Research Design, and International Relations.</p>,
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
      text: 'yajie.wang621@gmail.com',
      href: 'mailto:yajie.wang621@gmail.com',
    },
    {
      type: ContactType.Location,
      text: '3803 Locust Walk, Philadelphia, PA 19104',
      href: 'https://maps.google.com/?q=3803+Locust+Walk+Philadelphia+PA+19104',
    },
    {
      type: ContactType.Phone,
      text: '+1 203-909-3160',
      href: 'tel:+12039093160',
    },
    {
      type: ContactType.Github,
      text: 'Robin-Wang621',
      href: 'https://github.com/Robin-Wang621',
    },
  ],
};

/**
 * Social items
 */
export const socialLinks: Social[] = [
  {label: 'Github', Icon: GithubIcon, href: 'https://github.com/Robin-Wang621'},
  {label: 'LinkedIn', Icon: LinkedInIcon, href: 'https://www.linkedin.com'},
  {label: 'Twitter', Icon: TwitterIcon, href: 'https://robin-yajiewang.com'},
];
