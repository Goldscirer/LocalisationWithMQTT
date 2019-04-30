import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Keyboard } from 'react-native';
import {Button, Card, Header} from './../../src/Components/common';
import {
    clientConnect,
    closeGate,
    setEventHandlers,
    openGate,
    closeGarage, openGarage
} from "../Components/Modules/MQTTConnectionHandler";
import {CoverageSummary as Utils} from "istanbul-lib-coverage";

export function setStateHome(obj){
    console.log('dziallaaa');
    console.log(HomeScreen.this.state);
}

class HomeScreen extends Component {

    constructor(props) {
        super(props);
        this.state = {
            temperature: 0,
            pressure: 0,
            humidity: 0,
        };
    }

    componentDidMount() {
        setEventHandlers();
    }

    setParametersState (obj) {
        this.setState(previousState => (
            {
                temperature:  obj.temperature,
                pressure: obj.pressure,
                humidity: obj.humidity
            }
        ))
    }

    render() {
        return (
            <View>
                <Header headerText={'SMART HOME'} />
                <ScrollView>
                    <Button
                        name = {"CLOSE GATE"}
                        onPress={() => closeGate()}
                    />
                    <Button
                        name = {"OPEN GATE"}
                        onPress={() => openGate()}
                    />
                    <Button
                        name = {"OPEN GARAGE"}
                        onPress={() => closeGarage()}
                    />
                    <Button
                        name = {"CLOSE GARAGE"}
                        onPress={() => openGarage()}
                    />
                    <View style={{marginTop: 50}}>
                        <Text style={styles.textStyle}>Home parameters:</Text>

                     <Text style={styles.cardStyle} onFocus={Keyboard.dismiss()}>
                        Temperature: 45.63 °C
                    </Text>
                    <Text style={styles.cardStyle}>
                        Pressure: 45.63 [hPa]
                    </Text>
                    <Text style={styles.cardStyle}>
                        Humidity: 45.63%
                    </Text>
                    </View>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;

const styles = {
    cardStyle: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5,
        marginTop: 10,
        flex: 1,
        alignSelf: 'stretch',
        backgroundColor: '#f6faff',
        fontSize: 16,
        fontWeight: '600',
        padding: 10,
        color: '#007aff',
    },
    textStyle: {
        alignSelf: 'center',
        color: '#007aff',
        fontSize: 16,
        fontWeight: '600',
        paddingTop: 10,
        paddingBottom: 10
    },
}