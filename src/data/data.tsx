import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import GithubIcon from '../components/Icon/GithubIcon';
import profilepic from '../images/profilepic.webp';
import {About, ContactSection, ContactType, Hero, HomepageMeta, Social, TimelineItem} from './dataDef';

export const homePageMeta: HomepageMeta = {
  title: 'Robin Yajie Wang | International Political Economy',
  description:
    'Robin Yajie Wang is an Assistant Professor of International Political Economy studying globalization, state capacity, industrial policy, and China.',
  ogImageUrl: '/social-card.jpg',
  twitterCardType: 'summary_large_image',
};

export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Data: 'data',
  Research: 'research',
  Resume: 'resume',
  Teaching: 'teaching',
} as const;

export type SectionId = (typeof SectionId)[keyof typeof SectionId];

export const heroData: Hero = {
  profileImageSrc: profilepic,
  name: 'Yajie Wang',
  description: (
    <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
      Assistant Professor of International Political Economy at{' '}
      <a
        className="font-semibold text-white underline decoration-blue-400/70 underline-offset-4 hover:text-blue-200"
        href="https://www.cuhk.edu.cn/en"
        rel="noreferrer"
        target="_blank">
        The Chinese University of Hong Kong, Shenzhen
      </a>
      . I study the political economy of globalization, economic openness, and geopolitical competition, with a focus on
      China and emerging economies.
    </p>
  ),
  actions: [
    {
      href: '/Yajie_Robin_Wang_CV.pdf',
      text: 'Download CV',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `#${SectionId.Contact}`,
      text: 'Get in touch',
      primary: false,
    },
  ],
};

export const aboutData: About = {
  description: [
    'I am an Assistant Professor in the Division of Global and Area Studies at The Chinese University of Hong Kong, Shenzhen. I received my Ph.D. in Political Science and M.A. in Statistics and Data Science from Yale University, and an M.Phil. in International Relations from the University of Oxford.',
    'My research sits at the intersection of comparative political economy, international political economy, and Chinese politics. I combine original data collection, statistical analysis, qualitative fieldwork, and research design to study state capacity, fiscal institutions, industrial policy, firm behavior, and immigration policy.',
    'My current projects examine fiscal centralization and redistribution under globalization, as well as how firms and states respond to trade shocks, sanctions, and regulatory uncertainty. I also teach research methods, political economy, international relations, and industrial policy.',
  ],
};

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

export const contact: ContactSection = {
  headerText: 'Start a conversation',
  description:
    'I welcome research collaborations, teaching inquiries, and conversations about political economy, trade, and China.',
  items: [
    {
      type: ContactType.Email,
      text: 'yajiewang@cuhk.edu.cn',
      href: 'mailto:yajiewang@cuhk.edu.cn',
    },
    {
      type: ContactType.Phone,
      text: '+86 755 2351 6865',
      href: 'tel:+8675523516865',
    },
    {
      type: ContactType.Location,
      text: 'CUHK-Shenzhen, Shenzhen, China',
      href: 'https://www.cuhk.edu.cn/en',
    },
    {
      type: ContactType.LinkedIn,
      text: 'linkedin.com/in/robin-yajie-wang-59277186',
      href: 'https://www.linkedin.com/in/robin-yajie-wang-59277186/',
    },
    {
      type: ContactType.Github,
      text: 'github.com/robin621',
      href: 'https://github.com/robin621',
    },
  ],
};

export const socialLinks: Social[] = [{label: 'GitHub', Icon: GithubIcon, href: 'https://github.com/robin621'}];
