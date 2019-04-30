import React, { Component } from 'react';
import { View, ScrollView, Image, Text, Keyboard } from 'react-native';
import {Button, Card, Header} from './../../src/Components/common';
import {clientConnect, closeGate, setEventHandlers, openGate} from "../Components/Modules/MQTTConnectionHandler";

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        setEventHandlers();
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
                    <View style={{marginTop: 100}}>
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