import React from 'react';
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';
import Slideshow from 'react-native-slideshow';

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


class StartTutorial extends Reac.Component{
    constructor(props){
        super(props);
        this.state = {
          dataSource: dataSource,
          position: 1
        };
    }

    render(){
        return(
            <View>
                <View>
                    <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })} />
                </View>
                <View>
                    {
                        this.state.position == this.state.dataSource.length &&
                    <TouchableHighlight onPress={() => this.props.navigation.navigate('home')} >
                        <Text>Got it!</Text>
                    </TouchableHighlight>
                    }
                </View>
            </View>
        );
    }

}
