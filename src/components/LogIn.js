import React, { Component } from 'react';
import { CardSection, Input, Card, Button } from './common';

class LogIn extends Component {
    state ={
      email: '',
      password: ''
    }
    render() {
      const content = (
        <Card
          shadowColor="white"
        >
          <CardSection>
              <Input 
                nameIcon="at-sign"
                placeholder="user@example.com"
                value={this.state.email}
                onChangeText={email => this.setState({ email })}
              />
          </CardSection>
          <CardSection>
              <Input
                nameIcon="lock"
                placeholder="password"
                value={this.state.password}
                onChangeText={password => this.setState({ password })}
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
  
  export default LogIn;
