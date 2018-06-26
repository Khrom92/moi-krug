import React from 'react';
import { Provider } from 'react-redux';


import Routing from './src/Routing';
import store from './src/rdx/store';

export default class App extends React.Component {
    render(){
        return <Provider store={store}>
            <Routing/>
        </Provider>
    }
}