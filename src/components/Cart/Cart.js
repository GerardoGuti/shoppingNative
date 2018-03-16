import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import { connect } from 'react-redux';
import { 
  addProducttotheCart, 
  updateItemQuantity, 
  createOrder, 
  deleteProductCart 
} from '../../actions';
import ProdructList from './ProductList';

class Cart extends Component {
  getTotalCost() {
    const itemsList = this.props.products.slice();
    let sum = 0;
    for (const item of itemsList) {
      sum += item.quantity * item.price;
    }
    return sum;
  }

  createOrder() {
    const order = {
      status: 'pending',
      products: this.props.items.map(elt => {
        elt.product = elt._id;
        return elt;
      }),
      client_id: this.props.clientId
    };
    this.props.createOrder(order);
  }

  render() {
    const { products } = this.props;
    const content = (
      <View style={{ flex: 1, backgroundColor: '#DBDBDB' }}>
        <ProdructList 
        products={products} 
        updateItemQuantity={this.props.updateItemQuantity.bind(this)} 
        deleteProductCart={this.props.deleteProductCart.bind(this)}
        />
        <View style={styles.rowStyle}>
        <TouchableOpacity style={styles.buttonStyle} onPress={this.createOrder.bind(this)}>
          <Text style={styles.textStyle}>PLACE THIS ORDER</Text>
          <Text style={styles.textStyle}>$ {this.getTotalCost()}</Text>
        </TouchableOpacity>
        </View>
      </View>
    );
    return content;
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

const mapStateToProps = ({ productsStore }) => {
  const { products } = productsStore;

  return { products };
};


export default connect(mapStateToProps, {
  addProducttotheCart,
  updateItemQuantity,
  createOrder,
  deleteProductCart
})(Cart);
