import React from 'react';
// import { createUseStyles } from 'react-jss';

type BubbleProps = {
  text: string;
};

/* 
const useStyles = createUseStyles({
});
*/

export default React.memo<BubbleProps>(({ text }) => <div>{text}</div>);
