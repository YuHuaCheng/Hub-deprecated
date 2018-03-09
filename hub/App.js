import React from 'react';
import { Provider } from 'react-redux';
import firebase from 'firebase';
import { StyleSheet, View } from 'react-native';
import { TabNavigator, StackNavigator } from 'react-navigation';

import store from './src/store';
import MapScreen from './src/screens/MapScreen';
import HubsScreen from './src/screens/HubsScreen';
import ChatScreen from './src/screens/ChatScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { firebaseTestingAccountConfig } from './credentials/firebase_config';
import { THEME_COLOR } from './src/'

export default class App extends React.Component {
    componentWillMount(){
        firebase.initializeApp(firebaseTestingAccountConfig);
    }

    render() {
        const MainNavigator = TabNavigator({
            // WelcomeScreen
            // AuthScreen
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    hubs: {
                        screen: StackNavigator({
                            hubs: { screen: HubsScreen },
                            chat: { screen: ChatScreen }
                        })
                    },
                    profile: { screen: ProfileScreen },
                }, {
                    tabBarPosition: 'bottom',
                    tabBarOptions: {
                        labelStyle: { fontSize: 10 },
                        activeTintColor: THEME_COLOR,
                        iconStyle: { marginTop: 5}
                    }
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            }
        });

        return (
            <Provider store={store}>
                <View style={styles.container}>
                    <MainNavigator />
                </View>
            </Provider>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
    },
});
