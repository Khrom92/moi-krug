import React from "react";
import RNC from 'react-native-css';
import {createStackNavigator} from 'react-navigation';

const vacancies = [
    {
        title: 'Igorek Developer',
        tags: [0, 2, 7, 9],
        description: 'игорек веб разраб на джиэс',
        salary: 100000,
        currency: 'руб',
        companyName: 'азазаза разработка',
        logo: 'public/images/logo.jpg'
    },
    {
        title: 'Nikita Developer',
        tags: [1, 3, 5, 7],
        description: 'игорек веб разраб на джиэс',
        salary: 100000,
        currency: 'руб',
        companyName: 'азазаза разработка',
        logo: 'public/images/logo.jpg'
    },
    {
        title: 'Serega Developer',
        tags: [0, 4, 8, 12],
        description: 'игорек веб разраб на джиэс',
        salary: 100000,
        currency: 'руб',
        companyName: 'азазаза разработка',
        logo: 'public/images/logo.jpg'
    }
];


export default class Home extends React.Component {



    render() {
        return (
            <View style={styles.container}>
                <ScrollView>
                    {
                        vacancies.concat(vacancies).concat(vacancies).concat(vacancies).concat(vacancies).concat(vacancies).map((vacancy, index) => (
                            <TouchableWithoutFeedback key={index}  onPress={() => {
                                this.props.navigation.navigate('Profile');

                            }}>
                                <View style={styles.vacancy}>
                                    <Image style={styles.logo}
                                           source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}/>
                                    <View style={styles.contentStart}>
                                        <Text style={styles.vacancyTitle}>{vacancy.title}</Text>
                                        <Text>{vacancy.companyName}</Text>
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