import { Client, Message } from 'react-native-paho-mqtt';
import { setStateHome } from "../../View/HomeScreen";

let clientId = 'Mobile';
let ipAddress = '192.168.1.20:1884';
let prefix = 'ws://';
let sufix = '/ws';
let hostName = prefix + ipAddress + sufix;

const myStorage = {
  setItem: (key, item) => {
    myStorage[key] = item;
  },
  getItem: key => myStorage[key],
  removeItem: key => {
    delete myStorage[key];
  }
};

let isConnect = false;

const JSON_CLOSE = '{ "state": 1, "userID": "Mobile" }';
const JSON_OPEN = '{  "state": 0, "userID": "Mobile" }';

const client = new Client({
  uri: hostName,
  clientId: clientId,
  storage: myStorage
});

export function setEventHandlers() {
  console.log('setEvent');
  client.on('connectionLost', responseObject => {
    if (responseObject.errorCode !== 0) {
      console.log(responseObject.errorMessage);
    }
  });
  client.on('messageReceived', message => {
    console.log(message.payloadString);
    let obj = JSON.parse(message.payloadString);
    console.log(obj);
    setStateHome();
  });
}

export function clientConnect(host, name) {
  clientId = name;
  hostName = host;
  console.log('clienCOnnect');
  client
    .connect()
    .then(() => {
      console.log('onConnect');
      client.subscribe('MQTT_Data');
      client.subscribe('MQTT_Garage');
      client.subscribe('MQTT_Test');
      isConnect = true;
      return true;
    })
    .catch(responseObject => {
      if (responseObject.errorCode !== 0) {
        isConnect = false;
        console.log('onConnectionLost:' + responseObject.errorMessage);
        return false;
      }
    });
}

export function closeGate() {
  if (isConnect) {
    const message = new Message(JSON_CLOSE);
    message.destinationName = 'MQTT_Test';
    client.send(message);
  }
}

export function openGate() {
  if (isConnect) {
    const message = new Message(JSON_OPEN);
    message.destinationName = 'MQTT_Test';
    client.send(message);
  }
}

export function closeGarage() {
  if (isConnect) {
    const message = new Message(JSON_CLOSE);
    message.destinationName = 'MQTT_Garage';
    client.send(message);
  }
}

export function openGarage() {
  if (isConnect) {
    const message = new Message(JSON_OPEN);
    message.destinationName = 'MQTT_Garage';
    client.send(message);
  }
}
