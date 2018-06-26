import React from "react";
import {StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback} from 'react-native';
import RNC from 'react-native-css';
import {createMaterialTopTabNavigator,  StackNavigator} from 'react-navigation';
import VacanciesDetailed from "./VacanciesDetailed";
import { bindActionCreators } from 'redux';
import * as counterAction from '../../rdx/vacancies/vacanciesActions';

import { connect } from 'react-redux';



const styles = RNC`
    container {
        flex: 1;
        background-color: #eee;
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


    handleTap = (index)=> {
        // this.props.navigation.navigate('VacanciesDetailed');
        this.props.counterAction.increment(index);
    };

    onCountPlus = () => {
        return this.props;
    };


    render() {
        const { vacancies } = this.props;
        // const { increment } = this.props.counterAction;

        return (
            <View style={styles.container}>
                {/*<Button title={this.onCountPlus}/>*/}
                <ScrollView>
                    {
                        vacancies.vacanciesList.concat(vacancies.vacanciesList).concat(vacancies.vacanciesList).concat(vacancies.vacanciesList).concat(vacancies.vacanciesList).concat(vacancies.vacanciesList).map((vacancy, index) => (
                            <TouchableWithoutFeedback key={index}  onPress={this.handleTap(index)}>
                                <View style={styles.vacancy}>
                                    <Image style={styles.logo}
                                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                    <View style={styles.contentStart}>
                                        <Text style={styles.vacancyTitle}>{vacancy.title}</Text>
                                        <Text>{vacancy.companyName}</Text>
                                        <Text>это каунт из стэйта = {vacancy.count}</Text>
                                        <Text>{vacancy.salary} <Text>{vacancy.currency}</Text></Text>
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
// }), dispatch => {bindActionCreators(CounterAction, dispatch)
//
// })(Vacancies)

function mapStateToProps(state) {
    return {
        vacancies: state.vacancies
    }
}

function mapDispatchToProps(dispatch) {
    return {
        counterAction: bindActionCreators(counterAction, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Vacancies)