// 3DD0FF
import React, { Component } from 'react';
import { Card, Input } from './src/components/common';

class App extends Component {

  render() {
    const content = (
      <Card>
        <Input 
         label="Email"

        />
      </Card>
    );

    return content;
  }
}

export default App;
