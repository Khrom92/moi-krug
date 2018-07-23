import React from 'react';
import { Text, View, Button, Picker } from 'react-native';
import { CheckBox } from 'react-native-elements'
import RNC from 'react-native-css';
import Vacancies from "./Vacancies";
import * as vacanciesActions from "../../rdx/vacancies/vacanciesActions";
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
    containerButtonFilter { 
        background-color: rgb(86, 119, 252);
        border-radius: 20px;
        width: 50%;
        margin-bottom: 10px;
    }
    picker {
         position: absolute;
         bottom: 0px;
         left: 0px;
         right: 0px;
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
        const { vacancies } = this.props;
        this.props.vacanciesActions.clearVacancies();
        this.props.vacanciesActions.getVacancies({
            ...vacancies.filters,
            page: 1
        }, true);
    };

    salaryChange = () => {
        const { vacancies } = this.props;
        this.props.vacanciesActions.saveFilter(
            {
                ...vacancies.filters,
                salary: !vacancies.filters.salary
            });

    };
    remoteChange = () => {
        const { vacancies } = this.props;
        this.props.vacanciesActions.saveFilter(
            {
                ...vacancies.filters,
                remote: !vacancies.filters.remote
            });

    };
    fullDayChange = () => {
        const { vacancies } = this.props;
        this.props.vacanciesActions.saveFilter(
            {
                ...vacancies.filters,
                fullday: !vacancies.filters.fullday
            });

    };
    locationChange = (itemValue) => {
        const { vacancies } = this.props;
        this.props.vacanciesActions.saveFilter(
            {
                ...vacancies.filters,
                location: itemValue
            });
    };


    render() {
        const { vacancies } = this.props;

        const city = [false, 'Москва', "Санкт-Петербург", "Омск", "Новосибирск", "Оренбуг", "Калининград"];
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
                        style={styles.picker}
                        onValueChange={this.locationChange}>

                        {city.map((elem) => {
                            if (elem === false) {
                                return (<Picker.Item label={'Город не выбран'} value={''}/>)
                            }
                            else {
                                return <Picker.Item label={elem} value={elem}/>
                            }
                        })}
                    </Picker>
                </View>
                <View style={styles.feedbackWrapper}>
                    <View style={styles.containerButtonFilter}>
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
        vacanciesActions: bindActionCreators(vacanciesActions, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(VacanciesFilter)


