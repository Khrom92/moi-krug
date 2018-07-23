import fetch from '../utils/fetch';

export function getVacancies (filter){
    return fetch('/vacancies', { data: filter })
}

export function getVacanciesItem (id){
    return fetch('/vacancies/' + id)
}

