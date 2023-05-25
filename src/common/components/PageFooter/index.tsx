import React from 'react';
import { createUseStyles } from 'react-jss';
import colors from '../../../styles/colors';

type PageFooterProps = {
  children: React.ReactNode;
};

const useStyles = createUseStyles(
  {
    root: {
      textAlign: 'center',
      padding: '12px 0',
      color: colors.grey600,

      '& > p': {
        margin: '6px 0',
      },
    },

    '@media print': {
      root: {
        display: 'none'
      }
    }
  },
  { name: 'PageFooter' }
);

function PageFooter({ children }: PageFooterProps) {
  const classes = useStyles();

  return <footer className={classes.root}>{children}</footer>;
}

export default React.memo(PageFooter);
