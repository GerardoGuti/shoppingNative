import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { addProducttotheCart, updateItemQuantity, createOrder } from '../../actions';
import ProdructList from './ProductList';

class Cart extends Component {
  getTotalCost() {
    const itemsList = this.props.items.slice(0);
    let sum = 0;
    for (const item of itemsList) {
      sum += item.quantity * item.price;
    }
    return sum;
  }

  createOrder() {

  }

  render() {
    const { products } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <ProdructList products={products} />
        <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.createOrder.bind(this)}>
          <Text style={styles.textStyle}>PLACE THIS ORDER</Text>
          <Text style={styles.textStyle}>$ {this.getTotalCost()}</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = {
  rowStyle: {
    justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
  },
  textStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 13,
    fontWeight: '900',
    paddingHorizontal: 10,
    borderRightWidth: 1,
    borderColor: '#fff'
  },
  buttonStyle: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignSelf: 'stretch',
    backgroundColor: '#4eade7',
    borderRadius: 32,
    paddingVertical: 16,
    margin: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    marginHorizontal: 'auto',
  }
};

const mapStateToProps = ({ cart }) => {
  const { products } = cart;

  return { products };
};


export default connect(mapStateToProps, {
  addProducttotheCart,
  updateItemQuantity,
  createOrder
})(Cart);
