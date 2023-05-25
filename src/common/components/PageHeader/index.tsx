import React from 'react';
import { createUseStyles } from 'react-jss';

type PageHeaderProps = {
  text: string;
};

const useStyles = createUseStyles(
  {
    root: {
      margin: '0 0 12px 0',
      padding: 0,
    },
  },
  { name: 'PageHeader' }
);

function PageHeader({ text }: PageHeaderProps) {
  const classes = useStyles();

  return <h1 className={classes.root}>{text}</h1>;
}

export default React.memo(PageHeader);
