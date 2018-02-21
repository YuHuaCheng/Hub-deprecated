import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { TabNavigator } from 'react-navigation';

import MapScreen from './src/screens/MapScreen';
import HubsScreen from './src/screens/HubsScreen';
import ProfileScreen from './src/screens/ProfileScreen';

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
                        labelStyle: { fontSize: 10 }
                    }
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            }
        });

        return (
            <View style={styles.container}>
                <MainNavigator />
            </View>
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
