import React from 'react';
import { createUseStyles } from 'react-jss';

type ChipProps = {
  icon: string,
  text: string,
  link?: string,
};

const useStyles = createUseStyles({
  icon: {
    
  },

  text: {

  },
});

export const Chip = React.memo<ChipProps>(({
  icon,
  text,
}) => (
  <div>
    <div className=""></div>
    <div></div>
  </div>
));
