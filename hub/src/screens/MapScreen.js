import React, { Component } from 'react';
import { View } from 'react-native';
import { MapView } from 'expo';

import HubMarker from '../components/HubMarker';

const INITIAL_REGION = {
    longitude: -73.953,
    latitude: 40.77,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
};

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
            </View>
        )
    }
}

const styles = {
};

export default MapScreen;