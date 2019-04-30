import React, { Component } from 'react';
import RootNavigation from './src/RootNavigation';
import {PermissionsAndroid} from 'react-native';

import { createAppContainer } from 'react-navigation';

const AppContainer = createAppContainer(RootNavigation);

class App extends Component {
  render() {
    return (
        <AppContainer />
    );
  }

  componentWillMount() {
    this.requestLocationPermissions();
  }

  async requestLocationPermissions() {
    try {
      await PermissionsAndroid.request(
          PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
          PermissionsAndroid.PERMISSIONS.ACCESS_COARSE_LOCATION,
      );
    } catch (err) {
      console.warn(err);
    }
  }
}

export default App;
