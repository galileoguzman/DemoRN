import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

import { getUserTutorialRead, setUserReadTutorial } from '../helpers/asyncStorageUtilities';

let defaultUser = {
  id: 123456789,
  email: 'some@email.com',
  fullname: 'Sandra Williams'
}


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props);
    }
    tryLogin = (params) => {
      if(true){
          let tutorialRead =  false;
          let info  = getUserTutorialRead();
          info.then((result) => {
              tutorialRead =  result;
              if(tutorialRead){
                  this.props.navigation.navigate('drawerStack', { user: defaultUser });
              }
              else{
                   this.props.navigation.navigate('tutorial', { user: defaultUser });
              }
              return true;
          })
          return ;

      }
      return false;
    }

    render(){
      return (
        <View style={commonStyles.container}>
          <Text>Login screen</Text>
          <TouchableOpacity
            style={[commonStyles.button, styles.loginButton]}
            onPress={this.tryLogin}>
              <Text style={styles.loginTextButton}>Login</Text>
          </TouchableOpacity>
        </View>
    )
  }

}

const styles = StyleSheet.create({
    loginButton:{

    },
    loginTextButton: {
      fontWeight: 'bold',
      fontSize: 14
    }
});
