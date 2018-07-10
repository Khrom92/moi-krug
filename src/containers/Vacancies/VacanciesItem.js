// import Rect from 'react';
// import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
//
//
// export default class VacanciesItem extends Rect.Component {
//
//
//     return (
// <TouchableWithoutFeedback key={index} onPress={() => {
//     this.handleTap(vacancy)
// }}>
// <View style={styles.vacancy}>
// <Image style={styles.logo}
// source={{ uri: vacancy.companyLogo }}/>
// <View style={styles.contentStart}>
// <Text style={styles.vacancyTitle}>{vacancy.title}</Text>
// <Text style={styles.vacancyDicription}>{vacancy.companyName}</Text>
//
// <Text style={styles.vacancySalary}>
// {
//     vacancy.salary ?
//         [
//             (vacancy.salary.salaryDown ? `От ${vacancy.salary.salaryDown}` : ''),
//             (vacancy.salary.salaryUp ? ` До ${vacancy.salary.salaryUp}` : ''),
//             (vacancy.salary.currency ? ` ${vacancy.salary.currency}` : '')
//         ]
//         : 'Зарплата не указана'
// }
// </Text>
//
// </View>
// </View>
// </TouchableWithoutFeedback>
// )
//
// }