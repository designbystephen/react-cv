import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../../styles/theme';

export type BubbleProps = {
  text: string,
  variant?: keyof typeof theme.variants.block,
  size?: keyof typeof theme.variants.size
};

const useStyles = createUseStyles({
  bubble: {
    display: 'inline-block',
    borderRadius: '6px',
    backgroundColor: theme.colors.grey200,
    padding: '3px 6px',
    border: 'none',
  },

  outlined: {
    backgroundColor: 'transparent',
    border: '1px solid',
    borderColor: theme.colors.grey600,

    '@media print': {
      backgroundColor: theme.colors.grey200,
      border: 'none',
      fontSize: '.80em',
    }
  },

  filled: {},

  small: {
    fontSize: '.80em',
  },

  medium: {},
  large: {},
});

function Bubble({
  text,
  variant = 'filled',
  size = 'medium',
}: BubbleProps) {
  const classes = useStyles();

  const classNames = [
    classes.bubble,
    classes[variant],
    classes[size],
  ].join(' ');

  return <div className={classNames}>{text}</div>;
}

export default React.memo(Bubble);
