import React, { Component } from 'react';
import { ScrollView } from 'react-native';
import Axios from 'axios';
import Product from './Product';

class ShopAxios extends Component {

    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentWillMount() {
        const URL = 'http://localhost:3000/api/product';
        Axios.get(URL)
        .then(response => {
            this.setState({ products: response.data });    
        }).catch(err => console.log('this', err));
    }

    render() {
       const content = (<ScrollView style={styles.scrollStyle}>
        {this.state.products.map(product => 
            <Product key={product._id} item={product} />
        )}
        </ScrollView>
       );
    
       return content;
    }

}

const styles = {
    scrollStyle: { 
        backgroundColor: '#C7C1C1', 
        flexDirection: 'column',
        flexWrap: 'wrap',
        flex: 1,
    }
};

export default ShopAxios;
