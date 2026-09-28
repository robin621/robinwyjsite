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
      <div className="relative flex min-h-[88vh] w-full items-center justify-center overflow-hidden bg-black px-4 py-20 sm:py-24">
        <div className="mx-auto w-full max-w-screen-md">
          <div className="flex flex-col items-center gap-y-6 text-center">
            {profileImageSrc && (
              <Image
                alt={locale === 'zh' ? '王亚杰的职业肖像' : 'Professional portrait of Yajie Wang'}
                className="h-[168px] w-[136px] rounded-xl border border-neutral-700 object-cover object-top shadow-2xl shadow-black/50 sm:h-[208px] sm:w-[168px]"
                placeholder="blur"
                priority
                sizes="(min-width: 640px) 168px, 136px"
                src={profileImageSrc}
              />
            )}
            <div>
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.22em] text-blue-300 sm:text-sm">
                {locale === 'zh' ? '国际政治经济学' : 'International Political Economy'}
              </p>
              <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">{name}</h1>
            </div>
            <div className="max-w-2xl space-y-3">{description}</div>
            <div aria-label={locale === 'zh' ? '社交链接' : 'Social links'} className="flex gap-x-4 text-neutral-300">
              <Socials locale={locale} />
            </div>
            <div className="flex w-full flex-wrap justify-center gap-3">
              {actions.map(({href, text, primary, Icon}) => (
                <a
                  className={classNames(
                    'flex items-center gap-x-2 rounded-md border px-5 py-2.5 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-neutral-950 sm:text-base',
                    primary
                      ? 'border-blue-300 bg-blue-300 text-neutral-950 hover:bg-blue-200'
                      : 'border-neutral-600 bg-black/20 text-white hover:border-blue-300 hover:text-blue-200',
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
            aria-label={locale === 'zh' ? '向下滚动至个人简介' : 'Scroll to About section'}
            className="rounded-md p-1 text-neutral-400 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:p-2"
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
