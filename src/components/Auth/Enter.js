import React, { Component } from 'react';
import { View, Text } from 'react-native';

class Enter extends Component {
    render() {
        const { changeStyle, majorView, textStyle, viewStyle } = styles;
        let viewStyle1 = { ...viewStyle };
        let viewStyle2 = { ...viewStyle };
        if (this.props.page === 'Sign In') {
            viewStyle1 = { ...viewStyle, backgroundColor: '#11B054' };
        } else {
            viewStyle2 = { ...viewStyle, backgroundColor: '#11B054' };
        }
        const content = (
            <View style={majorView}>
                <Text style={textStyle}>
                    {this.props.page}
                </Text>
                <View style={changeStyle}>
                    <View style={viewStyle1} />       
                    <View style={viewStyle2} />
                </View>
            </View>
        );

        return content;
    }
}
const styles = {
    viewStyle: {
        backgroundColor: '#DFDCDC',
        width: 40,
        height: 5,
        marginLeft: 3
    },
    majorView: {
        justifyContent: 'center',
        alignItems: 'center'
    },
    changeStyle: {
        flexDirection: 'row'
    },
    textStyle: {
        fontSize: 20,
        marginBottom: 5
    }
};

export default Enter;
