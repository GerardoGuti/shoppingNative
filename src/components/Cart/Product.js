import React from 'react';
import { View, Text, Image, TextInput, TouchableOpacity } from 'react-native';

const CartItem = (props) => {
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
      rowStyle
    } = styles;
  
    return (
      <View>
        <View style={containerStyle}>
          <View style={rowStyle}>
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
  };
  
  const styles = {
    containerStyle: {
      flex: 1,
      backgroundColor: 'white',
      borderColor: '#C7C1C1',
    },
    imageStyle: {
      height: 100,
      borderWidth: 1,
      borderColor: '#C7C1C1',
      padding: 10,
      flex: 3
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
      borderWidth: 0.5,
      borderColor: '#a7a7a7',
      borderRadius: 50,
      fontSize: 20,
      padding: 5,
      paddingHorizontal: 6,
      width: 55,
      color: '#4eade7',
      textAlign: 'center'
    },
    rowStyle: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        position: 'relative'
      }
  };

  const onPlusProduct = ({ updateItemQty, _id, quantity }) => {
    updateItemQty(_id, quantity + 1);
  };
  
  const onMinusProduct = ({ updateItemQty, _id, quantity }) => {
    updateItemQty(_id, quantity + (quantity > 0 ? -1 : 0));
  };
  
  export default CartItem;
