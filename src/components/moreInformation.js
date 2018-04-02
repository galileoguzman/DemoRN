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

export default class MoreInformation extends React.Component{
  static navigationOptions =({navigation}) => {
    let title =  navigation.state.params.item.title;
    return {
      headerTitle: 'More Information'
    }
    }

    constructor(props){
        super(props);
        console.log('Props in Item details', props);
        this.state = {
          item: this.props.item || {}
        };
    }

    render(){
      let item = this.state.item;
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header backButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <Text>More info screen</Text>
          <Text>{item.description}</Text>
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
