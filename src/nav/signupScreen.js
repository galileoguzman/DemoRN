import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

export default class SignupScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      return (
        <View style={commonStyles.container}>
          <Text>Signup screen</Text>
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
