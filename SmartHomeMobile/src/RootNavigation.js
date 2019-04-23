import React from 'react';
import {
    createBottomTabNavigator
} from 'react-navigation';
import HomeScreen from "./View/HomeScreen";
import MapScreen from "./View/MapScreen";

const RootNavigation = createBottomTabNavigator(
    {
        home: {
            screen: HomeScreen,
            path: 'HomeScreen',
            navigationOptions: {
                tabBarLabel: 'Home',
            },
        },
        map: {
            screen: MapScreen,
            path: 'MapScreen',
            navigationOptions: {
                tabBarLabel: 'Map',
            },
        },
    },
    {
        initialRouteName: 'home',
        tabBarOptions: {
            activeTintColor: '#ff0000',
            inactiveTintColor: '#0000FF',
            style: {
                borderTopColor: '#0000FF',
            },
        },
    }
);

export default RootNavigation;
