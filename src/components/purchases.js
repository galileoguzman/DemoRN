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

export default class Purchase extends React.Component{
  static navigationOptions =({navigation}) => {
    return {
      headerTitle: 'Purchases',
      drawerLabel: 'Purchases',
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

    componentWillMount(){

    }

    render(){
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header menuButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <Text>Purchase screen</Text>
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
