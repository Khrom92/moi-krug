import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements'
import ModalDropdown from 'react-native-modal-dropdown';
import RNC from 'react-native-css';
import Vacancies from "./Vacancies";
import * as counterActions from "../../rdx/vacancies/vacanciesActions";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";


const styles = RNC`

    feedbackWrapper {
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    height: 50px;
    margin-top: 20px;

    }
    
    container {
        background-color: rgb(255, 255, 255);
        display: flex;
        height: 230px;
        align-items: center;
        justify-content: space-between;
        padding: 10px; 
        
    }
`;
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



    applyChange = () => {
        const { filters } = this.props.vacancies;
        this.props.counterActions.getVacanciesAfterFilter(filters);
    };

    salaryChange = (e) => {
        const { vacancies } = this.props;
        this.props.counterActions.getFilter(
            {
                ...vacancies.filters,
                salary: !vacancies.filters.salary
            });

    };
    remoteChange = (e) => {
        const { vacancies } = this.props;
        this.props.counterActions.getFilter(
            {
                ...vacancies.filters,
                remote: !vacancies.filters.remote
            });

    };
    fullDayChange = (e) => {
        const { vacancies } = this.props;
        this.props.counterActions.getFilter(
            {
                ...vacancies.filters,
                fullday: !vacancies.filters.fullday
            });

    };


    render() {
        const { vacancies } = this.props;
        const city = [null, 'Москва', "Санкт-Петербург", "Омск", "Новосибирск", "Оренбуг", "Калининград"];

        console.log(" значеинени в фильтре salary", vacancies.filters.salary);
        console.log(" значеинени в фильтре remote", vacancies.filters.remote);
        console.log(" значеинени в фильтре location", vacancies.filters.location);
        return (
            <View style={{ backgroundColor: 'rgb(255, 255, 255)' }}>
                <View>

                    <CheckBox
                        title='Зарплата указана'
                        checked={vacancies.filters.salary}
                        onPress={this.salaryChange}
                    />
                    <CheckBox
                        title='Удаленная работа'
                        checked={vacancies.filters.remote}
                        onPress={this.remoteChange}
                    />
                    <CheckBox
                        title='полный рабочий день'
                        checked={vacancies.filters.fullday}
                        onPress={this.fullDayChange}
                    />


                </View>
                <View style={styles.container}>
                    <Text>Выберите город</Text>
                    <Picker
                        selectedValue={vacancies.filters.location}
                        style={{ position: 'absolute', bottom: 0, left: 0, right: 0 }}
                        onValueChange={(itemValue, itemIndex) => {
                            this.props.counterActions.getFilter(
                                {
                                    ...vacancies.filters,
                                    location: itemValue
                                });
                        }}>

                        {city.map((elem, index) => {
                            if (elem === null) {
                                return (<Picker.Item label={'Город не выбран'} value={null}/>)
                            }
                            else {
                                return <Picker.Item label={elem} value={elem}/>
                            }
                        })}
                    </Picker>
                </View>
                <View style={styles.feedbackWrapper}>
                    <View style={{
                        backgroundColor: "rgb(86, 119, 252)",
                        borderRadius: 20,
                        width: "50%",
                        marginBottom: 10

                    }}>
                        <Button
                            onPress={this.applyChange}
                            color="rgb(255, 255, 255)"
                            title="OK"
                        />
                    </View>
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
