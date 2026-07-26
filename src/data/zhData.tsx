import {ArrowDownTrayIcon} from '@heroicons/react/24/outline';

import profilepic from '../images/profilepic.jpg';
import {SectionId} from './data';
import {About, ContactSection, ContactType, Hero, HomepageMeta, TimelineItem} from './dataDef';

export const zhHomePageMeta: HomepageMeta = {
  title: '王亚杰｜国际政治经济学',
  description: '王亚杰的个人学术网站。香港中文大学（深圳）全球与区域研究学科部国际政治经济学助理教授。',
};

export const zhHeroData: Hero = {
  imageSrc: profilepic,
  profileImageSrc: profilepic,
  name: '王亚杰',
  description: (
    <>
      <p className="prose-sm leading-7 text-neutral-300 sm:prose-base lg:prose-lg">
        你好！我现任
        <strong className="font-semibold text-white">
          香港中文大学（深圳）全球与区域研究学科部国际政治经济学助理教授
        </strong>
        。
      </p>
      <p className="prose-sm leading-7 text-neutral-300 sm:prose-base lg:prose-lg">
        我的研究关注
        <strong className="font-semibold text-white">全球化、经济开放与地缘政治竞争</strong>
        如何重塑国家能力、财政制度、产业政策、企业行为与移民政策，重点聚焦中国及其他新兴经济体。
      </p>
    </>
  ),
  actions: [
    {
      href: '/Yajie_Wang_CV_Chinese.pdf',
      text: '个人简历',
      primary: true,
      Icon: ArrowDownTrayIcon,
    },
    {
      href: `/zh/#${SectionId.Contact}`,
      text: '联系方式',
      primary: false,
    },
  ],
};

export const zhAboutData: About = {
  profileImageSrc: profilepic,
  description: [
    '我现任香港中文大学（深圳）人文社会科学学院全球与区域研究学科部国际政治经济学助理教授。',
    '我于耶鲁大学获得政治学博士学位，并同时获得统计与数据科学硕士学位，另获牛津大学国际关系哲学硕士学位。本科毕业于北京外国语大学英语文学专业。我曾入选北京大学燕京学者项目，并曾任宾夕法尼亚大学 Perry World House 博士后研究员。',
    '我的研究方向涵盖比较政治经济学、国际政治经济学与中国政治，重点关注全球化、经济开放与地缘政治竞争如何重塑国家能力、财政制度、产业政策、企业行为及移民政策，尤其聚焦中国及其他新兴经济体。我采用定性与定量相结合的研究方法，通过原创数据收集、统计分析与田野调查开展研究。',
    '我当前的研究项目主要探讨全球化背景下的财政集权、税收能力与再分配机制，以及企业和国家如何应对贸易冲击、经济制裁与监管不确定性等问题。我的研究曾获得多项奖助支持，并在国际重要学术会议上报告。',
    '我讲授研究方法、政治经济学、国际关系与产业政策等课程，注重研究设计训练、批判性思维培养，以及理论分析与现实政策问题的结合。',
  ],
};

export const zhEducation: TimelineItem[] = [
  {
    date: '2025年5月',
    location: '耶鲁大学',
    title: '政治学博士',
    content: <p>研究领域：国际关系、政治经济学与比较政治。</p>,
  },
  {
    date: '2021年',
    location: '耶鲁大学',
    title: '统计与数据科学文学硕士',
    content: <p>统计与数据科学研究生学位。</p>,
  },
  {
    date: '2021年',
    location: '耶鲁大学',
    title: '政治学哲学硕士',
    content: <p>政治学研究生学位。</p>,
  },
  {
    date: '2018年',
    location: '牛津大学',
    title: '国际关系哲学硕士',
    content: <p>国际关系研究生学位。</p>,
  },
  {
    date: '2015-2016年',
    location: '北京大学',
    title: '燕京学者',
    content: <p>北京大学燕京学堂学者。</p>,
  },
  {
    date: '2015年',
    location: '北京外国语大学',
    title: '英语文学学士',
    content: <p>英语文学本科学位。</p>,
  },
];

export const zhExperience: TimelineItem[] = [
  {
    date: '2026年1月至今',
    location: '香港中文大学（深圳）',
    title: '助理教授',
    content: <p>人文社会科学学院全球与区域研究学科部。</p>,
  },
  {
    date: '2024年8月-2026年1月',
    location: '宾夕法尼亚大学',
    title: '研究员',
    content: <p>Perry World House.</p>,
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
  headerText: '联系我',
  description: '欢迎就政治经济学、贸易与中国政治研究进行学术交流与合作。',
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
      text: '中国广东省深圳市龙岗区龙翔大道2001号，综合教学楼B栋11层',
      href: 'https://www.amap.com/search?query=深圳市龙岗区龙翔大道2001号',
    },
    {
      type: ContactType.Phone,
      text: '+86 134 3062 1063',
      href: 'tel:+8613430621063',
    },
    {
      type: ContactType.Github,
      text: 'Robin-Wang621',
      href: 'https://github.com/Robin-Wang621',
    },
  ],
};
