import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import AcademicSections from '../components/Sections/AcademicSections';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {zhAboutData, zhHeroData, zhHomePageMeta} from '../data/zhData';

const ChineseHome: FC = memo(() => {
  const {title, description} = zhHomePageMeta;

  return (
    <Page description={description} locale="zh" title={title}>
      <Header locale="zh" />
      <main id="main-content">
        <Hero data={zhHeroData} locale="zh" />
        <About data={zhAboutData} heading="个人简介" />
        <AcademicSections locale="zh" />
        <Resume locale="zh" />
        <Contact locale="zh" />
      </main>
      <Footer locale="zh" />
    </Page>
  );
});

ChineseHome.displayName = 'ChineseHome';
export default ChineseHome;
