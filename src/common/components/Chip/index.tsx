import React from 'react';
import { createUseStyles } from 'react-jss';

export type ChipProps = {
  icon: string | React.ReactNode;
  text: string;
  url?: string;
};

const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      gap: '6px',
      alignItems: 'center',
    },

    icon: {
      '& > svg': {
        width: '16px',
        height: '16px',
      },
    },

    text: {
      padding: '4px 0',
    },
  },
  { name: 'Chip' }
);

function Chip({ icon, text, url }: ChipProps) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.icon}>{icon}</div>
      <div className={classes.text}>
        {url ? <a href={url}>{text}</a> : text}
      </div>
    </div>
  );
}

export default React.memo(Chip);
