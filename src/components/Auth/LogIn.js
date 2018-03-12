import React, { Component } from 'react';
import { View } from 'react-native';
import Swiper from 'react-native-swiper';
import SignUp from './SignUp';
import SignIn from './SignIn';
import Enter from './Enter';


class LogIn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 'Sign In'
        };
    }
    onSignUpPage() {
        if (this.state.page === 'Sign Up') {
            this.setState({ page: 'Sign In' });
          } else {
            this.setState({ page: 'Sign Up' });
          }
    }
    
    render() {
        const content = (
            <View style={{ width: '100%', height: '100%' }}>
                <View style={{ marginTop: 170, marginBottom: 10 }}>
                    <Enter 
                        page={this.state.page}
                    />
                </View>
                <Swiper 
                showsPagination={false} 
                loop={false} 
                onMomentumScrollEnd={
                    this.onSignUpPage.bind(this)
                    }
                >
                    <View style={{ width: '100%', height: '100%', flex: 6 }}>
                        <SignIn />
                    </View>
                    <View style={{ width: '100%', height: '100%', flex: 6 }}>
                        <SignUp />
                    </View>
                </Swiper>
            </View>
        );

        return content;
    }
}

export default LogIn;
