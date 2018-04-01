import React from 'react';
import {
    Image,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

import Header from '../nav/header';

export default class Wishes extends React.Component{
  static navigationOptions =({navigation}) => {
    return {
      headerTitle: 'Wish List',
      drawerLabel: 'Wish List',
      // we can pass an icon for the drawer item here
      drawerIcon: <Icon name="home" size={28} color={commonColors.accentColor}  />
    }
    }

    constructor(props){
        super(props);
        let navigationParams =  this.props.navigation.state.params;
        let user = navigationParams.user || defaultUser;
        this.state = {
          user
        };
    }

    render(){
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header menuButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <Text>Wish List screen</Text>
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
