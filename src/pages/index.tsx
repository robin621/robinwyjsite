import {FC, memo} from 'react';

import Page from '../components/Layout/Page';
import About from '../components/Sections/About';
import AcademicSections from '../components/Sections/AcademicSections';
import Contact from '../components/Sections/Contact';
import Footer from '../components/Sections/Footer';
import Header from '../components/Sections/Header';
import Hero from '../components/Sections/Hero';
import Resume from '../components/Sections/Resume';
import {homePageMeta} from '../data/data';

const Home: FC = memo(() => {
  const {title, description} = homePageMeta;
  return (
    <Page description={description} locale="en" title={title}>
      <Header locale="en" />
      <main id="main-content">
        <Hero />
        <About />
        <AcademicSections />
        <Resume />
        <Contact />
      </main>
      <Footer />
    </Page>
  );
});

export default Home;
