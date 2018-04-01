import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import { StackNavigator } from 'react-navigation';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonColors from '../assets/commonColors';

import CustomDrawerNavigator from './drawerNavigation';

const DrawerStack = StackNavigator({
    DrawerStack: { screen: CustomDrawerNavigator }
  },
  {
    headerMode: 'none',
    navigationOptions: ({navigation}) => ({
      headerStyle: {backgroundColor: commonColors.primaryColor },
      gesturesEnabled: false
    }),

  });


export default DrawerStack;
