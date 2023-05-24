import React from 'react';

type HeaderProps = {
  text: string,
}

export const Header = React.memo<HeaderProps>(({
  text
}) => (
  <h1>
    {text}
  </h1>
));
