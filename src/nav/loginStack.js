import { StackNavigator } from 'react-navigation';

import commonColors from '../assets/commonColors';

import ForgottenPasswordScreen from './forgottenPasswordScreen';
import LoginScreen from './loginScreen';
import SignupScreen from './signupScreen';

// login stack
const LoginStack = StackNavigator({
  loginScreen: { screen: LoginScreen },
  signupScreen: { screen: SignupScreen },
  forgottenPasswordScreen: { screen: ForgottenPasswordScreen, navigationOptions: { title: 'Forgot Password' } }
}, {
  headerMode: 'float',
  navigationOptions: {
    headerStyle: {backgroundColor: commonColors.alertColor },
    title: 'You are not logged in',
    headerTintColor: 'white'
  }
})

export default LoginStack;
