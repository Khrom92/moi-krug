import React from 'react';
import { StyleSheet, Text, View, ScrollView, Button, Image, TouchableWithoutFeedback } from 'react-native';
import RNC from 'react-native-css';

const styles = RNC`
    salaryBox {
        background-color: rgb(230,230,230); 
        padding: 10px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    salary{
    
    }
    salaryText {
        font-size: 15px;
        font-weight: bold;
        color: #68c07b;
    }
    description {
        margin-top: 12px;
    }
    `;

export default class HTMLStructure extends React.Component {

    shouldComponentUpdate() {
        return false
    }

    render() {
        const { data } = this.props;


        if (data.type === 'tag') {
            if (data.name === 'br') {
                return false
            }
            if (data.name === 'p') {

                return <View>
                    <Text>
                        {data.children && data.children.map((elem, index) => {
                            return (<HTMLStructure data={elem} key={index}/>)
                        })}
                    </Text>
                </View>
            }

            let Wrapper;
            let style;

            if (data.name === 'strong') {
                Wrapper = Text;
                style = { fontWeight: 'bold' };

            } else {
                Wrapper = View;
            }



            return (
                <Wrapper style={style}>
                    {data.children && data.children.map((elem, index) => {
                        return (<HTMLStructure data={elem} key={index}/>)
                    })}
                </Wrapper>
            )
        } else if (data.type === 'text' ) {
            if (data.data === '\n') {
                return false
            }
            return <Text>{data.data}</Text>
        }



    }

}

