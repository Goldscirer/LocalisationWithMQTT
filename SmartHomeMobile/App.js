import React, { Component } from 'react';
import { View, Text } from 'react-native';
import {Button, Header} from './src/Components/common';
import { ScrollView } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './src/reducers';
import RootNavigation from "./src/RootNavigation";

class App extends Component {
  render() {
    return (
        <Provider store={createStore(reducers)}>
            <View>
                <RootNavigation />
            </View>
        </Provider>
    );
  }
}

export default App;
