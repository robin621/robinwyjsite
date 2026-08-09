import {FC, memo} from 'react';

import {socialLinks} from '../data/data';

const Socials: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => {
  return (
    <>
      {socialLinks.map(({label, Icon, href}) => (
        <a
          aria-label={locale === 'zh' ? `${label} 个人主页` : `${label} profile`}
          className="-m-1.5 rounded-md p-1.5 transition-colors hover:text-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-300 sm:-m-3 sm:p-3"
          href={href}
          key={label}
          rel="noreferrer"
          target="_blank">
          <Icon className="h-5 w-5 align-baseline sm:h-6 sm:w-6" />
        </a>
      ))}
    </>
  );
});

Socials.displayName = 'Socials';
export default Socials;
