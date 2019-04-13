import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Header} from './src/Components/common';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers'

class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <Header headerText={'SMART HOME'} />
                <ScrollView>
                    <Button/>
                </ScrollView>
            </View>
        </Provider>
    );
  }
}

export default App;
