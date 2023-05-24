import React from 'react';
import { createUseStyles } from 'react-jss';

type PageHeaderProps = {
  text: string,
}

const useStyles = createUseStyles({
});

export const PageHeader = React.memo<PageHeaderProps>(({
  text
}) => (
  <h1>
    {text}
  </h1>
));
