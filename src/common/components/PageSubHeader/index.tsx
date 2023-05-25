import React from 'react';
import { createUseStyles } from 'react-jss';

type PageSubHeaderProps = {
  text: string;
};

const useStyles = createUseStyles(
  {
    root: {
      margin: '0 0 12px 0',
      padding: 0,
      fontWeight: 'normal',
      fontStyle: 'italic',
    },
  },
  { name: 'PageSubHeader' }
);

function PageSubHeader({ text }: PageSubHeaderProps) {
  const classes = useStyles();

  return <h4 className={classes.root}>{text}</h4>;
}

export default React.memo(PageSubHeader);
