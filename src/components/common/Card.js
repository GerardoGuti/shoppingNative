import React from 'react';
import { View } from 'react-native';

const Card = (props) => {
        const containerStyle = { ...styles.containerStyle, shadowColor: props.shadowColor };
        const card = (<View style={containerStyle}>
        {props.children}
    </View>);
    return card;
};

const styles = {
    containerStyle: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 1,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10, 
        //flex: 1,
       // justifyContent: 'center',
        flexDirection: 'column',
        backgroundColor: 'white',
        width: 170,
        height: 250

    }
};

export { Card };
