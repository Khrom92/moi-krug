import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback} from 'react-native';


export default class VacanciesDetailed extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: 'вернуться к списку',
            headerRight: (
                <Button
                    onPress={()=>{navigation.navigate('Vacancies')}}
                    title="Back"
                    color="#fff"
                />
            ),
            headerStyle: {
                height: 20,
            }
        };
    };


    render() {
        return <View>
        </View>;
    }
}