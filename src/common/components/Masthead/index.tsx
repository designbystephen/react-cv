import React from 'react';
import { createUseStyles } from 'react-jss';
import Avatar from '../Avatar';
import Chip from '../Chip';
import PageHeader from '../PageHeader';
import PageSubHeader from '../PageSubHeader';
import At from '../../icons/At';
import Code from '../../icons/Code';
import LocationDot from '../../icons/LocationDot';
import LinkedIn from '../../icons/LinkedIn';
import Globe from '../../icons/Globe';
import Reflex from '../Reflex';

export type MastheadProps = {
  name: string;
  tagline: string;
  avatar: string;
  website?: { name: string; url: string };
  email?: string;
  profile?: { name: string; url: string };
  code?: { name: string; url: string };
  location?: string;
};

const useStyles = createUseStyles(
  {
    root: {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      columnGap: '24px',
    },

    links: {
      display: 'flex',
      columnGap: '12px',
      rowGap: '6px',
      flexWrap: 'wrap',

      '& > *': {
        flexBasis: '250px',
      },
    },
  },
  { name: 'Masthead' }
);

function Masthead({
  name,
  tagline,
  avatar,
  website,
  profile,
  email,
  code,
  location,
}: MastheadProps) {
  const classes = useStyles();

  return (
    <header className={classes.root}>
      <div>
        <PageHeader text={name} />
        <PageSubHeader text={tagline} />

        <Reflex className={classes.links} device="phone">
          {Boolean(website) && (
            <Chip icon={<Globe />} text={website!.name} url={website!.url} />
          )}

          {Boolean(email) && (
            <Chip icon={<At />} text={email!} url={`mailto:${email!}`} />
          )}

          {Boolean(profile) && (
            <Chip icon={<LinkedIn />} text={profile!.name} url={profile!.url} />
          )}

          {Boolean(code) && (
            <Chip icon={<Code />} text={code!.name} url={code!.url} />
          )}

          {Boolean(location) && (
            <Chip icon={<LocationDot />} text={location!} />
          )}
        </Reflex>
      </div>

      <Avatar image={avatar} />
    </header>
  );
}

export default React.memo(Masthead);
