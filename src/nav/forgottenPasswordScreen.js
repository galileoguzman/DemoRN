import React from 'react';
import {
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

export default class ForgottenPasswordScreen extends React.Component{

    constructor(props){
        super(props);
    }

    render(){
      return (
        <View style={commonStyles.container}>
          <Text>ForgottenPassword screen</Text>
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
