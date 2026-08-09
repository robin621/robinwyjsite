import {FC, memo} from 'react';

import {TimelineItem} from '../../../data/dataDef';

const TimelineItem: FC<{item: TimelineItem}> = memo(({item}) => {
  const {title, date, location, content} = item;
  return (
    <div className="flex flex-col border-b border-neutral-800 py-7 text-center first:pt-0 last:border-0 last:pb-0 md:text-left">
      <div className="flex flex-col pb-3">
        <h4 className="text-xl font-semibold text-white">{title}</h4>
        <div className="flex items-center justify-center gap-x-2 md:justify-start">
          <span className="flex-1 text-sm font-medium italic sm:flex-none">{location}</span>
          <span aria-hidden="true" className="text-blue-300">
            •
          </span>
          <span className="flex-1 text-sm sm:flex-none">{date}</span>
        </div>
      </div>
      <div className="leading-7 text-neutral-300">{content}</div>
    </div>
  );
});

TimelineItem.displayName = 'TimelineItem';
export default TimelineItem;
