import React, { Component } from 'react';
import { connect } from 'react-redux';
import { View, Text } from 'react-native';
import { fetchProducts } from '../../actions';

class Shop extends Component {
    componentWillMount() {
         this.props.fetchProducts();
    }

    render() {
        const content = ( 
            <View>
                <Text>
                    Shop
                </Text>
            </View>
        );
        
        return content;
    }
}

const mapStateToProps = ({ products }) => {
    const items = products;
    return items;
};

export default connect(mapStateToProps, { fetchProducts })(Shop);
