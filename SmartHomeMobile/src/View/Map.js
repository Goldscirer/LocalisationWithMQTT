import React, { Component } from 'react';
import {View, ScrollView, Text, StyleSheet, Image} from 'react-native';
import { Button, Header } from './../../src/Components/common';
import MapView, { PROVIDER_GOOGLE, Polyline } from 'react-native-maps';
import { sendMessage } from '../View/Map';
import { Client, Message } from 'react-native-paho-mqtt';
import {openGate} from "../Components/Modules/MQTTConnectionHandler";

const MESSAGE_JSON_ON = "{ \"state\": 0 }"
const MESSAGE_JSON_OFF = "{ \"state\": 1 }"

const myStorage = {
    setItem: (key, item) => {
        myStorage[key] = item;
    },
    getItem: (key) => myStorage[key],
    removeItem: (key) => {
        delete myStorage[key];
    },
};

const carMarker = require('../../assets/icons/carMarker.png');
const homeMarker = require('../../assets/icons/homeLarge.png');

const HOME_LATITUDE = 51.936057;
const HOME_LONGITUDE = 15.502418;

const client = new Client({ uri: 'ws://192.168.10.254:1884/ws', clientId: 'Mobile', storage: myStorage });


class MapScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            latitude: 51.935911,
            longitude: 15.505594,
            error: null,
        };
    }

    componentDidMount() {
        this.watchId = navigator.geolocation.watchPosition(
            (position) => {
                this.setState({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude,
                    error: null,
                });
            },
            (error) => this.setState({ error: error.message }),
            { enableHighAccuracy: true, timeout: 20000, maximumAge: 0, distanceFilter: 1},
        );
        console.log(this.state.latitude);
    }

    componentDidUpdate(nextProps, nextState) {
        console.log(nextState.latitude);
        console.log(nextState.longitude);
        this.canOpenGate();
    }

    componentWillUnmount() {
        navigator.geolocation.clearWatch(this.watchId);
    }

    canOpenGate() {
        if(((this.state.latitude <= (HOME_LATITUDE + 0.000500)) && (this.state.latitude >= (HOME_LATITUDE - 0.000500))) &&
            ((this.state.longitude <= (HOME_LONGITUDE + 0.000500)) && (this.state.longitude >= (HOME_LONGITUDE - 0.000500)))) {
            return openGate();
        }
        return console.log('You are so farr');
    }

    render() {

        return (
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: this.state.latitude,
                            longitude: this.state.longitude,
                            latitudeDelta: 0.01,
                            longitudeDelta: 0.01,
                        }}
                    >
                        <MapView.Marker
                            coordinate={{ latitude: HOME_LATITUDE - 0.000200, longitude: HOME_LONGITUDE}}
                        >
                            <Image
                                source={homeMarker}
                                style={{ width: 45, height: 45 }}
                            />
                        </MapView.Marker>
                        <MapView.Marker
                            coordinate={{ latitude: this.state.latitude, longitude: this.state.longitude}}
                            image={carMarker}
                        />
                        <Polyline
                            coordinates={[
                                {
                                    latitude: HOME_LATITUDE + 0.000400,
                                    longitude: HOME_LONGITUDE + 0.000400
                                },
                                {
                                    latitude: HOME_LATITUDE + 0.000400,
                                    longitude: HOME_LONGITUDE - 0.000400
                                },
                                {
                                    latitude: HOME_LATITUDE - 0.000400,
                                    longitude: HOME_LONGITUDE - 0.000400

                                },
                                {
                                    latitude: HOME_LATITUDE - 0.000400,
                                    longitude: HOME_LONGITUDE + 0.000400
                                },
                                {
                                    latitude: HOME_LATITUDE + 0.000400,
                                    longitude: HOME_LONGITUDE + 0.000400
                                },
                            ]}
                            strokeColor="#000" // fallback for when `strokeColors` is not supported by the map-provider
                            strokeWidth={1}
                        />
                    </MapView>
                </View>
        );
    }
}

export default MapScreen;

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});