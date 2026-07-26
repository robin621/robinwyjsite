import {Dialog, Transition} from '@headlessui/react';
import {Bars3BottomRightIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Link from 'next/link';
import {FC, Fragment, memo, useCallback, useMemo, useState} from 'react';

import {SectionId} from '../../data/data';
import {useNavObserver} from '../../hooks/useNavObserver';

export const headerID = 'headerNav';

type Locale = 'en' | 'zh';

const navLabels: Record<Locale, Record<SectionId, string>> = {
  en: {
    [SectionId.About]: 'About',
    [SectionId.Contact]: 'Contact',
    [SectionId.Data]: 'Data',
    [SectionId.Hero]: 'Home',
    [SectionId.Portfolio]: 'Portfolio',
    [SectionId.Research]: 'Research',
    [SectionId.Resume]: 'Resume',
    [SectionId.Skills]: 'Skills',
    [SectionId.Stats]: 'Stats',
    [SectionId.Teaching]: 'Teaching',
    [SectionId.Testimonials]: 'Testimonials',
  },
  zh: {
    [SectionId.About]: '简介',
    [SectionId.Contact]: '联系',
    [SectionId.Data]: '数据',
    [SectionId.Hero]: '首页',
    [SectionId.Portfolio]: '项目',
    [SectionId.Research]: '研究',
    [SectionId.Resume]: '履历',
    [SectionId.Skills]: '技能',
    [SectionId.Stats]: '统计',
    [SectionId.Teaching]: '教学',
    [SectionId.Testimonials]: '推荐',
  },
};

const Header: FC<{locale?: Locale}> = memo(({locale = 'en'}) => {
  const [currentSection, setCurrentSection] = useState<SectionId | null>(null);
  const navSections = useMemo(
    () => [SectionId.About, SectionId.Research, SectionId.Teaching, SectionId.Data, SectionId.Contact],
    [],
  );

  const intersectionHandler = useCallback((section: SectionId | null) => {
    section && setCurrentSection(section);
  }, []);

  useNavObserver(navSections.map(section => `#${section}`).join(','), intersectionHandler);

  return (
    <>
      <MobileNav currentSection={currentSection} locale={locale} navSections={navSections} />
      <DesktopNav currentSection={currentSection} locale={locale} navSections={navSections} />
    </>
  );
});

const DesktopNav: FC<{navSections: SectionId[]; currentSection: SectionId | null; locale: Locale}> = memo(
  ({navSections, currentSection, locale}) => {
    const baseClass =
      'border-b border-transparent px-1 py-2 text-sm font-medium first-letter:uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
    const activeClass = classNames(baseClass, 'border-white text-white');
    const inactiveClass = classNames(baseClass, 'text-neutral-400 hover:text-white');
    return (
      <header
        className="fixed top-0 z-50 hidden w-full border-b border-neutral-800 bg-neutral-950/95 px-4 py-3 backdrop-blur sm:block"
        id={headerID}>
        <nav className="flex justify-center gap-x-8">
          {navSections.map(section => (
            <NavItem
              activeClass={activeClass}
              current={section === currentSection}
              inactiveClass={inactiveClass}
              key={section}
              label={navLabels[locale][section]}
              locale={locale}
              section={section}
            />
          ))}
          <LanguageSwitch locale={locale} />
        </nav>
      </header>
    );
  },
);

const MobileNav: FC<{navSections: SectionId[]; currentSection: SectionId | null; locale: Locale}> = memo(
  ({navSections, currentSection, locale}) => {
    const [isOpen, setIsOpen] = useState<boolean>(false);

    const toggleOpen = useCallback(() => {
      setIsOpen(!isOpen);
    }, [isOpen]);

    const baseClass =
      'border-b border-neutral-800 px-2 py-3 first-letter:uppercase transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-white';
    const activeClass = classNames(baseClass, 'font-semibold text-white');
    const inactiveClass = classNames(baseClass, 'font-medium text-neutral-400');
    return (
      <>
        <button
          aria-label="Menu Button"
          className="fixed right-3 top-3 z-40 rounded-md border border-neutral-700 bg-neutral-950 p-2 text-white focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-neutral-950 sm:hidden"
          onClick={toggleOpen}>
          <Bars3BottomRightIcon className="h-7 w-7" />
          <span className="sr-only">Open sidebar</span>
        </button>
        <Transition.Root as={Fragment} show={isOpen}>
          <Dialog as="div" className="fixed inset-0 z-40 flex sm:hidden" onClose={toggleOpen}>
            <Transition.Child
              as={Fragment}
              enter="transition-opacity ease-linear duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="transition-opacity ease-linear duration-300"
              leaveFrom="opacity-100"
              leaveTo="opacity-0">
              <Dialog.Overlay className="fixed inset-0 bg-neutral-950/50" />
            </Transition.Child>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full">
              <div className="relative w-4/5 max-w-xs border-r border-neutral-800 bg-neutral-950">
                <nav className="mt-16 flex flex-col px-5">
                  {navSections.map(section => (
                    <NavItem
                      activeClass={activeClass}
                      current={section === currentSection}
                      inactiveClass={inactiveClass}
                      key={section}
                      label={navLabels[locale][section]}
                      locale={locale}
                      onClick={toggleOpen}
                      section={section}
                    />
                  ))}
                  <LanguageSwitch locale={locale} onClick={toggleOpen} />
                </nav>
              </div>
            </Transition.Child>
          </Dialog>
        </Transition.Root>
      </>
    );
  },
);

const NavItem: FC<{
  section: string;
  current: boolean;
  activeClass: string;
  inactiveClass: string;
  label: string;
  locale: Locale;
  onClick?: () => void;
}> = memo(({section, current, inactiveClass, activeClass, label, locale, onClick}) => {
  return (
    <Link
      className={classNames(current ? activeClass : inactiveClass)}
      href={`${locale === 'zh' ? '/zh/' : '/'}#${section}`}
      key={section}
      onClick={onClick}>
      {label}
    </Link>
  );
});

const LanguageSwitch: FC<{locale: Locale; onClick?: () => void}> = memo(({locale, onClick}) => (
  <Link
    aria-label={locale === 'zh' ? 'Switch to English' : '切换至中文'}
    className="border-l border-neutral-700 pl-6 text-sm font-semibold text-white hover:text-neutral-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-white"
    href={locale === 'zh' ? '/' : '/zh/'}
    onClick={onClick}>
    {locale === 'zh' ? 'EN' : '中文'}
  </Link>
));

Header.displayName = 'Header';
LanguageSwitch.displayName = 'LanguageSwitch';
export default Header;
