import React, { Component } from 'react';
import { View, ScrollView, TextInput, Text } from 'react-native';
import { Button, Header } from './../../src/Components/common';
import {
  clientConnect,
  setEventHandlers
} from '../Components/Modules/MQTTConnectionHandler';
import Toast, {DURATION} from 'react-native-easy-toast'


class SettingsScreen extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: null,
      name: null
    };
  }

  componentDidMount() {
    setEventHandlers();
  }

  render() {
    return (
      <View>
        <Toast ref="toast"/>
        <Header headerText={'SMART HOME'} />
        <ScrollView>
          <Text style={styles.textStyle}>Add your address ip and port:</Text>
          <TextInput
            autoFocus={false}
            style={styles.inputStyle}
            onChangeText={host => this.setState({ host })}
            value={this.state.host}
          />
          <Text style={styles.textStyle}>Add your user name:</Text>
          <TextInput
            autoFocus={false}
            style={styles.inputStyle}
            onChangeText={name => this.setState({ name })}
            value={this.state.name}
          />
          <Button name={'CONNECT'} onPress={() => this.clientConnectMessage()} />
        </ScrollView>
      </View>
    );
  }

  async clientConnectMessage() {
    clientConnect()
    this.refs.toast.show('Connected Succesfull');
  }
}

export default SettingsScreen;

const styles = {
  inputStyle: {
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#007aff',
    marginLeft: 5,
    marginRight: 5,
    marginTop: 10,
    flex: 1,
    alignSelf: 'stretch',
    backgroundColor: '#fff',
    marginBottom: 10
  },
  textStyle: {
    alignSelf: 'center',
    color: '#007aff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
};
