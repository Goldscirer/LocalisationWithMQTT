import React, { Component } from 'react';
import RootNavigation from "./src/RootNavigation";
import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(RootNavigation);

class App extends Component {
  render() {
    return (
        <AppContainer/>
    );
  }
}

export default App;
