import React from 'react';
import { Text, View } from 'react-native';

const Header = (props) => {
    const { textStyle, viewStyle } = styles;

    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
}

const styles = {
    textStyle: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    },
    viewStyle: {
        backgroundColor: '#003478',
        justifyContent: 'center',
        alignItems: 'center',
        height: 80,
        paddingTop: 5,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 40 },
        shadowOpacity: 0.2,
        elevation: 10,
        position: 'relative',
    }
}

export { Header };
