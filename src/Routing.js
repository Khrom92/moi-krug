import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import Vacancies from './containers/Vacancies/';
import VacanciesDetailed from './containers/Vacancies/VacanciesDetailed';
import Profile from './containers/Profile';

const VacanciesStack = createStackNavigator({
    Vacancies,
    VacanciesDetailed

}, {
    // mode: 'modal',
    // headerMode: 'none',
});

export default createMaterialTopTabNavigator({
    VacanciesStack,
    Profile
}, {
    initialRouteName: 'VacanciesStack',
    animationEnabled: true,
    tabBarOptions: {
        style: {
            backgroundColor: 'green',
        },
        tabStyle: {
            paddingTop: 20
        }
    }

});