import React, { Component } from 'react';
import { View, Animated, Text } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import { MapView } from 'expo';

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
                title: 'title',
                description: 'something'
            }
        ]
    };

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    };

    onMarkerPress = ({ nativeEvent: { coordinate } }) => {
        console.log(coordinate);
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    {this.state.markers.map(marker => (
                        <MapView.Marker
                            key={marker.description}
                            coordinate={marker.latlng}
                            onPress={this.onMarkerPress}
                        >
                            <Animated.View style={[styles.markerWrap]}>
                                <Animated.View style={[styles.ring]} />
                                <View style={styles.marker} />
                            </Animated.View>
                        </MapView.Marker>
                    ))}
                </MapView>
            </View>
        )
    }
}

const styles = {
    markerWrap: {
        alignItems: "center",
        justifyContent: "center",
    },
    marker: {
        width: 8,
        height: 8,
        borderRadius: 4,
        backgroundColor: "rgba(130,4,150,0.9)",
    },
    ring: {
        width: 24,
        height: 24,
        borderRadius: 12,
        backgroundColor: "rgba(130,4,150,0.3)",
        position: "absolute",
        borderWidth: 1,
        borderColor: "rgba(130,4,150,0.5)",
    }
};

export default MapScreen;