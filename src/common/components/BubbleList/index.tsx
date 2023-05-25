import React from 'react';
import { createUseStyles } from 'react-jss';
import Bubble, { BubbleProps } from '../Bubble';

type BubbleListProps = Omit<BubbleProps, 'text'> & {
  items: string[];
};

const useStyles = createUseStyles(() => ({
  bubbleList: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '6px',
    listStyle: 'none',
  },
}));

function BubbleList({ items, ...rest }: BubbleListProps) {
  const classes = useStyles();

  return (
    <ul className={classes.bubbleList}>
      {items.map((item) => (
        <li key={item}>
          <Bubble text={item} {...rest} />
        </li>
      ))}
    </ul>
  );
}

export default React.memo(BubbleList);
