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

export default class Header extends React.Component{

    constructor(props){
        super(props);
        this.showMenuButton =  this.props.menuButton || false;
        this.showBackButton =  this.props.backButton || false;
        this.stylesForHeader =  this.props.headerStyle || {};
        this.state = {
        };
    }

    componentWillReceiveProps(nextProps){
      this.showMenuButton =  nextProps.menuButton || false;
      this.showBackButton =  nextProps.backButton || false;
      this.stylesForHeader =  nextProps.headerStyle || {};
    }

    renderMenuButton = ( onPressFunction ) => {
      const navigation = this.props.navigation;
      return(
        <TouchableOpacity  style={styles.button}
          onPress={() =>{
              navigation.navigate('DrawerToggle')
          }}   >
          <Icon name="bars" size={28} color={commonColors.accentColor}  />
        </TouchableOpacity>
      );
    }

    renderBackButton = ( onPressFunction ) => {
      const goBack  = this.props.navigation.goBack;
      return(
        <TouchableOpacity
          style={styles.button}
          onPress={() => goBack() }>
            <Icon name="arrow-left" size={24} color={commonColors.accentColor}  />
        </TouchableOpacity>
      );
    }

    render(){
      return (
        <View style={[styles.headerContainer, this.stylesForHeader]}>
          <View style={{flex: 1}}>
            {this.showMenuButton && this.renderMenuButton()}
            {this.showBackButton && this.renderBackButton()}
          </View>
          <View style={{flex: 4}}>
            <Text style={styles.headerText}>{this.props.title}</Text>
          </View>
          <View style={{flex: 1}}>
          </View>
        </View>
    )
  }

}


const styles = StyleSheet.create({
    headerContainer: {
      margin: 0,
      marginTop: -5,
      marginLeft: -5,
      padding: 0,
      height: 55,
      width: '103%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      backgroundColor: commonColors.primaryColor
    },
    button:{
      padding: 6,
      margin: 0,
      marginLeft: 10
    },
    headerText: {
      fontWeight: 'bold',
      fontSize: 18,
      textAlign: 'center',
      textAlignVertical: 'center'
    }
});
