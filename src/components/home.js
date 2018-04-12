// As code style, import first from react, react-native, react-navigation
// then import from npm libraries
// then import customColors and customStyles from assets
// then import from custom components in alphabetical order

import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';
import Slideshow from 'react-native-slideshow';
import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';


import Tabs from './tabs';
import Details from './details';

// MainView stack
const HomeStack = StackNavigator({
  home: {screen: Tabs},
  details: { screen: Details}
}, {
  initialRouteName: 'home',
  title: 'MainView',
  headerTitle: 'MainView',
  headerMode: 'none'
})

export default HomeStack;
