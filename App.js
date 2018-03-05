// 3DD0FF
import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import { createStore } from 'redux';
//import reducers from './reducers';
import { View } from 'react-native'
import Register from './src/components/Register';
import SplashScreen from 'react-native-splash-screen';
import Enter from './src/components/Enter';

class App extends Component {
  
  state ={
    email: '',
    password: ''
  }
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const content = (
      //<Provider store={createStore(reducers)}>
       <View style={{ width: '100%', height: '100%' }}>
        <Enter 
          style={{ backgroundColor: 'green' }}
          page="Sign Up"
        />
        <Register />
      </View>
      //</Provider>
    );

    return content;
  }
}


export default App;
