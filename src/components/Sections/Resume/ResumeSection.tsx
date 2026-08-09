import {FC, memo, PropsWithChildren} from 'react';

const ResumeSection: FC<PropsWithChildren<{title: string}>> = memo(({title, children}) => {
  return (
    <div className="grid grid-cols-1 gap-y-5 py-10 first:pt-0 last:pb-0 md:grid-cols-4 md:gap-x-10">
      <div className="col-span-1 flex justify-center md:justify-start">
        <h3 className="h-fit border-b border-blue-300 pb-1 text-lg font-semibold uppercase tracking-wide text-white">
          {title}
        </h3>
      </div>
      <div className="col-span-1 flex flex-col md:col-span-3">{children}</div>
    </div>
  );
});

ResumeSection.displayName = 'ResumeSection';
export default ResumeSection;
