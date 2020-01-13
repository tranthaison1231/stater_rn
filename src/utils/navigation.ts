import { NavigationActions } from 'react-navigation';

const config = {};

export const setNavigator = (nav): void => {
  if (nav) {
    config.navigator = nav;
  }
};
export const navigate = (routeName, params): void => {
  if (config.navigator && routeName) {
    const action = NavigationActions.navigate({ routeName, params });
    config.navigator.dispatch(action);
  }
};
export const goBack = (): void => {
  if (config.navigator) {
    const action = NavigationActions.back({});
    config.navigator.dispatch(action);
  }
};
