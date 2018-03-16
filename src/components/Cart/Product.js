import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const Product = (props) => {
    const {
      name,
      imageUrl,
      price,
      quantity,
    } = props;
    const {
      containerStyle,
      imageStyle,
      bodyWrapperStyle,
      titleTextStyle,
      priceStyle,
      numberWrapperStyle,
      inputStyle,
      numberControlStyle, 
      rowStyle,
      iconStyle
    } = styles;
    const content = (
      <View style={{ marginTop: 15 }}>
        <View style={containerStyle}>
          <View style={rowStyle}>
            <View style={{ padding: 2 }}>
              <TouchableOpacity onPress={() => deleteProduct(props)}>
                <Icon 
                  name='x' 
                  size={12} 
                  style={iconStyle} 
                />
              </TouchableOpacity>
            </View>
            
            <Image
              style={imageStyle}
              source={{ uri: imageUrl }}
            />
            <View style={bodyWrapperStyle}>
              <Text style={titleTextStyle}>{name}</Text>
              <View style={rowStyle}>
                <Text style={priceStyle}>$ {price}</Text>
              </View >
            </View>
            <View style={numberWrapperStyle}>
              <TouchableOpacity onPress={() => onPlusProduct(props)}>
                <View><Text style={numberControlStyle}>+</Text></View>
              </TouchableOpacity>
              <View>
                <TextInput
                  keyboardType="numeric"
                  style={inputStyle}
                  value={quantity.toString()}
                  autoCorrect={false}
                />
              </View>
              <TouchableOpacity onPress={() => onMinusProduct(props)}>
                <View><Text style={numberControlStyle}>-</Text></View>
              </TouchableOpacity>
            </View>
          </View >
        </View>
      </View>
    );
    return content;
  };
  
  const styles = {
    iconStyle: { 
      color: '#F75A56',
      borderColor: '#F75A56',
      borderWidth: 1,
      borderRadius: 10,
      padding: 1.5
    },
    containerStyle: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#C7C1C1',
    },
    imageStyle: {
      height: 100,
      borderWidth: 1,
      width: 100,
      borderColor: '#C7C1C1',
      padding: 10,
      marginRight: 20
    },
    bodyWrapperStyle: {
      flex: 5,
      flexDirection: 'column',
      justifyContent: 'space-around',
      paddingVertical: 10
    },
    titleTextStyle: {
      fontSize: 18,
      fontWeight: '700',
      color: '#7c7c7c'
    },
    priceStyle: {
      flex: 1,
      fontSize: 18,
      color: '#3DD0FF',
      fontWeight: '800',
    },
    numberWrapperStyle: {
      flex: 1.5,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignItems: 'center'
    },
    numberControlStyle: {
      width: 55,
      fontSize: 20,
      color: '#a7a7a7',
      textAlign: 'center'
    },
    inputStyle: {
      borderWidth: 1,
      borderColor: '#a7a7a7',
      borderRadius: 50,
      fontSize: 18,
      padding: 5,
      paddingHorizontal: 6,
      width: 55,
      color: '#4eade7',
      textAlign: 'center',
      marginRight: 5,

    },
    rowStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
      }
  };

  const onPlusProduct = ({ updateItemQuantity, _id, quantity }) => {
    updateItemQuantity(_id, quantity + 1); 
  };
  
  const onMinusProduct = ({ updateItemQuantity, _id, quantity }) => {
    console.log(updateItemQuantity);
    updateItemQuantity(_id, quantity + (quantity > 0 ? -1 : 0));
  };
  const deleteProduct = ({ deleteProductCart, _id }) => {
    console.log(_id);
    console.log(deleteProductCart);
    deleteProductCart(_id);
  };
  
  export default Product;
