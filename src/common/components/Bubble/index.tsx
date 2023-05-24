import React from 'react';

type BubbleProps = {
  text: string,
}

export const Bubble = React.memo<BubbleProps>(({
  text
}) => (
  <div>
    {text}
  </div>
))
