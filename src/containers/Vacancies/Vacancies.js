import React from "react";
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
import RNC from 'react-native-css';
import { createMaterialTopTabNavigator, StackNavigator } from 'react-navigation';
import VacanciesDetailed from "./VacanciesDetailed";
import VacanciesFilter from "./VacanciesFilter";
import { bindActionCreators } from 'redux';
import * as counterActions from '../../rdx/vacancies/vacanciesActions';

import { connect } from 'react-redux';


const styles = RNC`
    container {
        flex: 1;
        background-color: rgb(255, 255, 255);
    }
    vacancy {
 
        display: flex;
        justify-content: flex-start;
        align-items: flex-start;
        flex-direction: row;
        padding: 5 10;
        border-bottom: 1px solid #444;
        border-top: 1px solid #ccc;
       
    }
    
    vacancyTitle {
        font-size: 17px;
        font-weight: bold;
        font-family: Arial;
    }
     vacancyDicription {
        font-size: 14px;
        font-family: Arial;
        color: #999;

    }
    vacancySalary {
        font-size: 17px;
        font-weight: bold;
        font-family: Arial;
        color: #68c07b;
    }
    
    logo {
        width: 70px;
        height: 70px;
        margin: 2px 10px 2px 2px;
    }
    contentStart {
        padding: 2px;
    }
`;


class Vacancies extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: '',



            headerLeft: (
                <Button
                    onPress={() => {
                        navigation.navigate('VacanciesFilter')}
                    }

                    title="Отфильтровать"
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

        let { filters } = this.props.vacancies;
        this.props.counterActions.getVacancies(filters);
    }

    pageScroll = () => {
        let { vacancies } = this.props;

        let page = vacancies.filters.page;
        console.log(vacancies.filters.page);

        pageNum = page + 1;
        console.log(vacancies.filters.page);

        this.props.counterActions.scrollGetVacancies(vacancies.filters, {
            ...vacancies.filters,
            page: pageNum
        });


    }


    handleTap = (item) => {
        this.props.navigation.navigate('VacanciesDetailed', { id: item });
         console.log(item);
    };


    render() {
        const { vacancies } = this.props;


        // console.log(vacancies.filters.salary);
        // console.log(vacancies);

        // const { increment } = this.props.counterActions;
        return (
            <View style={styles.container}>
                <ScrollView onMomentumScrollEnd={this.pageScroll}>
                    {
                        vacancies.vacanciesList.map((vacancy, index) => (

                            <TouchableWithoutFeedback key={index} onPress={() => {
                                console.log(vacancy+'');
                                this.handleTap(vacancy.lastId)
                            }}>
                                <View style={styles.vacancy}>
                                    <Image style={styles.logo}
                                           source={{ uri: vacancy.companyLogo }}/>
                                    <View style={styles.contentStart}>
                                        <Text style={styles.vacancyTitle}>{vacancy.title}</Text>
                                        <Text style={styles.vacancyDicription}>{vacancy.companyName}</Text>
                                        <Text style={styles.vacancyDicription}>{vacancy.remote ? 'удаленка' : 'в офисе'}</Text>
                                        <Text style={styles.vacancyDicription}>{vacancy.fullDay ? 'полный рабочий день' : 'не полный рабочий день'}</Text>
                                        <Text style={styles.vacancySalary}>
                                            {
                                                vacancy.salary ?
                                                    [
                                                        (vacancy.salary.salaryDown ? `От ${vacancy.salary.salaryDown}` : ''),
                                                        (vacancy.salary.salaryUp ? ` До ${vacancy.salary.salaryUp}` : ''),
                                                        (vacancy.salary.currency ? ` ${vacancy.salary.currency}` : '')
                                                    ]
                                                    : 'Зарплата не указана'
                                            }
                                        </Text>
                                        <Text>{vacancy.location}</Text>

                                    </View>
                                </View>
                            </TouchableWithoutFeedback> ))


                    }
                </ScrollView>
            </View>
        );
    }
}


// export default connect((state) => ({
//     vacancies: state.vacancies
// }), dispatch => {bindActionCreators(CounterActions, dispatch)
//
// })(Vacancies)

function mapStateToProps(state) {
    return {
        vacancies: state.vacancies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counterActions: bindActionCreators(counterActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacancies)

