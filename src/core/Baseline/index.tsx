import React from 'react';
import { createUseStyles } from 'react-jss';
import colors from '../../styles/colors';
import vars from '../../styles/vars';
import '../../styles/baseline/index.css';

const bodyStyles = {
  fontFamily: vars.defaultFontFamily,
  fontSize: vars.defaultFontSize,
  maxWidth: vars.maxBodyWidth,
  margin: '0 auto',
  color: colors.grey800,
  padding: vars.defaultSpacing,
};

const bodyStylesTablet = {
  padding: `${vars.defaultSpacing/2}px`,
};

const bodyStylesPhone = {
  padding: `${vars.defaultSpacing/4}px`,
}

const bodyStylesPrint = {
  width: 'auto',
  maxWidth: 'unset',
  padding: 0,
  margin: 0,
  fontSize: `${vars.printFontSize}px`,
}

const useStyles = createUseStyles({
  '@global': {
    html: bodyStyles,
    body: bodyStyles,

    '@media screen and (max-width: 576px)': {
      html: bodyStylesPhone,
      body: bodyStylesPhone,
    },

    '@media screen and (max-width: 768px)': {
      html: bodyStylesTablet,
      body: bodyStylesTablet,
    },
    
    '@media print': {
      html: bodyStylesPrint,
      body: bodyStylesPrint,
    }
  },
});

function Baseline() {
  useStyles();

  return null;
}

export default React.memo(Baseline);
