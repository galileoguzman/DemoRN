// As code style, import first from react, react-native, react-navigation
// then import from npm libraries
// then import customColors and customStyles from assets
// then import from custom components in alphabetical order

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

export default class Details extends React.Component{
  static navigationOptions =({navigation}) => {
    let title =  navigation.state.params.item.title || 'Details';
    return {
      headerTitle: title
    }
    }

    constructor(props){
        super(props);
        let item  = this.props.navigation.state.params.item || {};
        this.state = {
          item: item
        };
    }

    render(){
      let item = this.state.item;
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header backButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <View style={{flex: 1.5}}>
              <Image source={require('../assets/any2.jpg')} resizeMode='cover' style={{ width: '100%', height: '100%'}}/>
          </View>
          <View style={{flex: 2}}>
              <Text>{item.description}</Text>
          </View>
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
