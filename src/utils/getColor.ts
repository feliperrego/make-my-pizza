import colors from '@ui/theme/colors';

export default (currentColor: string, defaultColor = '#ffffff'): string => {
  let color;

  try {
    const themeColor = colors[currentColor];

    if (!themeColor && !currentColor) {
      color = defaultColor;
    } else {
      color = themeColor || currentColor;
    }
  } catch (e) {
    const themeColor = colors[currentColor];
    const defaultThemeColor = colors[defaultColor];
    color = themeColor || defaultThemeColor || defaultColor;
  }

  return color;
};
