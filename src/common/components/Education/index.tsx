import React from 'react';
import { ChipProps } from '../Chip';
import Award from '../../icons/Award';
import GradCap from '../../icons/GradCap';
import Blurb from '../Blurb';

export type EducationProps = {
  institution: string;
  certification: string | string[];
  certifiedOn: string;
};

function Education({
  institution,
  certifiedOn,
  certification,
}: EducationProps) {
  const chips: ChipProps[] = [
    { icon: <GradCap />, text: institution },
    { icon: <Award />, text: certifiedOn },
  ];

  const list: string[] = Array.isArray(certification)
    ? certification
    : [certification];

  return <Blurb list={list} chips={chips} />;
}

export default React.memo(Education);
