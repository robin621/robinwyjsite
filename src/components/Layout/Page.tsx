import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta & {locale?: 'en' | 'zh'}>> = memo(
  ({
    children,
    title,
    description,
    locale = 'en',
    ogImageUrl = '/social-card.jpg',
    twitterCardType = 'summary_large_image',
  }) => {
    const {asPath} = useRouter();
    const pathname = asPath.split(/[?#]/)[0];
    const normalizedPath = pathname === '/' ? '/' : `${pathname.replace(/\/$/, '')}/`;
    const pageUrl = `https://robin-yajiewang.com${normalizedPath}`;
    const imageUrl = `https://robin-yajiewang.com${ogImageUrl}`;
    const structuredData = {
      '@context': 'https://schema.org',
      '@type': 'Person',
      name: locale === 'zh' ? '王亚杰' : 'Yajie Wang',
      alternateName: locale === 'zh' ? 'Yajie Robin Wang' : 'Robin Yajie Wang',
      url: pageUrl,
      image: imageUrl,
      jobTitle: locale === 'zh' ? '国际政治经济学助理教授' : 'Assistant Professor of International Political Economy',
      description,
      sameAs: ['https://github.com/robin621'],
      worksFor: {
        '@type': 'CollegeOrUniversity',
        name: 'The Chinese University of Hong Kong, Shenzhen',
        url: 'https://www.cuhk.edu.cn/en',
      },
      alumniOf: [
        {'@type': 'CollegeOrUniversity', name: 'Yale University'},
        {'@type': 'CollegeOrUniversity', name: 'University of Oxford'},
      ],
      knowsAbout: [
        'International political economy',
        'Comparative political economy',
        'Chinese politics',
        'Industrial policy',
      ],
    };

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
          <meta content="index,follow,max-image-preview:large" name="robots" />
          <meta content="#0a0a0a" name="theme-color" />
          <meta content={locale === 'zh' ? 'zh_CN' : 'en_US'} property="og:locale" />

          <link href={pageUrl} key="canonical" rel="canonical" />
          <link href="https://robin-yajiewang.com/" hrefLang="en" rel="alternate" />
          <link href="https://robin-yajiewang.com/zh/" hrefLang="zh-CN" rel="alternate" />
          <link href="https://robin-yajiewang.com/" hrefLang="x-default" rel="alternate" />

          <link href="/favicon.ico" rel="icon" sizes="any" />
          <link href="/icon.svg" rel="icon" type="image/svg+xml" />
          <link href="/apple-touch-icon.png" rel="apple-touch-icon" />
          <link href="/site.webmanifest" rel="manifest" />

          {/* Open Graph : https://ogp.me/ */}
          <meta content={title} property="og:title" />
          <meta content={description} property="og:description" />
          <meta content={imageUrl} property="og:image" />
          <meta content="1200" property="og:image:width" />
          <meta content="630" property="og:image:height" />
          <meta
            content={locale === 'zh' ? '王亚杰个人学术网站' : 'Robin Yajie Wang academic website'}
            property="og:image:alt"
          />
          <meta content="Robin Yajie Wang" property="og:site_name" />
          <meta content="profile" property="og:type" />
          <meta content={pageUrl} property="og:url" />

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={twitterCardType} name="twitter:card" />
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
          <meta content={imageUrl} name="twitter:image" />
          <meta
            content={locale === 'zh' ? '王亚杰个人学术网站' : 'Robin Yajie Wang academic website'}
            name="twitter:image:alt"
          />
          <script dangerouslySetInnerHTML={{__html: JSON.stringify(structuredData)}} type="application/ld+json" />
        </Head>
        <a
          className="fixed left-4 top-4 z-[60] -translate-y-24 rounded-md bg-blue-300 px-4 py-2 font-semibold text-neutral-950 transition-transform focus:translate-y-0 focus:outline-none focus:ring-2 focus:ring-white"
          href="#main-content">
          {locale === 'zh' ? '跳至主要内容' : 'Skip to main content'}
        </a>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
