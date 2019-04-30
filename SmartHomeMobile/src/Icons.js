import React from 'react';
import { Image, View } from 'react-native';
import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

const imageIcon = icon => (
    <View
        style={{
            justifyContent: 'center',
            alignItems: 'center',
            alignContent: 'center',
        }}>
        {icon}
    </View>
);

export const inactiveHome = imageIcon(
    <Image
        source={require('../assets/icons/home.png')}
        style={{ width: 30, height: 30 }}
    />
);

export const activeHome = imageIcon(
    <Image
        source={require('../assets/icons/home.png')}
        style={{ width: 30, height: 30, tintColor: '#003478' }}
    />
);

export const inactiveMap = imageIcon(
    <Image
        source={require('../assets/icons/google-maps.png')}
        style={{ width: 30, height: 30 }}
    />
);

export const activeMap = imageIcon(
    <Image
        source={require('../assets/icons/google-maps.png')}
        style={{ width: 30, height: 30, tintColor: '#003478' }}
    />
);

export const inactiveSettings = imageIcon(
    <Image
        source={require('../assets/icons/settings.png')}
        style={{ width: 30, height: 30 }}
    />
);

export const activeSettings = imageIcon(
    <Image
        source={require('../assets/icons/settings.png')}
        style={{ width: 30, height: 30, tintColor: '#003478' }}
    />
);

