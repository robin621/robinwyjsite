import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Section from '../Layout/Section';

type AcademicItem = {
  title: string;
  description: string;
  abstract?: string;
  coauthors?: {name: string; href: string}[];
  links?: {label: string; href: string}[];
};

const dissertationItems: AcademicItem[] = [
  {
    title: 'The Fiscal Politics of Economic Openness in Contemporary China',
    description: '',
  },
];

const workingPapers: AcademicItem[] = [
  {
    title:
      'Embedded Fiscal Centralization: How Economic Openness Increased Fiscal Capacity and Redistribution in Contemporary China',
    description: 'CPS Revise & Resubmit',
    abstract:
      'When can trade openness strengthen rather than erode fiscal capacity? I argue that openness builds central fiscal capacity when export opportunities create new firms under the jurisdiction of a centrally controlled tax bureaucracy, limiting local influence over enforcement. China’s World Trade Organization (WTO) accession provides a most-likely test: the 2002 enterprise income tax (EIT) reform placed new firms under central collection and gave the center a statutory revenue share. Using a city-level Bartik design that instruments export exposure with tariff-predicted export growth, I find that exposed cities registered more private firms, had more frontline tax bureaucrats in the central tax bureaucracy, and collected more centrally shared EIT. I also show that fiscal centralization enables selective compensation downstream: national revenue pooling leads to greater grants and fiscal dependence in cities where employment in state-owned enterprises (SOEs) declined more. These findings suggest that the fiscal effects of openness depend on how governments organize collection and pool revenue across places.',
    links: [{label: 'Paper (PDF)', href: '/Embedded_Fiscal_Centralization.pdf'}],
  },
  {
    title: 'Allocating Liberalization: Administrative Hierarchy and Tariff Relief in China',
    description: 'ISQ Revise & Resubmit',
    abstract:
      'Trade agreements commit governments to lower tariffs, but often leave discretion over how those reductions are allocated across products. This paper explains how administrative hierarchy shapes the product-level allocation of trade liberalization. I develop a theory of administrative representation: firms with authoritative bureaucratic sponsors are better positioned to turn product-specific demands into actionable requests for tariff relief. I examine China’s trade policymaking after its accession to the World Trade Organization (WTO) by linking firms’ pre-accession imports to subsequent tariff schedules and interim-duty lists and identifying each firm’s administrative affiliation status. Products with greater pre-accession import exposure to centrally affiliated firms faced lower applied tariff rates after WTO accession and were more likely to receive preferential interim-duty rates. Institutional records and policymaker interviews describe the proposed transmission process. Together, the distributional and process evidence is consistent with domestic administrative institutions shaping the product-level allocation of trade liberalization.',
    links: [{label: 'Paper (PDF)', href: '/Allocating_Liberalization.pdf'}],
  },
  {
    title: 'The Politics of Deglobalization: Trade Shocks and Divergent Local Government Responses in China',
    description: '',
  },
  {
    title:
      'Great-Power Competition and Public Support for High-Skilled Immigration: Evidence from the United States and China',
    description: '',
    coauthors: [{name: 'Jiahua Yue', href: 'https://yjh1222.github.io/'}],
    abstract:
      'High-skilled immigration is often treated as the least contested form of immigration. Yet this consensus may erode when elite rhetoric links foreign STEM workers to geopolitical rivalry and national-security risk. We argue that great-power competition affects immigration opinion on two distinct margins: the policy-scale margin, or support for expanding high-skilled admissions, and the applicant-selection margin, or preferences over which applicants should be admitted. We test this argument using parallel vignette and conjoint survey experiments in the United States and China (combined N > 6,000). The vignette experiment shows that threat framing lowers support for expanding high-skilled visa programs in both countries, while a competition-with-screening frame partially mitigates this decline by portraying foreign talent as a controllable strategic asset. The perceived channels differ across contexts: U.S. respondents react most strongly through national-security and technological-advantage concerns, whereas Chinese respondents react more through economic and labor-market concerns. The conjoint experiment shows that applicant selection is more stable. Across countries and framing conditions, respondents favor applicants with stronger host-country ties, higher expected income, and more favorable geopolitical alignment. These findings show that geopolitical rivalry does not simply close the door to skilled migration. Instead, it produces selective openness: citizens become more skeptical of expanding admissions overall while continuing to favor applicants who appear economically valuable, geopolitically aligned, and socially attached to the host country.',
  },
  {
    title: 'Better Safe than Sorry: Sanctions and Firm Overcompliance',
    description: '',
    coauthors: [{name: 'Eric Jeong', href: 'https://perryworldhouse.upenn.edu/fellows-and-affiliates/eric-jeong/'}],
    abstract:
      'Economic sanctions are a central instrument of economic statecraft, yet they can prompt firms to abandon trade that governments remain willing to permit. We develop a theory of precautionary overcompliance in which unequal access to credible political information shapes firms’ ability to infer the state’s enforcement resolve. When officials permit continued trade but their intentions remain uncertain, firms with weaker political standing may abandon activities beyond formal prohibitions. Better information can preserve commerce in this setting or encourage withdrawal when officials intend broader disengagement. We examine these implications using monthly Chinese customs records following North Korea’s 2006 nuclear test and subsequent UN sanctions. Comparing firms’ product-level exports to North Korea with exports to other destinations, we find that private firms withdraw more than state-owned enterprises (SOEs). This ownership gap persists after excluding products plausibly covered by formal sanctions and extends to food and humanitarian categories. Comparative cases of economic coercion involving China support the argument that clearer information about the government’s enforcement resolve can encourage SOEs to comply more fully with demands to withdraw from trade. Our argument explains how unequal political access within states shapes the international effects of economic statecraft.',
    links: [{label: 'Paper (PDF)', href: '/Better_Safe_than_Sorry.pdf'}],
  },
  {
    title: 'You Can Run But You Can’t Hide: How Firms Respond to Enhanced State Legibility in the Digital Age',
    description: '',
    coauthors: [{name: 'Xiaobo Lü', href: 'https://www.xiaobolu.com/'}],
  },
];

const workInProgress: AcademicItem[] = [
  {
    title: 'Industrial Policy by Forbearance: Environmental Enforcement Discretion in China',
    description: '',
    coauthors: [{name: 'Yixuan Wang', href: 'https://sites.google.com/view/wangyixuan/home?authuser=0'}],
  },
  {
    title: 'The Public Price of Talent',
    description: '',
    coauthors: [{name: 'Eric Jeong', href: 'https://perryworldhouse.upenn.edu/fellows-and-affiliates/eric-jeong/'}],
  },
  {
    title: 'The Unlikely Alliance: How Chinese Exporters Navigate Trade Tensions Through International Alliance',
    description: '',
  },
  {
    title: 'Managing Openness in Hard Times: Export Slowdown and Bureaucratic Enforcement in China',
    description: '',
  },
  {
    title: 'What Do We Talk About When We Talk About China',
    description: '',
  },
];

const teachingItems: AcademicItem[] = [
  {
    title: 'GLB5020 - Social Science Research Methods',
    description: 'CUHK-Shenzhen, Spring and Fall 2026',
    links: [
      {label: 'Course page', href: 'https://www.cuhk.edu.cn/en/course/16138'},
      {label: 'Syllabus', href: '/GLB5020_Social_Science_Research_Methods_Syllabus_Spring_2026.pdf'},
    ],
  },
  {
    title: 'GLB5880 - Industrial Policy and Economic Development',
    description: 'CUHK-Shenzhen, Spring 2026',
    links: [
      {label: 'Course page', href: 'https://www.cuhk.edu.cn/en/course/17115'},
      {label: 'Syllabus', href: '/GLB5880_Industrial_Policy_and_Economic_Development_Syllabus_Spring_2026.pdf'},
    ],
  },
  {
    title: 'Yale University - Teaching Fellow',
    description:
      'Game Theory and Political Science (Spring 2024); Applied Quantitative Research Design (Fall 2023); Introduction to International Relations (Spring 2023, Spring 2021); The Rise of China (Fall 2022); Fundamentals of Statistical Inference (Fall 2020)',
  },
  {
    title: 'Beijing Foreign Studies University - Co-Instructor',
    description: 'Introduction to Research Methods (Spring 2022)',
  },
];

const dataItems: AcademicItem[] = [
  {
    title: 'gbcrosswalk',
    description:
      'R package for cleaning, building, and composing crosswalks between Chinese GB/T 4754 industry classification vintages, including 1986, 1994, 2002, 2011, and 2017.',
    links: [
      {label: 'CRAN', href: 'https://CRAN.R-project.org/package=gbcrosswalk'},
      {label: 'GitHub', href: 'https://github.com/robin621/gbcrosswalk'},
    ],
  },
];

const zhTeachingItems: AcademicItem[] = [
  {
    title: 'GLB5020 - 社会科学研究方法',
    description: '香港中文大学（深圳），2026年春季、秋季',
    links: [
      {label: '课程页面', href: 'https://www.cuhk.edu.cn/zh-hans/course/16138'},
      {label: '教学大纲', href: '/GLB5020_Social_Science_Research_Methods_Syllabus_Spring_2026.pdf'},
    ],
  },
  {
    title: 'GLB5880 - 产业政策与经济发展',
    description: '香港中文大学（深圳），2026年春季',
    links: [
      {label: '课程页面', href: 'https://www.cuhk.edu.cn/zh-hans/course/17115'},
      {label: '教学大纲', href: '/GLB5880_Industrial_Policy_and_Economic_Development_Syllabus_Spring_2026.pdf'},
    ],
  },
  {
    title: '耶鲁大学 — 助教',
    description:
      '博弈论与政治学（2024年春季）；应用定量研究设计（2023年秋季）；国际关系导论（2023年春季、2021年春季）；中国的崛起（2022年秋季）；统计推断基础（2020年秋季）',
  },
  {
    title: '北京外国语大学 — 合作授课教师',
    description: '研究方法导论（2022年春季）',
  },
];

const zhDataItems: AcademicItem[] = [
  {
    title: 'gbcrosswalk',
    description:
      '用于清理、构建和组合中国 GB/T 4754 行业分类跨年份对照表的 R 软件包，涵盖1986、1994、2002、2011和2017年版本。',
    links: [
      {label: 'CRAN', href: 'https://CRAN.R-project.org/package=gbcrosswalk'},
      {label: 'GitHub', href: 'https://github.com/robin621/gbcrosswalk'},
    ],
  },
];

const AcademicSections: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => {
  const isZh = locale === 'zh';
  const currentTeachingItems = isZh ? zhTeachingItems : teachingItems;
  const currentDataItems = isZh ? zhDataItems : dataItems;

  return (
    <>
      <Section className="bg-black" sectionId={SectionId.Research}>
        <SectionHeading description="" title={isZh ? '研究' : 'Research'} />
        <div className="space-y-12">
          <ResearchGroup items={dissertationItems} title={isZh ? '博士论文' : 'Dissertation'} />
          <ResearchGroup items={workingPapers} title={isZh ? '工作论文' : 'Working Papers'} />
          <ResearchGroup items={workInProgress} title={isZh ? '在研项目' : 'Work in Progress'} />
        </div>
      </Section>

      <Section className="border-y border-neutral-800 bg-neutral-950" sectionId={SectionId.Teaching}>
        <SectionHeading
          description={isZh ? '当前课程与过往教学经历。' : 'Current course offerings and previous teaching experience.'}
          title={isZh ? '教学' : 'Teaching'}
        />
        <div className="divide-y divide-neutral-700 border-y border-neutral-700">
          {currentTeachingItems.map(({title, description, links}) => (
            <article className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10" key={title}>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div>
                <p className="text-sm leading-6 text-neutral-300">{description}</p>
                {links && (
                  <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                    {links.map(link => (
                      <a
                        className="font-semibold text-blue-200 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-200"
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section className="bg-black" sectionId={SectionId.Data}>
        <SectionHeading
          description={
            isZh
              ? '服务于中国与国际贸易研究的数据及分类对照资源。'
              : 'Original datasets and concordance resources for research on China and international trade.'
          }
          title={isZh ? '数据' : 'Data'}
        />
        <div className="divide-y divide-neutral-700 border-y border-neutral-700">
          {currentDataItems.map(({title, description, links}) => (
            <article className="grid gap-2 py-6 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10" key={title}>
              <h3 className="text-lg font-semibold text-white">{title}</h3>
              <div>
                <p className="text-sm leading-6 text-neutral-300">{description}</p>
                {links && (
                  <div className="mt-3 flex gap-5 text-sm">
                    {links.map(link => (
                      <a
                        className="font-semibold text-blue-200 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-200"
                        href={link.href}
                        key={link.label}
                        rel="noreferrer"
                        target="_blank">
                        {link.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>
    </>
  );
});

const ResearchGroup: FC<{title: string; items: AcademicItem[]}> = memo(({title, items}) => (
  <div>
    <h3 className="mb-3 text-sm font-semibold uppercase tracking-[0.16em] text-blue-300">{title}</h3>
    <div className="divide-y divide-neutral-700 border-y border-neutral-700">
      {items.map(({title: itemTitle, description, abstract, coauthors, links}) => (
        <article
          className="grid gap-3 py-6 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] md:items-start md:gap-10"
          key={itemTitle}>
          <div>
            <h4 className="text-lg font-semibold text-white">{itemTitle}</h4>
            {coauthors && (
              <p className="mt-2 text-sm text-neutral-300">
                With{' '}
                {coauthors.map((coauthor, index) => (
                  <span key={coauthor.href}>
                    {index > 0 && ', '}
                    <a
                      className="font-semibold text-blue-200 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-200"
                      href={coauthor.href}
                      rel="noreferrer"
                      target="_blank">
                      {coauthor.name}
                    </a>
                  </span>
                ))}
              </p>
            )}
            {links && (
              <div className="mt-3 flex flex-wrap gap-x-5 gap-y-2 text-sm">
                {links.map(link => (
                  <a
                    className="font-semibold text-blue-200 underline decoration-blue-400/60 underline-offset-4 hover:text-blue-100 hover:decoration-blue-200"
                    href={link.href}
                    key={link.label}
                    rel="noreferrer"
                    target="_blank">
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          <div>
            {description && (
              <p className="w-fit rounded-full border border-neutral-700 bg-neutral-900 px-3 py-1 text-sm leading-5 text-neutral-300">
                {description}
              </p>
            )}
          </div>
          {abstract && (
            <details className="group rounded-md border border-neutral-700 bg-neutral-950 px-4 py-3 text-sm text-neutral-300 md:col-span-2">
              <summary className="cursor-pointer font-semibold text-blue-200 marker:text-blue-300 hover:text-blue-100">
                Abstract
              </summary>
              <p className="mt-3 leading-6">{abstract}</p>
            </details>
          )}
        </article>
      ))}
    </div>
  </div>
));

const SectionHeading: FC<{title: string; description: string}> = memo(({title, description}) => (
  <div className="mb-10 grid gap-3 md:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] md:gap-10">
    <h2 className="text-3xl font-semibold text-white sm:text-4xl">{title}</h2>
    {description && <p className="max-w-2xl leading-7 text-neutral-300">{description}</p>}
  </div>
));

AcademicSections.displayName = 'AcademicSections';
ResearchGroup.displayName = 'ResearchGroup';
SectionHeading.displayName = 'SectionHeading';

export default AcademicSections;
