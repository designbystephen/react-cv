import { createUseStyles } from 'react-jss';
import { createMediaStyles } from '../../styles/utils';

const useStyles = createUseStyles({
  reflex: {
    display: 'flex',
  },

  ...(createMediaStyles({
    desktop: {
      display: 'block',
    },

    tablet: {
      display: 'block',
    },

    phone: {
      display: 'block'
    },

    print: {
      display: 'block',
    }
  })),
});

export default useStyles;

