import React from 'react';

type DetailHeaderProps = {
  text: string,
}

export const DetailHeader = React.memo<DetailHeaderProps>(({ text }) => (
  <h3>
    {text}
  </h3>
));
