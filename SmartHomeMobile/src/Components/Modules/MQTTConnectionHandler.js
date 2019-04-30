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

const JSON_CLOSE_GATE = "{ \"state\": 1, userID: Mobile }"
const JSON_OPEN_GATE = "{  \"state\": 1, userID: Mobile }"

const client = new Client({ uri: 'ws://192.168.10.254:1884/ws', clientId: 'Mobile', storage: myStorage });

export function setEventHandlers(){
    console.log('setEvent');
    client.on('connectionLost', (responseObject) => {
        if (responseObject.errorCode !== 0) {
            console.log(responseObject.errorMessage);
        }
    });
    client.on('messageReceived', (message) => {
        console.log(message.payloadString);
    });
}

export function clientConnect(){
    console.log('clienCOnnect');
    client.connect()
        .then(() => {
            // Once a connection has been made, make a subscription and send a message.
            console.log('onConnect');
            return client.subscribe('MQTT_Test');
        })
        .catch((responseObject) => {
            if (responseObject.errorCode !== 0) {
                console.log('onConnectionLost:' + responseObject.errorMessage);
            }
        })
    ;
}

export function closeGate() {
    const message = new Message(JSON_CLOSE_GATE);
    message.destinationName = 'MQTT_Test';
    client.send(message);
}

export function openGate() {
    const message = new Message(JSON_OPEN_GATE);
    message.destinationName = 'MQTT_Test';
    client.send(message);
}


// connect the client
