import React, { Component } from 'react';
import { View, Dimensions } from 'react-native';
import { MapView } from 'expo';
import { Icon } from 'react-native-elements';
import { connect } from 'react-redux';

import HubMarker from '../components/HubMarker';
import HubForm from '../components/HubForm';
import Deck from '../components/Deck';
import {
    NAVIGATION_ICON_SIZE,
    THEME_COLOR
} from '../'
import { deckFocusedChanged } from '../actions/deck_actions';
import { showHubForm } from '../actions/hub_actions';

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

    animateMapToCoordinate = (coordinate) => {
        this.mapRef.animateToRegion(coordinate);
    };

    onMarkerPress = ({ nativeEvent: { coordinate } }) => {
        // when on press, focus the map on the marker position
        this.animateMapToCoordinate(coordinate);
    };

    renderHubForm = () => {
        const {
            showHubForm,
            map: { isHubFormVisible, pressedDeckItemIndex, hubsOnMap }
        } = this.props;

        return (
            <HubForm
                item={hubsOnMap[pressedDeckItemIndex]}
                visible={isHubFormVisible}
                onCancel={() => {
                    showHubForm(false);
                }}
            />
        )
    };

    render() {
        const { region } = this.state;
        const {
            map: { hubsOnMap, focusedDeckItemIndex },
            deckFocusedChanged
        } = this.props;

        return (
            <View style={{ flex: 1 }}>
                <MapView
                    ref={ mapRef => this.mapRef = mapRef }
                    style={{ flex: 1 }}
                    region={ region }
                    onRegionChangeComplete={this.onRegionChangeComplete}
                >
                    {hubsOnMap.map((marker, index) => {
                        const { id, amount, latlng } = marker;

                        return (
                            <MapView.Marker
                                key={id}
                                coordinate={latlng}
                                onPress={(e) => {
                                    this.onMarkerPress(e);
                                    deckFocusedChanged(index);
                                }}
                            >
                                <HubMarker
                                    amount={amount}
                                    markerColor={ focusedDeckItemIndex === index ? THEME_COLOR : '#A1A1A1' }
                                />
                            </MapView.Marker>
                        )}
                    )}
                </MapView>

                <View style={styles.deckStyle}>
                    <Deck
                        data={hubsOnMap}
                        focusedDeckItemIndex={focusedDeckItemIndex}
                        mapRef={this.mapRef}
                    />
                </View>

                {this.renderHubForm()}

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

const mapStateToProps = ({ map }) => {
    return { map };
};

export default connect(mapStateToProps, {
    deckFocusedChanged,
    showHubForm
})(MapScreen);