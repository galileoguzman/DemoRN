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
import Details from './details';
import StartTutorial from './startTutorial';

const items = [
  {key: 1, title: 'Title 1', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 2, title: 'Title 2', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 3, title: 'Title 3', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 4, title: 'Title 4', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 5, title: 'Title 5', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'}
]
const dataSource = [
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

class MainView extends React.Component{
  static navigationOptions =({navigation}) => {
    return {
      headerTitle: 'MainView',
      // we can pass an icon for the drawer item here
      drawerIcon: <Icon name="home" size={28} color={commonColors.accentColor}  />
    }
    }
    constructor(props){
        super(props);
        console.log('props in MainView ', props)
        //let navigationParams =  this.props.navigation.state.params || {};
        //let user = navigationParams.user || defaultUser;

        let user = this.props.user;
        this.state = {
          user,
          items,
          dataSource: dataSource,
          position: 1
        };
    }

    _renderImageWithCaption = ( { item } ) => {
      return(
        <TouchableOpacity
            style={styles.itemContainer}
          onPress={() => this.props.navigation.navigate('details', { item: item })}>
          <Image source={require('../assets/any2.jpg')} resizeMode='cover' style={{ width: 150}}/>
            <View style={styles.overlayCaptions}>
              <Text style={{ color: commonColors.accentColor, fontWeight: 'bold' }} >{item.title}</Text>
              <Text style={{ color: commonColors.accentColor }}>{item.description}</Text>
            </View>
        </TouchableOpacity>

      );
    }

    _renderItem = ( { item } ) => {
      return(
        <TouchableOpacity
            style={styles.itemContainer}
          onPress={() => this.props.navigation.navigate('details', { item: item })}>
            <Image source={require('../assets/any.jpg')} resizeMode='cover' style={{ width: 150}}/>
        </TouchableOpacity>

      );
    }

    render(){
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
          <View style={styles.homeContainer}>
              <View style={styles.slideshow}>
                <Slideshow
                        dataSource={this.state.dataSource}
                        position={this.state.position}
                        onPositionChanged={ (position) => this.setState({ position })}
                        containerStyle={{flex: 1, height: 'auto'}}
                        height={'100%'}
                        indicatorColor={commonColors.accentColor}
                        indicatorSelectedColor={commonColors.alertColor}
                         />
              </View>
              <View style={styles.middleList}>
                    <FlatList  keyExtractor={(item) => item.key} horizontal
                    data={this.state.items} renderItem={this._renderImageWithCaption}  />
              </View>
              <View style={styles.bottomList}>
                    <FlatList  keyExtractor={(item) => item.key} horizontal
                    data={this.state.items} renderItem={this._renderItem}  />
              </View>
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
    },
    itemContainer: {
      margin: 5,
      minWidth: 100,
      borderColor: commonColors.borderColor,
      borderRadius: 4,
      borderWidth: 1,
  },
  homeContainer: {
      flex: 1
  },
  slideshow:{
      flex: 2
  },
  middleList: {
      flex: 1,

  },
  bottomList: {
      flex: 1
  },
  overlayCaptions: {
      backgroundColor: commonColors.placeholderColor,
      opacity: 0.5,
      position: 'absolute',
      bottom: 0,
      width: 150,
      alignContent: 'center'

   }
});

export default MainView;
