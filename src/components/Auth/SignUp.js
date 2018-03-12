import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Input, Button, Card, CardSection } from '../common';
import { emailChanged,
    usernameChanged, 
    phoneChanged, 
    passwordChanged, 
    passwordConfChanged 
} from '../../actions';

class SignUp extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            passVal: true
        };   
    }

    onChangeEmail(email) {
        this.props.emailChanged(email);
    }
    
    onChangeUsername(username) {
        this.props.usernameChanged(username);
    }

    onChangePhone(phone) {
        this.props.phoneChanged(phone);
    }

    onChangePassword(password) {
        this.props.passwordChanged(password); 
    }

    onChangePasswordConf(passwordConf) {
        this.props.passwordConfChanged(passwordConf);
        if (this.props.password === this.props.passwordConf) {
            this.setState({ passVal: true });
        } else {
            this.setState({ passVal: false });
        }  
    }

    render() {
        const content = ( 
            <Card>
                <CardSection>
                    <Input 
                        nameIcon="at-sign"
                        placeholder="user@example.com"
                        value={this.props.email}
                        onChangeText={this.onChangeEmail.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="user"
                        placeholder="username"
                        value={this.props.name}
                        onChangeText={this.onChangeUsername.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="phone"
                        placeholder="phone number"
                        value={this.props.phone}
                        onChangeText={this.onChangePhone.bind(this)}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="lock"
                        placeholder="password"
                        value={this.props.password}
                        onChangeText={this.onChangePassword.bind(this)}
                        
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="lock"
                        placeholder="password confirmation"
                        value={this.props.passwordConf}
                        onChangeText={this.onChangePasswordConf.bind(this)}
                        passVal={this.state.passVal}
                    />
                </CardSection>
                <Button>
                    SING UP
                </Button>
            </Card>
        );
        return content;
    }

}

const mapStateToProps = ({ auth }) => {
    const { email, username, phone, password, passwordConf } = auth;

    return { email, username, phone, password, passwordConf };
};

const actions = {
    emailChanged,
    usernameChanged, 
    phoneChanged, 
    passwordChanged, 
    passwordConfChanged
};

export default connect(mapStateToProps, actions)(SignUp);
