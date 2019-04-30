import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button, Header } from './../../src/Components/common';
import {Ionicons} from "@expo/vector-icons";
import { Client, Message } from 'react-native-paho-mqtt';

const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
};

const MESSAGE_JSON = "{ \"state\": 1 }"

const client = new Client({ uri: 'ws://192.168.10.254:1884/ws', clientId: 'Mobile', storage: myStorage });


class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    closeGate() {
        client.connect()
            .then(() => {
                // Once a connection has been made, make a subscription and send a message.
                console.log('onConnect');
                return client.subscribe('MQTT_Test');
            })
            .then(() => {
                const message = new Message(MESSAGE_JSON);
                message.destinationName = 'MQTT_Test';
                client.send(message);
            })
            .catch((responseObject) => {
                if (responseObject.errorCode !== 0) {
                    console.log('onConnectionLost:' + responseObject.errorMessage);
                }
            });
    }

    render() {
        return (
            <View>
                <Header headerText={'SMART HOME'} />
                <ScrollView>
                    <Button
                        onPress={this.closeGate()}
                    />
                </ScrollView>
            </View>
        );
    }

    componentDidMount() {
        client.connect()
            .then(() => {
                // Once a connection has been made, make a subscription and send a message.
                console.log('onConnect');
                return client.subscribe('MQTT_Test');
            })
            .then(() => {
                const message = new Message(MESSAGE_JSON);
                message.destinationName = 'MQTT_Test';
                client.send(message);
            })
            .catch((responseObject) => {
                if (responseObject.errorCode !== 0) {
                    console.log('onConnectionLost:' + responseObject.errorMessage);
                }
            });
    }
}

export default HomeScreen;