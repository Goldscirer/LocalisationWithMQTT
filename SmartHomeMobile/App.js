import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Header } from './src/Components/common';

class App extends Component {
  render() {
    return (
        <View>
          <Header headerText={'Smart Home'} />
          <Text>An app</Text>
        </View>
    );
  }
}

export default App;
