import React, { Component } from 'react';
import { View, ScrollView, Image } from 'react-native';
import { Button, Header } from './../../src/Components/common';
import {Ionicons} from "@expo/vector-icons";

class HomeScreen extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View>
                <Header headerText={'SMART HOME'} />
                <ScrollView>
                    <Button/>
                </ScrollView>
            </View>
        );
    }
}

export default HomeScreen;