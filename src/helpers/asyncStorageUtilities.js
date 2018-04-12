import { AsyncStorage } from 'react-native';

const keyForUserInfo = 'userInfo';
const keyForUserTutorialRead = 'tutorialRead';


const getUserTutorialRead =  function(){
    return  AsyncStorage.getItem(keyForUserTutorialRead).then(function(result, error){
        if(!error && result != undefined)
            return JSON.parse(result);
        return undefined;
    });

};

const setUserReadTutorial =  function(user){
    let info = { id: user.id, read: true}
    return AsyncStorage.setItem(keyForUserTutorialRead, JSON.stringify(info))
};


export {    getUserTutorialRead, setUserReadTutorial }
