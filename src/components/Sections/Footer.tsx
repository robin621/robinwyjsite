import {ChevronUpIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {SectionId} from '../../data/data';
import Socials from '../Socials';

const Footer: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => (
  <div className="relative border-t border-neutral-800 bg-black px-4 pb-6 pt-12 sm:px-8 sm:pb-8 sm:pt-14">
    <div className="absolute inset-x-0 -top-4 flex justify-center sm:-top-6">
      <a
        className="rounded-md border border-neutral-300 bg-white p-1 text-neutral-950 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-neutral-950 sm:p-2"
        href={`${locale === 'zh' ? '/zh/' : '/'}#${SectionId.Hero}`}>
        <ChevronUpIcon className="h-6 w-6 bg-transparent sm:h-8 sm:w-8" />
      </a>
    </div>
    <div className="flex flex-col items-center gap-y-6">
      <div className="flex gap-x-4 text-neutral-300">
        <Socials />
      </div>
      <span className="text-sm text-neutral-400">&copy; 2026 Yajie &quot;Robin&quot; Wang</span>
      <blockquote className="max-w-xl pt-4 text-center text-xs italic leading-5 text-neutral-400">
        {locale === 'zh'
          ? '“不正确的事，不要去做；不真实的话，不要去说。”'
          : '“If it is not right, do not do it; if it is not true, do not say it.”'}
        <cite className="mt-1 block not-italic text-neutral-500">
          {locale === 'zh' ? '马可·奥勒留' : 'Marcus Aurelius'}
        </cite>
      </blockquote>
    </div>
  </div>
));

Footer.displayName = 'Footer';
export default Footer;
