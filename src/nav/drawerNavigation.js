import React  from 'react';
import { DrawerNavigator, DrawerItems } from 'react-navigation';
import {
    View,
    Image,
    StyleSheet,
    Text,
    TouchableHighlight
} from 'react-native';

import Favorites from '../components/favorites';
import Home from '../components/home';
import Purchases from '../components/purchases';
import Profile from '../components/profile';
import WishList from '../components/wishes';


import OpenAnUrl from '../helpers/HelperUrl';

import commonColors from '../assets/commonColors';


const styles = StyleSheet.create({
    drawerContent: {
        flex: 1,
        backgroundColor: 'white'
    },

    imageContainer: {
        flexDirection:'column',
        alignItems: 'center',
        alignContent: 'center',
        justifyContent:'center',
        backgroundColor: 'transparent',
        margin: 0,
        paddingTop: 15,
        paddingBottom: 10,
        borderBottomWidth: 2,
        borderBottomColor: '#d8d8d8'
    },
    secondaryOptions: {
        marginTop: 30,
        paddingVertical: 15,
        borderTopWidth: 1,
        borderTopColor: "#d8d8d8"
    },
    menuItemText: {
        margin:0,
        paddingVertical: 10,
        paddingHorizontal: 10,
        paddingLeft: 15,
        color: commonColors.headerButtonsColor
    },
    itemContainer: {
        flex: 1,
        backgroundColor: commonColors.primaryColor,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.8,
        shadowRadius: 2,
        margin: 0,
        padding: 0
    }

});


const doTermsAndConditions =  function() {
  let url = 'http://54.193.96.75/#about';
  OpenAnUrl(url);
}


const customDrawerContentComponent = (props) => (
  <View style={styles.drawerContent}>
    <View style={styles.imageContainer}>
        <Image source={require('../assets/logoMedium.png')} style={styles.authLogo}/>
    </View>
    <View style={styles.itemContainer} >
        <DrawerItems {...props} />
        <View style={styles.secondaryOptions}>
            <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'}  onPress={ doTermsAndConditions.bind(this) }  >
                <Text style={styles.menuItemText}> Terms and conditions </Text>
            </TouchableHighlight>
            <TouchableHighlight underlayColor={'rgba(0,0,0,0.2)'}  onPress={ doTermsAndConditions.bind(this) }  >
                <Text style={styles.menuItemText}> Privacy Policy </Text>
            </TouchableHighlight>
        </View>
    </View>
  </View>
);

const drawerNavigatorConfig = {
  contentComponent: customDrawerContentComponent,
  initialRouteName: 'CategoryScreen',
  drawerOpenRoute: 'DrawerOpen',
  drawerCloseRoute: 'DrawerClose',
  drawerToggleRoute: 'DrawerToggle',
  contentOptions: {
      activeTintColor: commonColors.headerButtonsColor,
      activeBackgroundColor: commonColors.accentColor,
      inactiveTintColor: commonColors.headerButtonsColor,
      inactiveBackgroundColor: 'transparent',
      style: {
          margin: 0,
          padding: 0,
      }
  }
}



const CustomDrawerNavigator = DrawerNavigator({
  Home: { screen: Home, navigationOptions: {
    headerTitle: 'Home',
    drawerLabel: 'Home',
  } },
  Purchases: { screen: Purchases },
  Favorites: { screen: Favorites },
  Wishes: { screen: WishList },
  Profile: { screen: Profile },

}, drawerNavigatorConfig)




export default CustomDrawerNavigator;
