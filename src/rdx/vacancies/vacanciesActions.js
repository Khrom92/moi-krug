import * as types from './vacanciesConstans';
import fetch from '../../utils/fetch';


export function getVacanciesOnMount() {

    return (dispatch) => {
        fetch('/vacancies/')
            .then((data) => {
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
    }
}

export function getVacancies(filter) {

    return (dispatch) => {
        fetch('/vacancies/', { data: filter })
            .then((data) => {
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
    }
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

export function getFilter(data) {
    return (dispatch) => {
        dispatch(saveFilter(data));
    }

}

export const saveFilter = (payload) => {
    return {
        type: types.SAVE_FILTER,
        payload
    }
};

export function getVacanciesAfterFilter(filter) {
    return (dispatch) => {
        fetch('/vacancies/', { data: filter })
            .then((data) => {
                dispatch(saveVacanciesAfterFilter(data))
            })
            .catch(error => console.error(error));
    }
}

const saveVacanciesAfterFilter = (payload) => {
    return {
        type: types.SAVE_VACANCIES_AFTER_FILTER,
        payload
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
