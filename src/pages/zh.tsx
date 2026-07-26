import dynamic from 'next/dynamic';
import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import AcademicSections from '../components/Sections/AcademicSections';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {zhAboutData, zhHeroData, zhHomePageMeta} from '../data/zhData';

// eslint-disable-next-line react-memo/require-memo
const Header = dynamic(() => import('../components/Sections/Header'), {ssr: false});

const ChineseHome: FC = memo(() => {
  const {title, description} = zhHomePageMeta;

  return (
    <Page description={description} locale="zh" title={title}>
      <Header locale="zh" />
      <Hero data={zhHeroData} locale="zh" />
      <About data={zhAboutData} heading="个人简介" />
      <AcademicSections locale="zh" />
      <Resume locale="zh" />
      <Contact locale="zh" />
      <Footer locale="zh" />
    </Page>
  );
});

ChineseHome.displayName = 'ChineseHome';
export default ChineseHome;
