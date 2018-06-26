import React from "react";
import {StyleSheet, Text, View, Button} from 'react-native';


export default class Profile extends React.Component {
    onPress = () => {
        alert('azazaz!')
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>Open up App.js to start working on your app!</Text>
                <Text>Changes you make will automatically reload.</Text>
                <Text>Shake your phone if you want develop menu.</Text>
                <Button
                    onPress={this.onPress}
                    title="Press test"
                    color="#841584"
                    accessibilityLabel="Learn more about this purple button"
                >
                </Button>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});