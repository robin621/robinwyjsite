import classNames from 'classnames';
import Image from 'next/image';
import {FC, memo} from 'react';

import {aboutData, SectionId} from '../../data/data';
import {About as AboutData} from '../../data/dataDef';
import Section from '../Layout/Section';

const About: FC<{data?: AboutData; heading?: string}> = memo(({data = aboutData, heading = 'About'}) => {
  const {profileImageSrc, description} = data;
  return (
    <Section className="border-y border-neutral-800 bg-black" sectionId={SectionId.About}>
      <div className={classNames('grid grid-cols-1 gap-y-8', {'md:grid-cols-4 md:gap-x-10': !!profileImageSrc})}>
        {!!profileImageSrc && (
          <div className="col-span-1 flex justify-center md:justify-start">
            <div className="relative h-44 w-44 overflow-hidden rounded-md md:h-56 md:w-56">
              <Image alt="about-me-image" className="h-full w-full object-cover object-top" src={profileImageSrc} />
            </div>
          </div>
        )}
        <div className={classNames('col-span-1 flex flex-col gap-y-6', {'md:col-span-3': !!profileImageSrc})}>
          <div className="flex flex-col gap-y-2">
            <h2 className="text-3xl font-semibold text-white">{heading}</h2>
            <div className="space-y-4">
              {description.map(paragraph => (
                <p className="prose prose-sm text-justify leading-7 text-neutral-300 sm:prose-base" key={paragraph}>
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
});

About.displayName = 'About';
export default About;
