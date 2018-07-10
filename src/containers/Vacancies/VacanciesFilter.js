import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
import { CheckBox } from 'react-native-elements'
import RNC from 'react-native-css';
import Vacancies from "./Vacancies";
import * as counterActions from "../../rdx/vacancies/vacanciesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";



export class VacanciesFilter extends React.Component {

    static navigationOptions = ({ navigation }) => {
        return {
            headerTitle: 'Фильтр вакансий',

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



    filterChange = (e) => {                          //меняем состояния фильтра
        this.props.counterActions.getFilter({filters:{
                salary: !e.target.checked
            }});
    };


    render() {
        const { vacancies } = this.props;

        console.log(" значеинени в фильтре salary", vacancies.filters.salary);
        console.log(" значеинени в фильтре remote", vacancies.filters.remote);
        return (
            <View>
                <View>
                    <CheckBox
                        title='Зарплата указана'
                        checked={vacancies.filters.salary}
                        onPress={() => {
                            this.props.counterActions.getFilter(
                                { ...vacancies.filters,
                                        salary: !vacancies.filters.salary });
                                        }
                                }
                    />
                    <CheckBox
                        title='Удаленная работа'
                        checked={vacancies.filters.remote}
                        onPress={() => {
                            this.props.counterActions.getFilter(
                                { ...vacancies.filters,
                                        remote: !vacancies.filters.remote});
                                    }
                                }
                    />
                    <CheckBox
                        title='полный рабочий день'
                        checked={vacancies.filters.fullday}
                        onPress={() => {
                            this.props.counterActions.getFilter(
                                { ...vacancies.filters,
                                    fullday: !vacancies.filters.fullday});
                                     }
                                 }
                    />
                </View>
            </View>

        );

    }

    }

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

export default connect(mapStateToProps, mapDispatchToProps)(VacanciesFilter)



// filterConfirm = (e) => {                    //передаем состояния фильтра
//
//     this.props.counterActions.getFilter({filters:{
//         salary: event.target.checked
//         }});
// };
// filterConfirm;
// ...state.filters, salary: state.filters.salary

// filterChange = () => {                          //меняем состояния фильтра
//     this.setState({filter:{
//             ...this.state.filters,
//             salary: !this.state.filters.salary }
//     })
// };

// () => {