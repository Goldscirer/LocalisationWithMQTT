import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button, Header } from './../../src/Components/common';
import { Client, Message } from 'react-native-paho-mqtt';
import {clientConnect, closeGate, setEventHandlers, openGate} from "../Components/Modules/MQTTConnectionHandler";

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

    componentDidMount() {
        setEventHandlers();
        clientConnect();
    }

    render() {
        return (
            <View>
                <Header headerText={'SMART HOME'} />
                <ScrollView>
                    <Button
                        onPress={() => closeGate()}
                    />
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;