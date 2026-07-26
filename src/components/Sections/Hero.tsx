import {ChevronDownIcon} from '@heroicons/react/24/outline';
import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {heroData, SectionId} from '../../data/data';
import {Hero as HeroData} from '../../data/dataDef';
import Section from '../Layout/Section';
import Socials from '../Socials';

const Hero: FC<{data?: HeroData; locale?: 'en' | 'zh'}> = memo(({data = heroData, locale = 'en'}) => {
  const {profileImageSrc, name, description, actions} = data;

  return (
    <Section noPadding sectionId={SectionId.Hero}>
      <div className="relative flex min-h-[90vh] w-full items-center justify-center bg-neutral-950 px-4 py-24">
        <div className="mx-auto w-full max-w-screen-md">
          <div className="flex flex-col items-center gap-y-7 text-center">
            {profileImageSrc && (
              <Image
                alt={`${name}-profile`}
                className="h-[180px] w-36 rounded-md object-cover object-top sm:h-[220px] sm:w-44"
                placeholder="blur"
                priority
                src={profileImageSrc}
              />
            )}
            <h1 className="text-4xl font-semibold text-white sm:text-5xl lg:text-6xl">{name}</h1>
            <div className="max-w-2xl space-y-3">{description}</div>
            <div className="flex gap-x-4 text-neutral-300">
              <Socials />
            </div>
            <div className="flex w-full flex-wrap justify-center gap-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-md border px-5 py-2.5 text-sm font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 sm:text-base',
                    primary
                      ? 'border-white bg-white text-neutral-950 hover:bg-neutral-200'
                      : 'border-neutral-600 bg-transparent text-white hover:border-white',
                  )}
                  href={href}
                  key={text}>
                  {text}
                  {Icon && <Icon className="h-5 w-5 sm:h-6 sm:w-6" />}
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute inset-x-0 bottom-6 flex justify-center">
          <a
            className="p-1 text-neutral-300 focus:outline-none focus:ring-2 focus:ring-white sm:p-2"
            href={`${locale === 'zh' ? '/zh/' : '/'}#${SectionId.About}`}>
            <ChevronDownIcon className="h-5 w-5 bg-transparent sm:h-6 sm:w-6" />
          </a>
        </div>
      </div>
    </Section>
  );
});

Hero.displayName = 'Hero';
export default Hero;
