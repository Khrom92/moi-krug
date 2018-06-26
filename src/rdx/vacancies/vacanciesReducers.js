import * as types from './vacanciesConstans';

const initialState = {
    vacanciesList: [
        {   id: 1 ,
            title: 'Igorek Developer',
            tags: [0, 2, 7, 9],
            description: 'игорек веб разраб на джиэс',
            salary: 100000,
            currency: 'руб',
            companyName: 'азазаза разработка',
            logo: 'public/images/logo.jpg'
            , count: 0

        },
        {
            id: 2 ,
            title: 'Nikita Developer',
            tags: [1, 3, 5, 7],
            description: 'игорек веб разраб на джиэс',
            salary: 100000,
            currency: 'руб',
            companyName: 'азазаза разработка',
            logo: 'public/images/logo.jpg'
            , count: 0

        },
        {
            id: 3 ,
            title: 'Serega Developer',
            tags: [0, 4, 8, 12],
            description: 'игорек веб разраб на джиэс',
            salary: 100000,
            currency: 'руб',
            companyName: 'азазаза разработка',
            logo: 'public/images/logo.jpg'
            , count: 0

        }
    ]
};


export default function (state = initialState, action = {}) {
    switch (action.type) {
        case types.INCREMENT:
            return {
                ...state,
                count: state.vacanciesList[id].count + 1
            };
        case types.DECREMENT:
            return {
                ...state,
                count: state.count - 1
            };
        default:
            return state;
    }
}
