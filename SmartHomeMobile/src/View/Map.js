import React, { Component } from 'react';
import { View, ScrollView, Text, StyleSheet } from 'react-native';
import { Button, Header } from './../../src/Components/common';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';

class MapScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header headerText={'MAP'} />
                <View style={styles.container}>
                    <MapView
                        style={styles.map}
                        region={{
                            latitude: 52.074703,
                            longitude: 15.863422,
                            latitudeDelta: 0.1,
                            longitudeDelta: 0.1,
                        }}
                    >
                    </MapView>
                </View>
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

        /*...StyleSheet.absoluteFillObject,
        height: 400,
        width: '100%',
        justifyContent: 'flex-end',
        alignItems: 'center',*/
    },
    map: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
    },
});