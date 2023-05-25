import React from 'react';
import { createUseStyles } from 'react-jss';

type ArticleHeaderProps = {
  text: string;
};

const useStyles = createUseStyles(
  {
    root: {
      padding: '6px 0',
    },
  },
  { name: 'ArticleHeader' }
);

function ArticleHeader({ text }: ArticleHeaderProps) {
  const classes = useStyles();

  return <h3 className={classes.root}>{text}</h3>;
}

export default React.memo(ArticleHeader);
