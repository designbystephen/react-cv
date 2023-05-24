import React from 'react';
// import { createUseStyles } from 'react-jss';

type ListProps = {
  items: string[];
};

/* 
const useStyles = createUseStyles({
});
*/

export default React.memo<ListProps>(({ items }) => (
  <ul>
    {items.map((item) => (
      <li>{item}</li>
    ))}
  </ul>
));
