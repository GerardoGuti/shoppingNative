import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';

class ProductList extends Component {
  renderItems() {
    return this.props.products.map((element, index) =>
      <Product
        key={index}
        updateItemQuantity={this.props.updateItemQuantity ? this.props.updateItemQuantity.bind(this) : null}
        deleteProductCart={this.props.deleteProductCart ? this.props.deleteProductCart.bind(this) : null}
        {...element}
      />
    );
  }

  render() {
    return (
      <ScrollView>
        {this.renderItems()}
      </ScrollView>
    );
  }
}

export default ProductList;
