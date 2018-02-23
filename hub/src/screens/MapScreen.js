import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { MapView } from 'expo';

import HubMarker from '../components/HubMarker';
import Deck from '../components/Deck';

const SCREEN_WIDTH = Dimensions.get('window').width;
const INITIAL_REGION = {
    longitude: -73.953,
    latitude: 40.77,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
};

const SLIDE_DATA = [
    { key: '1', text: 'Welcome to JobApp.', color: '#03A9F4'},
    { key: '2', text: 'Use this to get a job.', color: '#009688'},
    { key: '3', text: 'Set your location, then swipe away.', color: '#03A9F4'}
];


class MapScreen extends Component {
    state = {
        region: INITIAL_REGION,
        markers: [
            {
                latlng: {
                    longitude: -73.953,
                    latitude: 40.77
                },
                id: 'someId',
                amount: 10
            }
        ]
    };

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    };

    onMarkerPress = ({ nativeEvent: { coordinate } }) => {
        // when on press, focus the map on the marker position
        this.mapRef.animateToRegion(coordinate);
    };

    render() {
        const { region, markers } = this.state;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={ mapRef => this.mapRef = mapRef }
                    style={{ flex: 1 }}
                    region={ region }
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    {markers.map(marker => {
                        const { id, amount, latlng } = marker;
                        return (
                            <MapView.Marker
                                key={id}
                                coordinate={latlng}
                                onPress={this.onMarkerPress}
                            >
                                <HubMarker amount={amount}/>
                            </MapView.Marker>
                        )}
                    )}
                </MapView>
                <View style={{ height: 200, width: SCREEN_WIDTH, backgroundColor: 'white' }}>
                    <Deck data={SLIDE_DATA}/>

                </View>
            </View>
        )
    }
}

const styles = {
};

export default MapScreen;