import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import HomeScreen from './Home';
import DetailsScreen from './Details';
import ImageScreen from './Image';
import CounterScreen from './Counter';
import ColorScreen from './Color';
import SquareScreen from './Square';
import TextScreen from './Text';
import BoxScreen from './Box';

const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: HomeScreen,
      navigationOptions: {
        title: 'Home',
      },
    },
    Details: DetailsScreen,
    Image: ImageScreen,
    Counter: CounterScreen,
    Color: ColorScreen,
    Square: SquareScreen,
    Text: TextScreen,
    Box: BoxScreen,
  },
  {
    initialRouteName: 'Home',
  },
);

export default createAppContainer(AppNavigator);
