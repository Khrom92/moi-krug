

const queryEditor = function (filter) {
    let query = '/vacancies';
    let count = 1;
    if (Object.values(filter).every(elem => elem != false) || Object.values(filter).every(elem => typeof elem != typeof String) || Object.values(filter).every(elem => typeof elem != typeof Number))
    {
        query += '?';

        for (let key in filter) {
            let value = filter[key];

            if (value && count === 1) {
                count +=1;
                if (key === 'location') {
                    query = query + '&' + key + '=' + value;
                }
                  else if  (key === 'page') {
                    query = query + '&' + key + '=' + value;
                }
                else {

                    query = query + '&' + key + '=true'
                }
            }


        }

    }
    return query

};

export default queryEditor;