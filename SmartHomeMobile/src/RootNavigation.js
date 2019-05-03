import React from 'react';
import {
    createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from "./View/HomeScreen";
import MapScreen from "./View/MapScreen";
import * as Icon from './Icons';
import SettingsScreen from "./View/SettingsScreen";


const RootNavigation = createBottomTabNavigator(
    {
        home: {
            screen: HomeScreen,
            path: 'HomeScreen',
            navigationOptions: {
                tabBarLabel: 'Home',
                tabBarIcon: ({ focused }) => (focused ? Icon.activeHome : Icon.inactiveHome),

            },
        },
        map: {
            screen: MapScreen,
            path: 'MapScreen',
            navigationOptions: {
                tabBarLabel: 'Map',
                tabBarIcon: ({ focused }) => (focused ? Icon.activeMap : Icon.inactiveMap),
            },
        },
        settings: {
            screen: SettingsScreen,
            path: 'SettingsScreen',
            navigationOptions: {
                tabBarLabel: 'Settings',
                tabBarIcon: ({ focused }) => (focused ? Icon.activeSettings : Icon.inactiveSettings),
            },
        },
    },
    {
        initialRouteName: 'home',
    }
);

export default RootNavigation;
