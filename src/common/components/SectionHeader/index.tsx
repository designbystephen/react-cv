import React from 'react';

type SectionHeaderProps = {
  text: string,
}

export const SectionHeader = React.memo<SectionHeaderProps>(({
  text
}) => (
  <h2>
    {text}
  </h2>
));
