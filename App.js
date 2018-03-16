// 3DD0FF
import SplashScreen from 'react-native-splash-screen';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import Principal from './src/components/Principal';

class App extends Component {
  
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    const content = (
      <Provider store={createStore(reducers)}>
        <Principal />
      </Provider>
    );

    return content;
  }
}


export default App;
