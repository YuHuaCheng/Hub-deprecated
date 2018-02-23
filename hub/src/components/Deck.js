import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import HubCard from './HubCard';

class Deck extends Component {

    renderSlide({ item }){
        return (
            <View style={styles.slideStyle}>
                <HubCard />
            </View>
        )
    }

    render() {
        return (
            <FlatList
                horizontal
                style={{ flex: 1 }}
                pagingEnabled
                renderItem={this.renderSlide}
                data={this.props.data}
            />
        )
    }
}

const styles = {
    textStyle: {
        color: 'white',
        fontSize: 30,
        textAlign: 'center'
    },
    slideStyle: {
        flex: 1,
        width: 200,
        justifyContent: 'center',
        alignItems: 'center',
        // borderWidth: 2,
        // borderColor: 'red'
    },
};

export default Deck;