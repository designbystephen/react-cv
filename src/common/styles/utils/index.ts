import { Device, DeviceSize } from '../theme';

export const getMediaQueryRange = (from: number, to?:number) => (
  to 
  ? `@media (min-width: ${from + 1}px) and (max-width: ${to}px)`
  : `@media (max-width: ${from}px)`
);

export const getMediaQueryForDevice = (device: keyof typeof Device) => {
  switch (device) {
    case 'tablet':
      return getMediaQueryRange(DeviceSize.tablet)
    case 'desktop':
      return getMediaQueryRange(DeviceSize.desktop)
    default:
      return getMediaQueryRange(DeviceSize.phone)
  }
};

export const getPrintMediaStyles = (styles: React.CSSProperties | {[key: string]: React.CSSProperties} = {}) => ({
  '@media print': {
    ...styles,

    // NOTE: JSS says this is an invalid rule
    // '@-moz-document url-prefix()': {
    //   ...styles,
    // }
  }
});

export const createMediaStyles = ({ phone, tablet, desktop, print }: {
  phone?: React.CSSProperties,
  tablet?: React.CSSProperties,
  desktop?: React.CSSProperties,
  print?: React.CSSProperties,
} = {}) => ({
  phone: {
    [getMediaQueryForDevice('phone')]: {
      ...phone,
    }
  },

  tablet: {
    [getMediaQueryForDevice('tablet')]: {
      ...tablet,
    }
  },

  desktop: {
    [getMediaQueryForDevice('desktop')]: {
      ...desktop,
    }
  },

  print: getPrintMediaStyles(print),
});
