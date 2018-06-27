import React from "react";
import {StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback} from 'react-native';
import RNC from 'react-native-css';
import {createMaterialTopTabNavigator, StackNavigator} from 'react-navigation';
import VacanciesDetailed from "./VacanciesDetailed";
import {bindActionCreators} from 'redux';
import * as counterActions from '../../rdx/vacancies/vacanciesActions';

import {connect} from 'react-redux';


const styles = RNC`
    container {
        flex: 1;
        background-color: #f7f7f7;
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
        font-size: 18px;
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
        width: 65px;
        height: 65px;
        margin: 5px;
    }
`;


class Vacancies extends React.Component {


    static navigationOptions = {
        headerStyle: {
            display: 'none'
        }

    };

    componentWillMount() {
        this.props.counterActions.getVacancies();
    }


    handleTap = (item) => {
        this.props.navigation.navigate('VacanciesDetailed', {item});
        // console.log(index);
        // this.props.counterActions.increment(index);
    };


    render() {
        const {vacancies} = this.props;
        // const { increment } = this.props.counterActions;

        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        vacancies.vacanciesList.map((vacancy, index) => (
                            <TouchableWithoutFeedback key={index} onPress={() => {
                                this.handleTap(vacancy)
                            }}>
                                <View style={styles.vacancy}>
                                    <Image style={styles.logo}
                                           source={{uri: vacancy.img}}/>
                                    <View style={styles.contentStart}>
                                        <Text style={styles.vacancyTitle}>{vacancy.title}</Text>
                                        <Text style={styles.vacancyDicription}>{vacancy.companyName}</Text>
                                        <Text style={styles.vacancySalary}>
                                            {vacancy.salary.salaryDown  ?  `От ${vacancy.salary.salaryDown}` : ''}
                                            {vacancy.salary.salaryUp  ?  ` До ${vacancy.salary.salaryUp}` : ''}
                                            {vacancy.salary.currency ?  ` ${vacancy.salary.currency}` : ''}
                                        </Text>
                                    </View>
                                </View>
                            </TouchableWithoutFeedback>
                        ))

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

