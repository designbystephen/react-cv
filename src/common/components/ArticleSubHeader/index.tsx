import React from 'react';
// import { createUseStyles } from 'react-jss';

type ArticleSubHeaderProps = {
  text: string;
};

/* 
const useStyles = createUseStyles({
});
*/

export default React.memo<ArticleSubHeaderProps>(({ text }) => <h3>{text}</h3>);
