import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

let defaultUser = {
  email: 'some@email.com',
  fullname: 'Sandra Williams'
}


export default class LoginScreen extends React.Component{

    constructor(props){
        super(props);
    }
    tryLogin = (params) => {
      if(true){
        return this.props.navigation.navigate('drawerStack', { user: defaultUser });
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
