import React from 'react';
import { createUseStyles } from 'react-jss';

type AvatarProps = {
  image: string,
}

const useStyles = createUseStyles({
  avatar: {
    '& > img': {
      borderRadius: '50%',
      height: '150px',
      objectFit: 'cover',
      overflow: 'hidden',
      width: '150px',
    }
  }
});

export const Avatar = React.memo<AvatarProps>(({
  image
}) => { 
  const classes = useStyles();

  return (
  <div className={classes.avatar}>
    <img src={image} alt="Stephen Roth" />
  </div>
)})
