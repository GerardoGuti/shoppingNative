import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Order extends Component {

    render() {
        const { date, _id } = this.props; 
        const content = (
            <View style={{ flexDirection: 'row' }}>
                <View style={{ flex: 9 }}>
                    <Text style={{ color: '#898989' }}>{ date }</Text>
                    <Text style={{ color: '#c5c5c5' }}>Order id #{ _id }</Text>
                </View>
                <TouchableOpacity
                    style={{
                        flex: 1,
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}
                >
                    <Icon name="chevron-right" size={25} style={{ color: '#C7C1C1' }} />
                </TouchableOpacity>
            </View>
        );
        return content;
    }

}

export default Order;
