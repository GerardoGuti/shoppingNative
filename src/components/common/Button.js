import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }) => {
    const button = (
        <TouchableOpacity 
            onPress={onPress}
            style={styles.buttonStyle}
        >
            <Text
            style={styles.textStyle}
            >{children}</Text>
        </TouchableOpacity>    
    );
    return button;
};

const styles = {
    buttonStyle: {
        alignSelf: 'stretch',
        backgroundColor: '#3DD0FF',
        borderRadius: 20,
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        padding: 5,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        color: 'white',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 20,
        fontWeight: 'bold'
    }
};

export { Button };

