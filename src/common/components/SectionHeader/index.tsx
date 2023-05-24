import React from 'react';
// import { createUseStyles } from 'react-jss';

type SectionHeaderProps = {
  text: string;
};

/* 
const useStyles = createUseStyles({
});
*/

export default React.memo<SectionHeaderProps>(({ text }) => <h2>{text}</h2>);
