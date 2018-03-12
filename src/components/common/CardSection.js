import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
    const containerStyle = { ...style.containerStyle, marginBottom: props.padding };

    const section = (
    <View style={containerStyle}>
        {props.children}
    </View>);
    return section;
};

const style = { 
    containerStyle: {
        padding: 3,
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',
        position: 'relative'
    }
};

export { CardSection };
