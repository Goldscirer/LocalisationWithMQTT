import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Header} from './src/Components/common';
import { ScrollView } from 'react-native';

class App extends Component {
  render() {
    return (
        <View>
          <Header headerText={'SMART HOME'} />
            <ScrollView>
                <Button/>
            </ScrollView>
        </View>
    );
  }
}

export default App;
