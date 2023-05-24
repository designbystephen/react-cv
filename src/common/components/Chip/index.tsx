import React from 'react';
import { createUseStyles } from 'react-jss';

type ChipProps = {
  icon: string | React.ReactNode,
  text: string,
  link?: string,
};

const useStyles = createUseStyles({
  chip: {
    display: 'flex',
    gap: '6px',
  },

  icon: {
    width: '16px',
    height: '16px',
  },

  text: {
    flexGrow: 1,
  },
});

export const Chip = React.memo<ChipProps>(({
  icon,
  text,
}) => { 
  const classes = useStyles();

  return (
    <div className={classes.chip}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>{text}</div>
    </div>
  );
});
