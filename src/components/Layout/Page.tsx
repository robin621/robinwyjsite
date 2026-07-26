import {NextPage} from 'next';
import Head from 'next/head';
import {useRouter} from 'next/router';
import {memo, PropsWithChildren} from 'react';

import {HomepageMeta} from '../../data/dataDef';

const Page: NextPage<PropsWithChildren<HomepageMeta & {locale?: 'en' | 'zh'}>> = memo(
  ({children, title, description, locale = 'en'}) => {
    const {asPath} = useRouter();
    const pathname = asPath.split(/[?#]/)[0];
    const pageUrl = `https://robin-yajiewang.com${pathname}`;

    return (
      <>
        <Head>
          <title>{title}</title>
          <meta content={description} name="description" />
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
          <meta content={pageUrl} property="og:url" />

          {/* Twitter: https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/markup */}
          <meta content={title} name="twitter:title" />
          <meta content={description} name="twitter:description" />
        </Head>
        {children}
      </>
    );
  },
);

Page.displayName = 'Page';
export default Page;
