import React from 'react';
import {
    createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from "./View/HomeScreen";
import MapScreen from "./View/Map";
import * as Icon from './Icons';


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
    },
    {
        initialRouteName: 'home',
    }
);

export default RootNavigation;
