// As code style, import first from react, react-native, react-navigation
// then import from npm libraries
// then import customColors and customStyles from assets
// then import from custom components in alphabetical order

import React from 'react';
import {
    Image,
    FlatList,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

const items = [
  {key: 1, title: 'Title 1', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 2, title: 'Title 2', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 3, title: 'Title 3', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 4, title: 'Title 4', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 5, title: 'Title 5', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 6, title: 'Title 6', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 7, title: 'Title 7', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 8, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 9, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 10, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 11, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 12, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 13, title: 'Title 8', description: 'Some kind of info here', url: 'http://placeimg.com/640/480/any'},
  {key: 14 },
  {key: 15 },
]

export default class MoreInformation extends React.Component{
  static navigationOptions =({navigation}) => {

    return {
      headerTitle: 'More Information'
    }
    }

    constructor(props){
        super(props);

        this.state = {
          items: items
        };
    }

    _renderItemForGrid = ({item}) => {
        return(
            <View style={styles.itemInGrid}>
                {item.title && <Image source={require('../assets/any2.jpg')} resizeMode='cover' style={{height: 200, width: 200}} /> }
                <View style={styles.overlayCaptions}>
                    <Text style={{ color: commonColors.accentColor, fontWeight: 'bold' }} >{item.title}</Text>
                    <Text style={{ color: commonColors.accentColor }}>{item.description}</Text>
                </View>
            </View>
        )
    }

    render(){
      let item = this.state.item;
      let navigationOptions = this.constructor.navigationOptions(this.props);
      return (
        <View style={commonStyles.container}>
            <FlatList  keyExtractor={(item) => item.key}
            data={this.state.items} renderItem={this._renderItemForGrid}
            horizontal={false} numColumns={3}
            style={styles.gridStyle}  contentContainerStyle={styles.gridContent}  />
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
  gridStyle: {
      flexDirection:'column',
  },
  gridContent: {
      alignItems: 'flex-end',
      flexDirection: 'row',
      flexWrap: 'wrap'
  },
  itemInGrid:{
      borderWidth: 1,
      borderColor: commonColors.borderColor,
      borderStyle: 'solid',
      borderRadius: 4,
      margin: 4,
      height: 200,
      width: '30%'
  },
  overlayCaptions: {
      backgroundColor: commonColors.placeholderColor,
      opacity: 0.5,
      position: 'absolute',
      bottom: 0,
      left: 0,
      paddingHorizontal: 5,
      width: '100%'

   }
});
