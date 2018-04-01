import React from 'react';
import {Text} from 'react-native';
import commonColors from '../assets/commonColors';

export const menuItem = (focused, tintColor, text) => {
        return(
            <Text style={{
                flex: 1,
                margin:0,
                paddingVertical: 10,
                paddingHorizontal: 40,
                fontSize: 14,
                color: focused ? tintColor :  commonColors.primaryColor
            }}>
                {text}
            </Text>
        );
    }
