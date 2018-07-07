import * as types from './vacanciesConstans';
import fetch from '../../utils/fetch';

export function increment(index) {

    return {
        type: types.INCREMENT,
        payload: index
    };
}

export function decrement() {
    return {
        type: types.DECREMENT
    };
}
export function getVacancies() {
    return (dispatch) => {
        fetch('/vacancies', {})
            .then((data) => {
                console.log("good");
                dispatch(saveVacancies(data))
            })
            .catch(error => console.error(error));
    }
}

export function getFilter(data) {
    return (dispatch) => {
        dispatch(saveFilter(data));
    }

}

const saveFilter = (payload) => {
    return {
        type: types.SAVE_FILTER,
        payload
    }
};

const saveVacancies = (payload) => {
    return {
        type: types.SAVE_VACANCIES,
        payload
    }
};



    // return {
    //     type: types.GET_VACANCIES,
    //     payload: [
    //         {   id: 1 ,
    //             title: 'Igorek Developer',
    //             tags: [0, 2, 7, 9],
    //             description: 'игорек веб разраб на джиэс',
    //             salary: "100 000",
    //             currency: 'руб',
    //             img: 'https://habrastorage.org/getpro/moikrug/uploads/company/900/507/796/logo/medium_d7a33c4db0022b1a90505ff63e93a652.png',
    //             companyName: 'азазаза разработка',
    //             logo: 'public/images/logo.jpg'
    //             , count: 0,
    //             specific: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    //
    //         },
    //         {
    //             id: 2 ,
    //             title: 'Nikita Developer',
    //             tags: [1, 3, 5, 7],
    //             description: 'игорек веб разраб на джиэс',
    //             salary: "100 000",
    //             currency: 'руб',
    //             img: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/005/932/6/logo/medium_24d964779b944f67c9a3abb779ae02b2.jpg',
    //             companyName: 'азазаза разработка',
    //             logo: 'public/images/logo.jpg'
    //             , count: 0,
    //             specific: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    //
    //
    //         },
    //         {
    //             id: 3 ,
    //             title: 'Serega Developer',
    //             tags: [0, 4, 8, 12],
    //             description: 'игорек веб разраб на джиэс',
    //             salary: "100 000",
    //             currency: 'руб',
    //             img: 'https://habrastorage.org/getpro/moikrug/uploads/company/100/005/162/9/logo/medium_48ae1562e638f693972f5eede304b97a.jpeg',
    //             companyName: 'азазаза разработка',
    //             logo: 'public/images/logo.jpg'
    //             , count: 0,
    //             specific: 'Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat'
    //
    //
    //         }
    //         ]
    // };

