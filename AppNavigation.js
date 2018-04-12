import { StackNavigator } from 'react-navigation';
import LoginStack from './src/nav/loginStack';
import DrawerStack from './src/nav/drawerStack';
import StartTutorial from './src/components/startTutorial';

// Manifest of possible screens
const PrimaryNav = StackNavigator({
  loginStack: { screen: LoginStack },
  tutorial: { screen: StartTutorial},
  drawerStack: { screen: DrawerStack }
}, {
  // Default config for all screens
  headerMode: 'none',
  title: 'MobileAppDemo',
  initialRouteName: 'loginStack'
});

export default PrimaryNav;
