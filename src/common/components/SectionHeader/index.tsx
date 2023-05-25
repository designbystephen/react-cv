import React from 'react';
import { createUseStyles } from 'react-jss';
import colors from '../../../styles/colors';

type SectionHeaderProps = {
  text: string;
};

const useStyles = createUseStyles(
  {
    root: {
      borderBottom: `3px solid ${colors.grey700}`,
      marginBottom: `12px`,
      paddingBottom: `3px`,
    },
  },
  { name: 'SectionHeader' }
);

function SectionHeader({ text }: SectionHeaderProps) {
  const classes = useStyles();
  return <h2 className={classes.root}>{text}</h2>;
}

export default React.memo(SectionHeader);
