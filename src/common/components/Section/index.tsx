import React from 'react';
import { createUseStyles } from 'react-jss';
import SectionHeader from '../SectionHeader';

type SectionProps = {
  title: string;
  children: React.ReactNode;
};

const useStyles = createUseStyles(
  {
    root: {
      margin: '18px 0',
    },
  },
  { name: 'Section' }
);

function Section({ title, children }: SectionProps) {
  const classes = useStyles();

  return (
    <section className={classes.root}>
      <SectionHeader text={title} />
      {children}
    </section>
  );
}

export default React.memo(Section);
