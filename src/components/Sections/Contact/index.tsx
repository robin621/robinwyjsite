import {ArrowUpRightIcon, EnvelopeIcon, MapPinIcon, PhoneIcon} from '@heroicons/react/24/outline';
import {FC, memo} from 'react';

import {contact, SectionId} from '../../../data/data';
import {ContactType, ContactValue} from '../../../data/dataDef';
import {zhContact} from '../../../data/zhData';
import GithubIcon from '../../Icon/GithubIcon';
import LinkedInIcon from '../../Icon/LinkedInIcon';
import Section from '../../Layout/Section';

const ContactValueMap: Record<ContactType, ContactValue> = {
  [ContactType.Email]: {Icon: EnvelopeIcon, srLabel: 'Email'},
  [ContactType.Phone]: {Icon: PhoneIcon, srLabel: 'Phone'},
  [ContactType.Location]: {Icon: MapPinIcon, srLabel: 'Location'},
  [ContactType.LinkedIn]: {Icon: LinkedInIcon, srLabel: 'LinkedIn'},
  [ContactType.Github]: {Icon: GithubIcon, srLabel: 'GitHub'},
};

const contactLabels: Record<'en' | 'zh', Record<ContactType, string>> = {
  en: {
    [ContactType.Email]: 'Email',
    [ContactType.Phone]: 'School direct line',
    [ContactType.Location]: 'Location',
    [ContactType.LinkedIn]: 'LinkedIn',
    [ContactType.Github]: 'GitHub',
  },
  zh: {
    [ContactType.Email]: '邮箱',
    [ContactType.Phone]: '学校直线电话',
    [ContactType.Location]: '所在地',
    [ContactType.LinkedIn]: 'LinkedIn',
    [ContactType.Github]: 'GitHub',
  },
};

const Contact: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => {
  const {headerText, description, items} = locale === 'zh' ? zhContact : contact;
  const isZh = locale === 'zh';

  return (
    <Section className="border-t border-neutral-800 bg-neutral-950" sectionId={SectionId.Contact}>
      <div className="grid gap-10 md:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] md:gap-16">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
            {isZh ? '联系' : 'Contact'}
          </p>
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">{headerText}</h2>
          <p className="mt-5 max-w-xl text-base leading-7 text-neutral-300 sm:text-lg">{description}</p>
          <a
            className="mt-8 inline-flex items-center gap-2 rounded-md bg-blue-300 px-5 py-3 font-semibold text-neutral-950 transition-colors hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-blue-200 focus:ring-offset-2 focus:ring-offset-neutral-950"
            href="mailto:yajiewang@cuhk.edu.cn?subject=Website%20inquiry">
            <EnvelopeIcon aria-hidden="true" className="h-5 w-5" />
            {isZh ? '撰写邮件' : 'Write an email'}
          </a>
          <p className="mt-3 text-sm text-neutral-500">
            {isZh ? '将使用您的默认邮件应用打开新邮件。' : 'Opens a new message in your default email app.'}
          </p>
        </div>

        <dl className="divide-y divide-neutral-800 rounded-xl border border-neutral-800 bg-black/40 px-5 sm:px-6">
          {items.map(({type, text, href}) => {
            const {Icon, srLabel} = ContactValueMap[type];
            const label = contactLabels[locale][type];
            const external = href.startsWith('http');

            return (
              <div className="py-5" key={`${srLabel}-${text}`}>
                <dt className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-neutral-500">{label}</dt>
                <dd>
                  <a
                    className="group flex items-start gap-3 text-neutral-200 transition-colors hover:text-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
                    href={href}
                    rel={external ? 'noreferrer' : undefined}
                    target={external ? '_blank' : undefined}>
                    <Icon aria-hidden="true" className="mt-0.5 h-5 w-5 flex-shrink-0 text-blue-300" />
                    <span className="min-w-0 flex-1 break-words">{text}</span>
                    {external && (
                      <ArrowUpRightIcon
                        aria-hidden="true"
                        className="h-4 w-4 flex-shrink-0 text-neutral-600 transition-colors group-hover:text-blue-300"
                      />
                    )}
                  </a>
                </dd>
              </div>
            );
          })}
        </dl>
      </div>
    </Section>
  );
});

Contact.displayName = 'Contact';
export default Contact;
