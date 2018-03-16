import React, { Component } from 'react';
import { View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Bar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            index: 0
        };
    }

    render() {
        const { barStyle, textStyle, iconStyle, focused } = styles;
        let { viewCenterStyle, viewLeftStyle, viewRightStyle } = styles;
        if (this.props.index === 0) {
            viewLeftStyle = { ...viewLeftStyle, ...focused };
        } else if (this.props.index === 1) {
            viewCenterStyle = { ...viewCenterStyle, ...focused };
        } else {
            viewRightStyle = { ...viewRightStyle, ...focused };
        }
        const content = (
            <View style={barStyle}>
                <View style={viewLeftStyle}>
                    <Icon
                        style={iconStyle}
                        size={50}
                        name="home"
                    />
                    <Text style={textStyle}>
                        Home
                    </Text>
                </View>
                <View style={viewCenterStyle}>
                    <Icon
                        style={iconStyle} 
                        size={50}
                        name="shopping-cart"
                    />
                    <Text style={textStyle}>
                        My Cart
                    </Text>
                </View>
                <View style={viewRightStyle}>
                    <Icon
                        style={iconStyle}
                        size={50}
                        name="check-square"
                    />
                    <Text style={textStyle}>
                        Orders
                    </Text>
                </View>
            </View>
        );

        return content;
    }
}
const styles = {
    barStyle: {
        backgroundColor: '#313131',
        flexDirection: 'row',
    },
    textStyle: {
        fontSize: 13,
        color: 'white',
       // color: '#C7C1C1',
        marginTop: 3
    },
    iconStyle: {
       // color: '#C7C1C1'
       color: 'white'
    },
    viewLeftStyle: {
        paddingLeft: 13,
        paddingRight: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewCenterStyle: {
        paddingLeft: 10,
        paddingRight: 10,
        marginLeft: 76,
        marginRight: 77,
        alignItems: 'center',
        justifyContent: 'center'
    },
    viewRightStyle: {
        paddingLeft: 13,
        paddingRight: 13,
        alignItems: 'center',
        justifyContent: 'center'
    },
    focused: {
        backgroundColor: '#3DD0FF',
        paddingTop: 3 
    }

};
export default Bar;
