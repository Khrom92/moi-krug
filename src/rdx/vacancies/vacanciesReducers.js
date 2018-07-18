import * as types from './vacanciesConstans';

const initialState = {
    vacanciesList: [],
    vacanciesItem: undefined,
    filters: {
        salary: false,
        remote: false,
        fullday: false,
        location: null,
        page: 1
    },

};


export default function (state = initialState, action = {}) {
    switch (action.type) {

        case types.SAVE_VACANCIES :
            return {
                ...state,
                vacanciesList:  state.vacanciesList.concat(action.payload)
            };


        case types.SAVE_VACANCIES_AFTER_FILTER :
            return {
                ...state,
                vacanciesList:  action.payload
            };

        case types.SAVE_FILTER :
            return {
                ...state,
                filters: action.payload
            };

        case types.SAVE_PAGE :
            return {
                ...state,
                pageNum: action.payload
            };

        case types.SAVE_ITEM :
            return {
                ...state,
                vacanciesItem: action.payload
            };

        default:
            return state;
    }
}
