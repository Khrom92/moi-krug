import React from 'react';
import {createMaterialTopTabNavigator, createStackNavigator} from 'react-navigation';

import Vacancies from './containers/Vacancies/';
import VacanciesDetailed from './containers/Vacancies/VacanciesDetailed';
import Profile from './containers/Profile';

const VacanciesStack = createStackNavigator({
    Vacancies,
    VacanciesDetailed

}, {
    // mode: 'modal'
    //  headerMode: 'float',
    // headerTransitionPreset: 'uikit'
});

export default createMaterialTopTabNavigator({
    VacanciesStack,
    Profile
}, {
    initialRouteName: 'VacanciesStack',
    animationEnabled: true,
    tabBarOptions: {
        indicatorStyle: {
            backgroundColor: 'rgb(20, 99, 217)'

        },

        style: {
            backgroundColor: '#f7f7f7',
        },
        labelStyle: {
            color: '#464646',
            fontWeight: "bold",
            fontFamily: 'Arial'
        },


        tabStyle: {
            paddingTop: 20
        }
    }

});