import React from 'react';
import { Device } from '../../styles/theme';
import useStyles from './styles';

type ReflexProps = {
  children: React.ReactNode,
  className?: string,
  device: keyof typeof Device,
  print?: boolean,
};

function Reflex({children, className = '', device = 'phone', print }: ReflexProps) {
  const classes = useStyles();

  const classNames = React.useMemo(() => [
      classes.reflex,
      print ?? classes.print,
      classes[device],
      className,
  ].filter(Boolean).join(' '), [classes, print, className, device]);

  return (
    <div className={classNames}>
      {children}
    </div>
  )
}

export default Reflex;

