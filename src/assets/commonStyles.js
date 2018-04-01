import { Dimensions, StyleSheet } from 'react-native';
import commonColors from './commonColors';
// Dimensions
let { height, width } = Dimensions.get("window");


let profilePhotoSize = 90;
let imageContainerSize = 90;
let brandImageSize = 56;
let buttonSize = 56;
export default StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: commonColors.defaultBackgroundColor,
        alignContent: 'center',
        margin: 0,
        padding: 5
    },

    textInput: {
        color: commonColors.textColor,
        backgroundColor: 'transparent',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: commonColors.placeholderColor,
        marginVertical: 7,
        marginHorizontal: 22,
        paddingHorizontal: 16,
    },
    readOnlyTextInput: {
            borderBottomColor: commonColors.borderColor,
            borderBottomWidth: 1,
            color: commonColors.textColor,
            height: 40,
            marginVertical: 7,
            marginHorizontal: 26,
            paddingHorizontal: 12,
        },

    noteText: {
        paddingVertical: 5,
        fontSize: 11,
        color: commonColors.noteColor,
        textAlign: 'center'
    },

    circledButton: {
        width: buttonSize,
        height: buttonSize,
        borderRadius: buttonSize/2,
        padding: 0,
        margin: 0,
        backgroundColor: commonColors.accentColor,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circledButtonIcon: {
        color: 'white',
        fontSize: 30,
        fontWeight: 'normal',
        alignItems: "center",
        backgroundColor: 'transparent',
        padding: 0,
        margin: 0
    },

    button: {
      backgroundColor: commonColors.accentColor,
      paddingHorizontal: 20,
      paddingVertical: 5,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 4
    }
});
