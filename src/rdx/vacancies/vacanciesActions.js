import { createActions } from 'redux-actions';
import * as api from "../../api/vacanciesApi";
import * as types from './vacanciesConstans';



export const { saveVacancies, clearVacancies, saveItem, saveFilter } = createActions({
    [types.SAVE_VACANCIES]: (vacancies) => (vacancies),
    [types.CLEAR_VACANCIES]: undefined,
    [types.SAVE_FILTER]: (filter) => (filter),
    [types.SAVE_ITEM]: (item) => (item)

});

export function getVacancies(filter = {}) {
    return (dispatch) => {
        api.getVacancies(filter)
            .then((data) => {
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
    }

}

export function getVacanciesItem(id = '') {
    return (dispatch) => {
        api.getVacanciesItem(id)
            .then((data) => {
                dispatch(saveItem(data))
            })
            .catch(error => console.error(error));
    }

}




