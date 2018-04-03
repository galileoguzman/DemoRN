import React, { PureComponent } from 'react';

import commonColors from '../assets/commonColors';
import commonStyles from '../assets/commonStyles';

import {
    View,
    Image,
    Text,
    StyleSheet
} from 'react-native';

import {
    TabViewAnimated,
    TabBar,
    SceneMap
} from 'react-native-tab-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import Header from '../nav/header';
import MainView from './mainView';
import MoreInformation from './moreInformation';

let defaultUser = {
  email: 'some@email.com',
  fullname: 'Sandra Williams'
}

export default class Tabs extends PureComponent {
    constructor(props){
        super(props);
        this.drawerNavigation =  this.props.navigation;
        let screenProps =  this.props.screenProps || {};

        let user = screenProps.user || defaultUser;
        this.state = {
            user: user,
            index: 0,
            routes: [
                { key: '1', title: 'Main View' },
                { key: '2', title: 'More Information' },
            ]
        }
    }

    static navigationOptions =({navigation}) => {
      return {
        headerTitle: 'Home',
        drawerLabel: 'Home Tabs',
        // we can pass an icon for the drawer item here
        drawerIcon: <Icon name="home" size={28} color={commonColors.accentColor}  />
      }
      }

    _handleIndexChange = index => this.setState({ index });
    _renderHeader = props => {
        let navigationOptions = this.constructor.navigationOptions(this.props);
        return (
            <View>
                <Header menuButton={true}  title={navigationOptions.headerTitle}  navigation={this.props.navigation}  />
                <TabBar
                    {...props}
                    indicatorStyle={styles.tabIndicator}
                    style={styles.tabbar}
                    tabStyle={styles.tab}
                    labelStyle={styles.tabLabel}
                />
            </View>
        );
    };

    _renderPager = props => {
        return <TabViewPagerPan {...props} />;
    };

    _renderScene = SceneMap({
        '1':  () => <MainView user={this.state.user} navigation={this.props.navigation} />,
    '2':  () => <MoreInformation user={this.state.user} navigation={this.props.navigation} />,
    });

    render() {
        return (
            <TabViewAnimated
                style={styles.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onIndexChange={this._handleIndexChange}
            />
        );
    }
}

// Tabs
let tabIndicator = commonColors.accentColor;
let tabWidth = 76;
let brandImageSize = 40;

const styles = StyleSheet.create({
    tabbar: {
        backgroundColor: commonColors.primaryDarkColor
    },
    tabIndicator:{
        backgroundColor: tabIndicator,
        height: 2
    },
    tab: {
        flex: 1,
        paddingLeft: 0,
        paddingRight: 0,
        paddingTop: 12,
        paddingBottom: 12,
    },
    tabLabel: {
        color: 'white',
        fontSize: 14,
        padding: 0,
        margin: 0
    },
    logoTitle:{
        height: brandImageSize,
        width: brandImageSize
    },
    brandImage: {
        width: brandImageSize,
        height: brandImageSize
    },
});
