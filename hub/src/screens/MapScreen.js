import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import HubMarker from '../components/HubMarker';
import Deck from '../components/Deck';
import {
    NAVIGATION_ICON_SIZE
} from '../'

const SCREEN_WIDTH = Dimensions.get('window').width;
const INITIAL_REGION = {
    longitude: -73.953,
    latitude: 40.77,
    longitudeDelta: 0.04,
    latitudeDelta: 0.09
};

class MapScreen extends Component {
    static navigationOptions = () => {
        return {
            title: 'Explore',
            tabBarIcon: ({ tintColor }) => {
                return (
                    <Icon
                        name='search'
                        type='feather'
                        size={NAVIGATION_ICON_SIZE}
                        color={tintColor}
                    />
                )
            }
        }
    };

    state = {
        region: INITIAL_REGION,
    };

    onRegionChangeComplete = (region) => {
        this.setState({ region });
    };

    onMarkerPress = ({ nativeEvent: { coordinate } }) => {
        // when on press, focus the map on the marker position
        this.mapRef.animateToRegion(coordinate);
    };

    render() {
        const { region } = this.state;
        const { hubsOnMap } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={ mapRef => this.mapRef = mapRef }
                    style={{ flex: 1 }}
                    region={ region }
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    {hubsOnMap.map(marker => {
                        const { key, amount, latlng } = marker;
                        return (
                            <MapView.Marker
                                key={key}
                                coordinate={latlng}
                                onPress={this.onMarkerPress}
                            >
                                <HubMarker amount={amount}/>
                            </MapView.Marker>
                        )}
                    )}
                </MapView>

                <View style={styles.deckStyle}>
                    <Deck data={hubsOnMap} />
                </View>

            </View>
        )
    }
}

const styles = {
    deckStyle: {
        height: 200,
        width: SCREEN_WIDTH,
        backgroundColor: '#FFFFFF',
    }
};

const mapStateToProps = ({ hubsOnMap }) => {
    return { hubsOnMap };
};

export default connect(mapStateToProps, null)(MapScreen);