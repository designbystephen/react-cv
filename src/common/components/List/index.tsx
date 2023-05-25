import React from 'react';
import { createUseStyles } from 'react-jss';

type ListProps = {
  items: string[];
};

const useStyles = createUseStyles(
  {
    root: {
      listStyle: 'outside',
      marginLeft: '18px',
      padding: '6px 0',
    },
  },
  { name: 'List' }
);

function List({ items }: ListProps) {
  const classes = useStyles();

  return (
    <ul className={classes.root}>
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  );
}

export default React.memo(List);
