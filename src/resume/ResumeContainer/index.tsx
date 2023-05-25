import React from 'react';
import Resume from '../../common/components/Resume';
import data from '../__fixtures__/candidate';

function ResumeContainer() {
  const { candidate, ...rest } = data;

  return <Resume {...candidate} {...rest} />;
}

export default ResumeContainer;
