import React from 'react';

type ListProps = {
  items: string[];
}

export const List = React.memo<ListProps>(({
  items
}) => (
  <ul>
    {items.map(item => (
      <li>{item}</li>
    ))}
  </ul>
));

