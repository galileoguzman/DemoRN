// As code style, import first from react, react-native, react-navigation
// then import from npm libraries
// then import customColors and customStyles from assets
// then import from custom components in alphabetical order

import { AppRegistry } from 'react-native';
import AppNavigation from './AppNavigation';

AppRegistry.registerComponent('MobileAppDemo', () => AppNavigation);
