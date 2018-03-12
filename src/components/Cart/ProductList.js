import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Product from './Product';

class ProductList extends Component {
  renderItems() {
    return this.props.products.map((element) =>
      <Product
        key={element.name}
        updateItemQty={this.props.updateItemQty ? this.props.updateItemQty.bind(this) : null}
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
