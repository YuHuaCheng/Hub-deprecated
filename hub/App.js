import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import store from './src/store';
import MapScreen from './src/screens/MapScreen';
import HubsScreen from './src/screens/HubsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

import { THEME_COLOR } from './src/'

export default class App extends React.Component {
    render() {
        const MainNavigator = TabNavigator({
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    hubs: { screen: HubsScreen },
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
