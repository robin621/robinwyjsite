import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import profilepic from '../images/profilepic.webp';
import {SectionId} from './data';
import {About, ContactSection, ContactType, Hero, HomepageMeta, TimelineItem} from './dataDef';

export const zhHomePageMeta: HomepageMeta = {
  title: '王亚杰｜国际政治经济学',
  description: '王亚杰，香港中文大学（深圳）国际政治经济学助理教授，研究全球化、国家能力、产业政策与中国政治经济。',
  ogImageUrl: '/social-card.jpg',
  twitterCardType: 'summary_large_image',
};

export const zhHeroData: Hero = {
  profileImageSrc: profilepic,
  name: '王亚杰',
  description: (
    <>
      <p className="max-w-2xl text-base leading-7 text-neutral-300 sm:text-lg sm:leading-8">
        我现任
        <a
          className="font-semibold text-white underline decoration-blue-400/70 underline-offset-4 hover:text-blue-200"
          href="https://www.cuhk.edu.cn/zh-hans"
          rel="noreferrer"
          target="_blank">
          香港中文大学（深圳）国际政治经济学助理教授
        </a>
        ，研究全球化、经济开放与地缘政治竞争的政治经济影响，重点聚焦中国及其他新兴经济体。
      </p>
    </>
  ),
  actions: [
    {
      href: '/Yajie_Wang_CV_Chinese.pdf',
      text: '下载个人简历',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `/zh/#${SectionId.Contact}`,
      text: '联系我',
      primary: false,
    },
  ],
};

export const zhAboutData: About = {
  description: [
    '我现任香港中文大学（深圳）全球与区域研究学科部国际政治经济学助理教授。我于耶鲁大学获得政治学博士和统计与数据科学硕士学位，并于牛津大学获得国际关系哲学硕士学位。',
    '我的研究方向涵盖比较政治经济学、国际政治经济学与中国政治，综合运用原创数据收集、统计分析、定性田野调查与研究设计，探讨国家能力、财政制度、产业政策、企业行为和移民政策。',
    '我目前研究全球化背景下的财政集权与再分配，以及企业和国家如何应对贸易冲击、经济制裁和监管不确定性。我也讲授研究方法、政治经济学、国际关系与产业政策等课程。',
  ],
};

export const zhEducation: TimelineItem[] = [
  {
    date: '2025年5月',
    location: '耶鲁大学',
    title: '政治学博士',
    content: <p>研究领域：国际关系、政治经济学与比较政治</p>,
  },
  {
    date: '2021年',
    location: '耶鲁大学',
    title: '统计与数据科学文学硕士',
    content: <p>统计与数据科学研究生学位</p>,
  },
  {
    date: '2021年',
    location: '耶鲁大学',
    title: '政治学哲学硕士',
    content: <p>政治学研究生学位</p>,
  },
  {
    date: '2018年',
    location: '牛津大学',
    title: '国际关系哲学硕士',
    content: <p>国际关系研究生学位</p>,
  },
  {
    date: '2015-2016年',
    location: '北京大学',
    title: '燕京学者',
    content: <p>北京大学燕京学堂学者</p>,
  },
  {
    date: '2015年',
    location: '北京外国语大学',
    title: '英语文学学士',
    content: <p>英语文学本科学位</p>,
  },
];

export const zhExperience: TimelineItem[] = [
  {
    date: '2026年1月至今',
    location: '香港中文大学（深圳）',
    title: '助理教授',
    content: <p>人文社会科学学院全球与区域研究学科部</p>,
  },
  {
    date: '2024年8月-2026年1月',
    location: '宾夕法尼亚大学',
    title: '研究员',
    content: <p>Perry World House</p>,
  },
];

export const zhAwards = [
  '香港中文大学（深圳）大学发展基金资助（2026）',
  'The Cosmos x IHS AI-Accelerated Scholarship（2026）',
  'Humane Studies Research Grant（2025）',
  '宾夕法尼亚大学博士后研究资助（2025）',
  '蒋经国国际学术交流基金会博士论文奖学金（2024-2025）',
  '耶鲁大学可口可乐世界基金（2024）',
  'Humane Studies Fellowship（2023-2024）',
  '耶鲁大学博士论文奖学金（2021-2022）',
  'Hayek Fund Fellowship（2021-2022）',
];

export const zhConferencePresentations =
  'GSIPE（伯克利，2025）、CPRP 2024、NEWEPS 2024、New Faces in Chinese Politics（2024）、VIPES 2024、MPSA 2024、APSA 2022-2025';

export const zhProfessionalService = '《美国政治科学评论》匿名审稿人';

export const zhLanguagesAndSkills = '普通话（母语）；R、Stata、Python、ArcGIS、LaTeX';

export const zhFieldworkExperience = '中国大陆（2021年8月-2022年8月）';

export const zhContact: ContactSection = {
  headerText: '与我联系',
  description: '欢迎就政治经济学、贸易与中国研究进行学术交流、教学咨询与合作。',
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
      text: '香港中文大学（深圳），中国深圳',
      href: 'https://www.cuhk.edu.cn/zh-hans',
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
