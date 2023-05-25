import React from 'react';
import { createUseStyles } from 'react-jss';

type AvatarProps = {
  image: string;
};

const useStyles = createUseStyles({
  avatar: {
    '& > img': {
      borderRadius: '50%',
      height: '150px',
      objectFit: 'cover',
      overflow: 'hidden',
      width: '150px',
    },
  },
});

function Avatar({ image }: AvatarProps) {
  const classes = useStyles();

  return (
    <div className={classes.avatar}>
      <img src={image} alt="Stephen Roth" />
    </div>
  );
}

export default React.memo(Avatar);
