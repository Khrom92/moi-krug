import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
import RNC from 'react-native-css';
import HTMLStructure from '../../components/HTMLStructure';
import * as vacanciesActions from "../../rdx/vacancies/vacanciesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


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
     containerButton { 
         background-color: rgb(86, 119, 252);
         border-radius: 20px;
         width: 700%;
         margin-bottom: 10px;
    }
    
    
    
`;


export class VacanciesDetailed extends React.Component {
    static navigationOptions = ({ navigation }) => {
        return {
            // headerTitle: navigation.state.params.item.title,
            headerTitle: '',

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

    componentWillMount() {
        const lastId = this.props.navigation.state.params.id;
        this.props.vacanciesActions.getVacanciesItem(lastId);
    }


    render() {

        const item = this.props.vacancies.vacanciesItem;

        if (!item)
            return false;

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
                            <Text>{showDate(item.date)}</Text>
                        </View>
                        <View style={styles.salary}>
                            <Text style={styles.salaryText}>
                                {
                                    item.salary ?
                                        [
                                            (item.salary.salaryDown ? `От ${item.salary.salaryDown}` : ''),
                                            (item.salary.salaryUp ? ` До ${item.salary.salaryUp}` : ''),
                                            (item.salary.currency ? ` ${item.salary.currency}` : '')
                                        ]
                                        : 'Зарплата не указана'
                                }
                            </Text>
                        </View>


                    </View>
                    <View style={styles.discription}>
                        <HTMLStructure data={item.description}/>

                    </View>
                </View>
                <View style={styles.feedbackWrapper}>
                    <View style={styles.containerButton}>
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


function mapStateToProps(state) {
    return {
        vacancies: state.vacancies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        vacanciesActions: bindActionCreators(vacanciesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VacanciesDetailed)