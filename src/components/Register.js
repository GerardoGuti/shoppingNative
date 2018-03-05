import React, { Component } from 'react';
import { Input, Button, Card, CardSection } from './common';

class Register extends Component {
    
    constructor(props) {
        super(props); 
        this.state = {
            email: '',
            password: '',
            name: '',
            lastname: '',
            address: '',
            passwordConf: '',
            passVal: true

        };   
    }
    render() {
        const content = ( 
            <Card>
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
                        nameIcon="user"
                        placeholder="firstname"
                        value={this.state.name}
                        onChangeText={name => this.setState({ name })}
                    />
                </CardSection>
                <CardSection>
                    <Input
                        nameIcon="user"
                        placeholder="lastname"
                        value={this.state.lastname}
                        onChangeText={lastname => this.setState({ lastname })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="map"
                        placeholder="address"
                        value={this.state.address}
                        onChangeText={address => this.setState({ address })}
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="lock"
                        placeholder="password"
                        value={this.state.password}
                        onChangeText={password => {
                            this.setState({ password });
                    }}
                        
                    />
                </CardSection>
                <CardSection>
                    <Input 
                        nameIcon="lock"
                        placeholder="password confirmation"
                        value={this.state.passwordConf}
                        onChangeText={passwordConf => {
                            if (this.state.passwordConf === "Hola") {  
                                this.setState({ passVal: true });
                            } else {
                                this.setState({ passVal: false });
                            }
                            this.setState({ passwordConf });
                        }}
                        passVal={this.state.passVal}
                    />
                    {
                        console.log('Confimacion', this.state.passVal)
                    }
                </CardSection>
                <Button>
                    SING UP
                </Button>
            </Card>
        );
        return content;
    }

}

export default Register;
