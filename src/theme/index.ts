import theme from 'utils/styled-theme';

export const getBackgroundButton = theme('mode', {
  light: {
    primary: 'yellow',
  },
  dark: {
    primary: 'red',
  },
});

export const getPalette = theme('mode', {
  light: {
    primary: 'yellow',
  },
  dark: {
    primary: 'red',
  },
});

export const getFontSize = theme('textZoom', {
  normal: '10px',
  magnify: '12px',
});

export const getFontFamily = theme('font', {
  serif: 'Georgia, Times, "Times New Roman", serif',
});
