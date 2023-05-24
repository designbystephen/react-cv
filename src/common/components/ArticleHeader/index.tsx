import React from 'react';
// import { createUseStyles } from 'react-jss';

type ArticleHeaderProps = {
  text: string;
};

/* 
const useStyles = createUseStyles({
});
*/

export default React.memo<ArticleHeaderProps>(({ text }) => <h3>{text}</h3>);
