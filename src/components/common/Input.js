import React, { Component } from 'react';
import { TextInput, View } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

class Input extends Component { 
    constructor(props) {
        super(props);
        this.state = { 
            focus: false,
            error: false
        };
    }
    onInputFocus() {
        this.setState({ focus: true });
        this.setState({ error: this.props.passVal });
    }
    onInputBlur() {
        this.setState({ focus: false });
    }
    
    render() {
    const { value, onChangeText, placeholder, secureTextEntry, nameIcon } = this.props;
    const { containerStyle, focusedStyle, errorStyle } = styles; 
    let { inputStyle, iconStyle } = styles;
    
    if (this.state.focus) {
        inputStyle = { ...inputStyle, ...focusedStyle };
        iconStyle = { ...iconStyle, ...focusedStyle };
        if (this.state.error) {
            inputStyle = { ...inputStyle, ...errorStyle };
            iconStyle = { ...iconStyle, ...errorStyle };
        } 
    }
    
    const input = (
        <View style={containerStyle}>
            <Icon name={nameIcon} size={25} style={iconStyle} />
            <TextInput 
                secureTextEntry={secureTextEntry}
                placeholder={placeholder}
                autoCorrect={false}
                style={inputStyle}
                value={value}
                onChangeText={onChangeText}
                onFocus={this.onInputFocus.bind(this)}
                onBlur={this.onInputBlur.bind(this)}
            />
        </View>
    );
    return input;
    }
}

const styles = {
    errorStyle: {
        color: 'red',
        borderColor: 'red'
    },
    iconStyle: {
        color: '#C7C1C1'
    },
    focusedStyle: {
        color: '#3DD0FF',
        borderColor: '#3DD0FF'
    },
    inputStyle: {
        color: '#C7C1C1',
        paddingRight: 5,
        paddingLeft: 8,
        fontSize: 18,
        lineHeight: 23,
        flex: 4,
        borderBottomWidth: 1,
        borderColor: '#C7C1C1',
        margin: 5
    },
    labelStyle: {
        fontSize: 18,
        paddingLeft: 20,
        flex: 1
    },
    containerStyle: {
        height: 40,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    }
};

export { Input };
