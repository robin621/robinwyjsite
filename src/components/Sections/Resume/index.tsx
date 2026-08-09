import {FC, memo} from 'react';

import {
  awards,
  conferencePresentations,
  education,
  experience,
  fieldworkExperience,
  languagesAndSkills,
  professionalService,
  SectionId,
} from '../../../data/data';
import {
  zhAwards,
  zhConferencePresentations,
  zhEducation,
  zhExperience,
  zhFieldworkExperience,
  zhLanguagesAndSkills,
  zhProfessionalService,
} from '../../../data/zhData';
import Section from '../../Layout/Section';
import ResumeSection from './ResumeSection';
import TimelineItem from './TimelineItem';

const Resume: FC<{locale?: 'en' | 'zh'}> = memo(({locale = 'en'}) => {
  const isZh = locale === 'zh';
  const currentExperience = isZh ? zhExperience : experience;
  const currentEducation = isZh ? zhEducation : education;
  const currentAwards = isZh ? zhAwards : awards;

  return (
    <Section className="border-y border-neutral-800 bg-neutral-950" sectionId={SectionId.Resume}>
      <div className="mb-12 max-w-2xl">
        <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-blue-300">
          {isZh ? '学术履历' : 'Curriculum vitae'}
        </p>
        <h2 className="text-3xl font-semibold text-white sm:text-4xl">
          {isZh ? '教育与任职经历' : 'Academic profile'}
        </h2>
      </div>
      <div className="flex flex-col divide-y divide-neutral-800">
        <ResumeSection title={isZh ? '任职经历' : 'Appointments'}>
          {currentExperience.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={isZh ? '教育背景' : 'Education'}>
          {currentEducation.map((item, index) => (
            <TimelineItem item={item} key={`${item.title}-${index}`} />
          ))}
        </ResumeSection>
        <ResumeSection title={isZh ? '奖项与资助' : 'Awards'}>
          <ul className="list-disc space-y-3 pl-5 marker:text-blue-300">
            {currentAwards.map(award => (
              <li className="text-neutral-300" key={award}>
                {award}
              </li>
            ))}
          </ul>
        </ResumeSection>
        <ResumeSection title={isZh ? '学术活动' : 'Professional'}>
          <div className="space-y-6">
            <Detail
              label={isZh ? '会议报告' : 'Conference Presentations'}
              text={isZh ? zhConferencePresentations : conferencePresentations}
            />
            <Detail
              label={isZh ? '学术服务' : 'Professional Service'}
              text={isZh ? zhProfessionalService : professionalService}
            />
            <Detail
              label={isZh ? '语言与技能' : 'Languages and Skills'}
              text={isZh ? zhLanguagesAndSkills : languagesAndSkills}
            />
            <Detail
              label={isZh ? '田野调查经历' : 'Fieldwork Experience'}
              text={isZh ? zhFieldworkExperience : fieldworkExperience}
            />
          </div>
        </ResumeSection>
      </div>
    </Section>
  );
});

const Detail: FC<{label: string; text: string}> = memo(({label, text}) => (
  <div>
    <h4 className="font-semibold text-white">{label}</h4>
    <p className="mt-1 leading-7 text-neutral-300">{text}</p>
  </div>
));

Detail.displayName = 'Detail';
Resume.displayName = 'Resume';
export default Resume;
