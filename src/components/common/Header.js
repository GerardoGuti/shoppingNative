import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    let headerText = '';
    if (props.index === 0) {
        headerText = 'Shop';
    } else if (props.index === 1) {
        headerText = 'Cart'; 
    } else {
        headerText = 'Orders';
    }
    
    const { textStyle, viewStyle } = styles;
    const header = (<View style={viewStyle}>
        <Text style={textStyle}>{headerText}</Text >
    </View>);
    return header;
};

const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60,
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2
    },
    textStyle: {
        fontSize: 20
    }
};

export { Header };
