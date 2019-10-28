function getThemeValue(name, props, values): any {
  const value = props.theme && props.theme[name];
  let themeValue;

  if (typeof value === 'function') {
    themeValue = value(values);
  } else {
    themeValue = values[value];
  }
  return themeValue;
}

function theme(name, values) {
  return function(props): any {
    return getThemeValue(name, props, values);
  };
}

export default theme;

// git: https://github.com/styled-components/styled-theming
