import React from 'react';
import {StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback} from 'react-native';
import RNC from 'react-native-css';



const styles = RNC`
    containe {
        margin: 2px;
        background-color: #f7f7f7;
        
    }
    salaryBox {
        background-color: rgb(230,230,230); 
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    salary
    salaryText {
        font-size: 15px;
        font-weight: bold;
        color: #68c07b;
    }
    
    
    
`;



export default class VacanciesDetailed extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: navigation.state.params.item.title,

            headerRight: (
                <Button
                    onPress={()=>{navigation.navigate('Vacancies')}}
                    title=""
                    color="rgb(20, 99, 217)"
                />
            ),
            headerStyle: {
                height: 35,
            }
        };
    };

    render() {
        const vacancyItem = this.props.navigation.state.params.item;

        return <View>
        <View style={styles.containe}>
            <Text>{vacancyItem.description}</Text>
            <Text>{vacancyItem.specific}</Text>
            <View style={styles.salaryBox}>
                <View><Text style={styles.salaryText}>{vacancyItem.salary}</Text></View>
                <View><Text>{vacancyItem.salary}</Text></View>
            </View>
        </View>
        </View>;
    }
}