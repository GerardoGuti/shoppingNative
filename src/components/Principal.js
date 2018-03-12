import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import Bar from './Shop/Bar';
import Shop from './Shop/ShopAxios';
import Cart from './Cart/Cart';
import Orders from './Shop/Orders';

class Principal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }
    render() {
        const content = ( 
            <View style={{ width: '100%', height: '100%' }}>
                <Swiper
                    loop={false}
                    showsPagination={false}
                    onIndexChanged={index => this.setState({ index })}
                >
                    <View style={{ width: '100%', height: '100%' }}><Shop /></View>
                    <View style={{ width: '100%', height: '100%' }}><Cart /></View>
                    <View style={{ width: '100%', height: '100%' }}><Orders /></View> 
                </Swiper>
                <Bar 
                    index={this.state.index}
                />
            </View>
        );
        
        return content;
    }
}

export default Principal;
