import React, { Component } from 'react';
import {
    View,
    Text,
    FlatList,
} from 'react-native';

import HubCard from './HubCard';

class Deck extends Component {
    viewabilityConfig = { itemVisiblePercentThreshold: 50 };

    onViewableItemsChanged = ({ viewableItems, changed }) => {
        console.log("Visible items are", viewableItems);
        console.log("Changed in this iteration", changed);
    };

    renderSlide = ({ item }) => {
        const { image, topic, tags, amount } = item;

        return (
            <View style={styles.slideStyle}>
                <HubCard
                    topic={topic}
                    tags={tags}
                    amount={amount}
                    image={image}
                />
            </View>
        )
    };

    render() {
        return (
            <View style={{ flex: 1, marginLeft: 10, marginTop: 5 }}>
                <FlatList
                    horizontal
                    // pagingEnabled
                    renderItem={this.renderSlide}
                    data={this.props.data}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                />
            </View>
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