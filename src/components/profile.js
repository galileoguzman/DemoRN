import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

import Header from '../nav/header';

export default class Profile extends React.Component{
  static navigationOptions =({navigation}) => {
    return {
      headerTitle: 'Profile',
      drawerLabel: 'Profile',
      // we can pass an icon for the drawer item here
      drawerIcon: <Icon name="home" size={28} color={commonColors.accentColor}  />
    }
    }

    constructor(props){
        super(props);
        let screenProps =  this.props.screenProps || {};
        let user = screenProps.user;
        this.state = {
          user
        };
    }

    tryLogout = (params) => {
      if(true){
        return this.props.navigation.navigate('loginStack', { user: {} });
      }
      return false;
    }

    render(){
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header menuButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <Text>Profile screen</Text>
            <TouchableOpacity
              style={[commonStyles.button, styles.loginButton]}
              onPress={this.tryLogout}>
                <Text style={styles.textButton}>Logout</Text>
            </TouchableOpacity>
        </View>
    )
  }

}


const styles = StyleSheet.create({
    button:{

    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 14
    }
});
