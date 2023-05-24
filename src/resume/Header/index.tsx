import React from 'react';
import { createUseStyles } from 'react-jss';
import Avatar from '../../common/components/Avatar';
import Chip from '../../common/components/Chip';
import PageHeader from '../../common/components/PageHeader';
import PageSubHeader from '../../common/components/PageSubHeader';
import At from '../../common/icons/At';
import Code from '../../common/icons/Code';
import LinkIcon from '../../common/icons/Link';
import LocationDot from '../../common/icons/LocationDot';

type HeaderProps = {
  name: string;
  tagline: string;
  avatar: string;
  website: string;
  email: string;
  git: string;
  location: string;
};

const useStyles = createUseStyles({
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    gap: '24px',
  },

  links: {
    display: 'flex',
    gap: '12px',
    flexWrap: 'wrap',

    '& > *': {
      flexBasis: 'calc(50% - 12px)',
    },
  },
});

export default React.memo<HeaderProps>(
  ({ name, tagline, avatar, website, email, git, location }) => {
    const classes = useStyles();

    return (
      <header className={classes.header}>
        <div>
          <PageHeader text={name} />
          <PageSubHeader text={tagline} />

          <div className={classes.links}>
            <Chip icon={<LinkIcon />} text={website} />
            <Chip icon={<At />} text={email} />
            <Chip icon={<Code />} text={git} />
            <Chip icon={<LocationDot />} text={location} />
          </div>
        </div>

        <Avatar image={avatar} />
      </header>
    );
  }
);
