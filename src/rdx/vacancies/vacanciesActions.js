import { createActions } from 'redux-actions';
import * as api from "../../api/vacanciesApi";


export const { saveVacancies, clearVacancies, saveItem, saveFilter } = createActions({
    SAVE_VACANCIES: (vacancies) => (vacancies),
    CLEAR_VACANCIES: undefined,
    SAVE_FILTER: (filter) => (filter),
    SAVE_ITEM: (item) => (item)

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




