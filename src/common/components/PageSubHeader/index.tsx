import React from 'react';
import { createUseStyles } from 'react-jss';

type PageSubHeaderProps = {
  text: string,
}

const useStyles = createUseStyles({
});

export const PageSubHeader = React.memo<PageSubHeaderProps>(({
  text
}) => (
  <h4>
    {text}
  </h4>
));
