import React from 'react';
import { createUseStyles } from 'react-jss';

type BubbleProps = {
  text: string,
}

const useStyles = createUseStyles({
});

export const Bubble = React.memo<BubbleProps>(({
  text
}) => (
  <div>
    {text}
  </div>
))
