import * as types from './vacanciesConstans';
import fetch from '../../utils/fetch';
import { createActions, handleActions, combineActions } from 'redux-actions';




export function getVacancies(filter, clear = false) {
    return callFetch(filter, clear)
}

export function scrollGetVacancies(filter) {
    return (dispatch) => {
        dispatch(saveFilter(filter));

        dispatch(getVacancies(filter));
    }
}

export function getVacanciesItem(id) {
    return (dispatch) => {
        fetch('/vacancies/' + id, {})
            .then((data) => {
                dispatch(saveItem(data))
            })
            .catch(error => console.error(error));
    }
}


export const saveFilter = (payload) => {
    return {
        type: types.SAVE_FILTER,
        payload
    }
};


const callFetch = (filter = {}, clear = false) => {
    return (dispatch) => {
        if (clear) {
            dispatch(claerVacancies([]));
        }
        fetch('/vacancies/', { data: filter })
            .then((data) => {
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
    }
};

const saveVacancies = (payload) => {
    return {
        type: types.SAVE_VACANCIES,
        payload
    }
};

const saveItem = (payload) => {
    return {
        type: types.SAVE_ITEM,
        payload
    }
};

const claerVacancies = (payload) => {
    return {
        type: types.CLEAR_VACANCIES,
        payload
    }
};
