import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
import RNC from 'react-native-css';
import HTMLStructure from '../../components/HTMLStructure';


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
        flex-direction: row;
    }
    
    salary{
        margin: 2px;
    }
    salaryText {
        font-weight: bold;
        font-family: Arial;
        color: #68c07b;
    }
    wrapper {
        pading: 0;
        margin: 5;
    }
    discription {
            padding: 0 10px 0 10px;
            background-color: rgb(255, 255, 255);

    }
    scrollBox {
        flex: 1;
        display: flex;
        
    }
    scroll {
        display: flex;
        flex: 1;
        backgroundColor: rgb(255, 255, 255);
    }
    
    feedbackWrapper {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        height: 50px;
        
    }
    
    contentContainerStyle {
        display: flex;
    }
    
    
    
`;


export default class VacanciesDetailed extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: navigation.state.params.item.title,

            headerRight: (
                <Button
                    onPress={() => {
                        navigation.navigate('Vacancies')
                    }}
                    title=""
                    color="rgb(20, 99, 217)"
                />
            ),
            headerStyle: {
                height: 45,
                padding: 10
            }
        };
    };




    render() {
        const vacancyItem = this.props.navigation.state.params.item;
        const monthNames = ["Января", "Февраля", "Марта", "Апреля", "Мая", "Июня",
            "Июля", "Августа", "Сентября", "Октября", "Ноября", "Декабря"
        ];
        onPress = () => {
            alert('azazaz!')
        };
        let showDate = (date) => {
            let show = new Date(date);
            return `${show.getDate()} ${monthNames.find((elem, index) => (index == show.getMonth() ? elem : ""))} ${show.getFullYear()}`
        };
        return <View style={styles.scrollBox}>
            <ScrollView style={styles.scroll} contentContainerStyle={styles.contentContainerStyle}>

                <View style={styles.containe}>

                    <View style={styles.salaryBox}>
                        <View>
                            <Text>{showDate(vacancyItem.date)}</Text>
                        </View>
                        <View style={styles.salary}>
                            <Text style={styles.salaryText}>
                                {
                                    vacancyItem.salary ?
                                    [
                                        (vacancyItem.salary.salaryDown ? `От ${vacancyItem.salary.salaryDown}` : ''),
                                        (vacancyItem.salary.salaryUp  ?  ` До ${vacancyItem.salary.salaryUp}` : ''),
                                        (vacancyItem.salary.currency ?  ` ${vacancyItem.salary.currency}` : '')
                                    ]
                                     : 'Зарплата не указана'
                                }
                            </Text>
                        </View>


                    </View>
                    <View style={styles.discription}>
                        <HTMLStructure data={vacancyItem.description}/>

                    </View>
                </View>
                <View style={styles.feedbackWrapper}>
                    <View style={{
                        backgroundColor: "rgb(86, 119, 252)",
                        borderRadius: 20,
                        width: "40%",
                        marginBottom: 10,

                    }}>
                        <Button
                            onPress={onPress}
                            color="rgb(255, 255, 255)"
                            title="Откликнуться"
                        />
                    </View>
                </View>
            </ScrollView>
        </View>;
    }
}
