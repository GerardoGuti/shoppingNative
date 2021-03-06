import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import { Card, CardSection } from '../common';
import { addProducttotheCart } from '../../actions';

class Product extends Component { 
    constructor(props) {
        super(props);
        this.state = {
        _id: props.item._id,
        imageUrl: props.item.imageUrl,
        name: props.item.name,
        stock: props.item.stock,
        price: props.item.price
        };
    }

    addTotheCart(product) {
        const newProduct = { ...product, quantity: 1 };
        this.props.addProducttotheCart(newProduct);
    }

    render() {
        const { imageUrl, name, price } = this.state;
        const content = (
            <View >
                <Card>
                    <CardSection>
                        <Text>
                            {name}
                        </Text>
                    </CardSection>
                    <Image 
                    style={styles.imageStyle}
                    source={{ uri: imageUrl }}
                    />
                    <View style={styles.textStyle}>
                        <Text >${price}</Text>
                        <TouchableOpacity
                            onPress={() => { this.addTotheCart(this.state); }}
                        >
                            <Text style={styles.semibuttonStyle}>
                            Add to Cart
                            </Text>
                        </TouchableOpacity>
                    </View>
                </Card>
            </View>
        );

        return content;
    }

}
    const styles = {
        imageStyle: {
            height: 170,
            width: 170,
        },
        textStyle: {
            justifyContent: 'space-between',
            flexDirection: 'row'
        },
        semibuttonStyle: {
            color: '#3DD0FF'
        }
    };
    const mapStateToProps = ({ productsStore }) => {
        const { items } = productsStore;
      
        return { items };
      };

export default connect(mapStateToProps, { addProducttotheCart })(Product);
