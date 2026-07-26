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
    <Section className="border-y border-neutral-800 bg-neutral-900" sectionId={SectionId.Resume}>
      <div className="flex flex-col divide-y divide-neutral-700">
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
          <ul className="space-y-3">
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
    <h3 className="font-bold text-white">{label}</h3>
    <p className="mt-1 leading-7 text-neutral-300">{text}</p>
  </div>
));

Detail.displayName = 'Detail';
Resume.displayName = 'Resume';
export default Resume;
