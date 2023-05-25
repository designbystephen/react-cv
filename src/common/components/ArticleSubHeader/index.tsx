import React from 'react';
import { createUseStyles } from 'react-jss';

type ArticleSubHeaderProps = {
  text: string;
};

const useStyles = createUseStyles(
  {
    root: {
      fontSize: '.9em',
      padding: '6px 0',
    },
  },
  { name: 'ArticleSubHeader ' }
);

function ArticleSubHeader({ text }: ArticleSubHeaderProps) {
  const classes = useStyles();

  return <h3 className={classes.root}>{text}</h3>;
}

export default React.memo(ArticleSubHeader);
