import fetch from '../../utils/fetch';
import { createActions } from 'redux-actions';


export const { saveVacancies, clearVacancies, saveItem, saveFilter } = createActions({
    SAVE_VACANCIES: (vacancies) => (vacancies),
    CLEAR_VACANCIES: undefined,
    SAVE_FILTER: (filter) => (filter),
    SAVE_ITEM: (item) => (item)

});
export function getVacancies(filter = {}) {
    return (dispatch) => {
        fetch('/vacancies/', { data: filter })
            .then((data) => {
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
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


