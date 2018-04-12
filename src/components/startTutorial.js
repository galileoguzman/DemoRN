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
import commonColors from '../assets/commonColors';
import { getUserTutorialRead, setUserReadTutorial } from '../helpers/asyncStorageUtilities';

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


export default class StartTutorial extends React.Component{
    constructor(props){
        super(props);
        let navigationParams =  this.props.navigation.state.params || {};

        let user = navigationParams.user || {};
        this.state = {
            user: user,
            dataSource: undefined,
            position: 0
        }
        let tutorialRead =  false;
        let info  = getUserTutorialRead();
        info.then((result) => {
            tutorialRead =  result;
            if(tutorialRead){
                this.props.navigation.navigate('drawerStack', { user: user });
            }
            return true;
        })


    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({dataSource: dataSource})
        }
            , 500);
    }


    completeTutorial = () => {
        setUserReadTutorial(this.state.user);
        this.props.navigation.navigate('drawerStack', { user: this.state.user })
    }

    render(){
        return(
            <View style={{flex: 1, backgroundColor: commonColors.primaryColor}}>
                {
                    this.state.dataSource &&
                    <View style={{flex: 1, backgroundColor: 'transparent'}}>
                        <Slideshow
                            dataSource={this.state.dataSource}
                            position={this.state.position}
                            onPositionChanged={position => this.setState({ position })}
                            containerStyle={{flex: 1}}
                            height={'100%'}
                            indicatorColor={commonColors.accentColor}
                            indicatorSelectedColor={commonColors.alertColor}
                            scrollEnabled={false}
                            arrowSize={20}
                            />
                        <View style={styles.gotItButtonContainer}>
                            {
                                this.state.position == (this.state.dataSource.length - 1) &&
                                <TouchableOpacity style={styles.gotItButton} onPress={this.completeTutorial} >
                                    <Text style={{color: commonColors.accentColor }}>Got it!</Text>
                                </TouchableOpacity>
                            }
                        </View>
                    </View>
                }

            </View>
        );
    }

}



const styles = StyleSheet.create({
    gotItButtonContainer: {
        backgroundColor: commonColors.alertColor,
        position: 'absolute',
        bottom: 20,
        right: 20,
        paddingHorizontal: 10,
        borderRadius: 5
    },
    gotItButton: {
        paddingVertical: 10,
        paddingHorizontal: 15
    }
});
