export enum Breakpoints {
  xs = 0,
  sm = 600,
  md = 960,
  lg = 1280,
  xl = 1920,
};

export enum Block {
  filled = 'filled',
  outlined = 'outlined'
};

export enum Size {
  small,
  medium,
  large,
};

export enum Device {
  phone,
  tablet,
  desktop
}

export enum DeviceSize {
  phone = Breakpoints.sm,
  tablet = Breakpoints.md,
  desktop = Breakpoints.lg,
}

export default {
  defaults: {
    fontSize: 14,
    fontFamily: "'Rubik', sans-serif",
    spacing:  24,
  },

  print: {
    fontSize: 12,
  },

  breakpoints: {
    ...Breakpoints,
  },

  layout: {
    fixedWidthCenterContainer: {
      maxWidth: Breakpoints.md,
    },
  },

  colors: {
    grey50: '#FAFAFA',
    grey100: '#F5F5F5',
    grey200: '#EEEEEE',
    grey300: '#E0E0E0',
    grey400: '#BDBDBD',
    grey500: '#9E9E9E',
    grey600: '#757575',
    grey700: '#616161',
    grey800: '#424242',
    grey900: '#212121',

    bluegrey50: '#ECEFF1',
    bluegrey100: '#CFD8DC',
    bluegrey200: '#B0BEC5',
    bluegrey300: '#90A4AE',
    bluegrey400: '#78909C',
    bluegrey500: '#607D8B',
    bluegrey600: '#546E7A',
    bluegrey700: '#455A64',
    bluegrey800: '#37474F',
    bluegrey900: '#263238',
  },

  variants: {
    block: {...Block},
    size: {...Size} as typeof Size,
  },

  devices: Device,
};
