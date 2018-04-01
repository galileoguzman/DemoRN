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

import Header from '../nav/header';
import MoreInformation from './moreInformation';
import StartTutorial from './startTutorial';
let defaultUser = {
  email: 'some@email.com',
  fullname: 'Sandra Williams'
}

let items = [
  {key: 1, title: 'Title 1', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 2, title: 'Title 2', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 3, title: 'Title 3', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 4, title: 'Title 4', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 5, title: 'Title 5', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'}
]
let dataSource: [
  {
    title: 'Title 1',
    caption: 'Caption 1',
    url: 'http://placeimg.com/640/480/any',
  }, {
    title: 'Title 2',
    caption: 'Caption 2',
    url: 'http://placeimg.com/640/480/any',
  }, {
    title: 'Title 3',
    caption: 'Caption 3',
    url: 'http://placeimg.com/640/480/any',
  },
]

class Home extends React.Component{
  static navigationOptions =({navigation}) => {
    return {
      headerTitle: 'Item List',
      // we can pass an icon for the drawer item here
      drawerIcon: <Icon name="home" size={28} color={commonColors.accentColor}  />
    }
    }
    constructor(props){
        super(props);
        console.log('props in Home ', props)
        //let navigationParams =  this.props.navigation.state.params || {};
        //let user = navigationParams.user || defaultUser;
        let screenProps =  this.props.screenProps || {};
        let user = screenProps.user || defaultUser;
        this.state = {
          user,
          items,
          dataSource: dataSource,
          position: 1
        };
    }

    _renderItem = ( { item } ) => {
      return(
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate('moreInformation', { item: item })}>
            <View style={styles.itemContainer}>
              <Text style={{ color: commonColors.textColor }} > {item.title} </Text>
              <Text style={{ color: commonColors.textColor }}> {item.description} </Text>
            </View>
        </TouchableOpacity>

      );
    }

    render(){
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <Header menuButton={true} title={navigationOptions.headerTitle} navigation={this.props.navigation}  />
          <Text>Item List screen</Text>
            <Slideshow
                    dataSource={this.state.dataSource}
                    position={this.state.position}
                    onPositionChanged={position => this.setState({ position })} />
            <FlatList  keyExtractor={(item) => item.key} horizontal
            data={this.state.items} renderItem={this._renderItem}  />

        </View>
    )
  }

}


// Home stack
const HomeStack = StackNavigator({
  home: { screen: Home},
  tutorial: { screen: StartTutorial}
  moreInformation: { screen: MoreInformation },
}, {
  initialRouteName: 'home',
  title: 'Home',
  headerTitle: 'Home',
  headerMode: 'none'
})


const styles = StyleSheet.create({
    button:{

    },
    textButton: {
      fontWeight: 'bold',
      fontSize: 14
    },
    itemContainer: {
      paddingVertical: 4,
      paddingHorizontal: 10,
      borderBottomColor: commonColors.borderColor,
      borderBottomWidth: 4
    }
});

export default HomeStack;
