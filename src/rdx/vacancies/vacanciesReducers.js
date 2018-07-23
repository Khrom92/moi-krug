import * as types from './vacanciesConstans';
import { handleActions } from 'redux-actions';


const initialState = {
    vacanciesList: [],
    vacanciesItem: undefined,
    filters: {
        page: 1,
        salary: false,
        remote: false,
        fullday: false,
        location: ''
    },

};

export default vacansies = handleActions(
    {
        [types.SAVE_VACANCIES]: (state = initialState, action = {}) => (
            {
                ...state, vacanciesList: [...state.vacanciesList,
                    ...action.payload]
            }),
        [types.CLEAR_VACANCIES]: (state = initialState) => (
            {
                ...state,
                vacanciesList: []
            }),
        [types.SAVE_ITEM]: (state = initialState, action = {}) => (
            {
                ...state,
                vacanciesItem: action.payload
            }),
        [types.SAVE_FILTER]: (state = initialState, action = {}) => (
            {
                ...state,
                filters: action.payload
            })
    },
    initialState
);

