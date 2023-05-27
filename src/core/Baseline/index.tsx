import React from 'react';
import { createUseStyles } from 'react-jss';
import theme from '../../common/styles/theme';
import '../../common/styles/baseline.css';
import { getMediaQueryForDevice, getPrintMediaStyles } from '../../common/styles/utils';

const bodyStyles = {
  backgroundColor: '#FFF',
  fontFamily: theme.defaults.fontFamily,
  fontSize: theme.defaults.fontSize,
  maxWidth: theme.layout.fixedWidthCenterContainer.maxWidth,
  margin: '0 auto',
  color: theme.colors.grey800,
  padding: theme.defaults.spacing,
};

const bodyStylesTablet = {
  padding: `${theme.defaults.spacing/2}px`,
};

const bodyStylesPhone = {
  padding: `${theme.defaults.spacing/4}px`,
}

const bodyStylesPrint = {
  width: 'auto',
  maxWidth: 'unset',
  padding: 0,
  margin: 0,
  fontSize: `${theme.print.fontSize}px`,
}

const useStyles = createUseStyles({
  '@global': {
    html: {
      ...bodyStyles,
    },

    body: {
      ...bodyStyles,
    },

    [getMediaQueryForDevice('phone')]: {
      html: {...bodyStylesPhone},
    },

    [getMediaQueryForDevice('tablet')]: {
      body: {...bodyStylesTablet}
    },

    ...getPrintMediaStyles({
      html: {...bodyStylesPrint },
      body: {...bodyStylesPrint },
    }),
  },
});

function Baseline() {
  useStyles();

  return null;
}

export default React.memo(Baseline);
