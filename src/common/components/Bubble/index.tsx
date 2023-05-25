import React from 'react';
import { createUseStyles } from 'react-jss';
import colors from '../../../styles/colors';
import { SizeVariants, StyleVariants } from '../../../styles/variants';

export type BubbleProps = {
  text: string;
  variant?: `${StyleVariants}`;
  size?: `${SizeVariants}`;
};

const filledStyle = {
  border: 'none',
};

const outlinedStyle = {
  backgroundColor: 'transparent',
  border: '1px solid',
  borderColor: colors.grey600,
};

const smallStyle = {
  fontSize: '.80em',
};

const outlinedPrintStyle = {
  backgroundColor: colors.grey200,
  border: 'none',
  fontSize: '.80em',
}

const useStyles = createUseStyles({
  bubble: ({ variant, size }: Partial<BubbleProps>) => ({
    display: 'inline-block',
    borderRadius: '6px',
    backgroundColor: colors.grey200,
    padding: '3px 6px',

    ...(variant === StyleVariants.outlined ? outlinedStyle : filledStyle),

    ...(size === SizeVariants.small ? smallStyle : {}),
  }),

  '@media print': {
    bubble: ({ variant }: Partial<BubbleProps>) => ({
      ...(variant === StyleVariants.outlined ? outlinedPrintStyle: {}),
    })
  }
});

function Bubble({
  text,
  variant = StyleVariants.filled,
  size = SizeVariants.medium,
}: BubbleProps) {
  const classes = useStyles({ variant, size });

  return <div className={classes.bubble}>{text}</div>;
}

export default React.memo(Bubble);
