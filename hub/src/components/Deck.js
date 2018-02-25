import React, { Component } from 'react';
import {
    View,
    FlatList,
} from 'react-native';
import { connect } from 'react-redux';

import { deckFocusedChanged } from '../actions/deck_actions';
import HubCard from './HubCard';

class Deck extends Component {
    static defaultProps = {
    };

    viewabilityConfig = { itemVisiblePercentThreshold: 90 };

    onViewableItemsChanged = ({ viewableItems }) => {
        if (viewableItems) {
            // when the viewable item changes, we set the current focusedItem to be the first item that gets passed
            // from viewableItems, which represents the item that has the highest viewability
            this.props.deckFocusedChanged(viewableItems[0].index);
        }
    };

    renderSlide = ({ item, index }) => {
        const { image, topic, tags, amount } = item;
        const { focusedDeckItemIndex } = this.props;
        const itemIsFocused = focusedDeckItemIndex === index;

        return (
            <View style={styles.slideStyle}>
                <HubCard
                    topic={topic}
                    tags={tags}
                    amount={amount}
                    image={image}
                    isFocused={itemIsFocused}
                />
            </View>
        )
    };

    itemKeyExtractor(item){
        return item.id
    }

    componentWillMount(){
        // when mounting, set the initial focused deck item to be the first item in data props
        const { focusedDeckItemIndex } = this.props;
        if(focusedDeckItemIndex !== 0) {
            this.props.deckFocusedChanged(0)
        }
    }

    render() {
        const { focusedDeckItemIndex } = this.props;

        return (
            <View style={{ flex: 1, marginLeft: 10, marginTop: 5 }}>
                <FlatList
                    horizontal
                    renderItem={this.renderSlide}
                    data={this.props.data}
                    onViewableItemsChanged={this.onViewableItemsChanged}
                    viewabilityConfig={this.viewabilityConfig}
                    keyExtractor={this.itemKeyExtractor}
                    extraData={focusedDeckItemIndex} // this will make FlatList re-render the item when state changes
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
        alignItems: 'center'
    },
};

export default connect(null, { deckFocusedChanged })(Deck);