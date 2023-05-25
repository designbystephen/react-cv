import React from 'react';
import Briefcase from '../../icons/Briefcase';
import Calendar from '../../icons/Calendar';
import Blurb from '../Blurb';
import { ChipProps } from '../Chip';

export type ExperienceProps = {
  organization: string;
  title: string;
  startDate: string;
  endDate?: string;
  details: string[];
  tags?: string[];
};

function Experience({
  organization,
  title,
  details,
  startDate,
  endDate,
  tags,
}: ExperienceProps) {
  // make a date range that supports an undefined endDate
  const dateRange = endDate ? `${startDate} \u2014 ${endDate}` : startDate;

  const chips: ChipProps[] = [
    { icon: <Briefcase />, text: organization },
    { icon: <Calendar />, text: dateRange },
  ];

  return (
    <Blurb
      title={title}
      chips={chips}
      list={details}
      subtitle="Technologies Used"
      tags={tags}
    />
  );
}

export default React.memo(Experience);
