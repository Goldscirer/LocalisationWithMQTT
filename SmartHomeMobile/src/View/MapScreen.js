import React, { Component } from 'react';
import { View, ScrollView } from 'react-native';
import { Button, Header } from './../../src/Components/common';

class MapScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header headerText={'MAP'} />
                <ScrollView>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                    <Button/>
                </ScrollView>
            </View>
        );
    }
}

export default MapScreen;