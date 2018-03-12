import React, { Component } from 'react';
import { connect } from 'react-redux';
import { CardSection, Input, Card, Button } from '../common';
import { emailChanged, passwordChanged, loginUser } from '../../actions';

class SignIn extends Component {
    onChangeEmail(email) {
        this.props.emailChanged(email);
    }
    onChangePassword(password) {
        this.props.passwordChanged(password);
    }

    render() {
      const content = (
        <Card
          shadowColor="white"
        >
          <CardSection padding={35}>
              <Input 
                nameIcon="at-sign"
                placeholder="user@example.com"
                value={this.props.email}
                onChangeText={this.onChangeEmail.bind(this)}
              />
          </CardSection>
          <CardSection padding={35}>
              <Input
                nameIcon="lock"
                placeholder="password"
                value={this.props.password}
                onChangeText={this.onChangePassword.bind(this)}
              />
          </CardSection>
          <Button>
            LOGIN
          </Button>
        </Card>
      );

      return content;
    }
  }
  
  const mapStateToProps = ({ auth }) => {
    const { email, password, loading } = auth;

    return { email, password, loading };
  };

  export default connect(mapStateToProps, {
    emailChanged,
    passwordChanged,
    loginUser
  })(SignIn);
