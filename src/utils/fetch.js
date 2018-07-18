import { AsyncStorage } from "react-native";

const fetch = function(url, options){
    return new Promise(async (resolve, reject) => {
        var request = new XMLHttpRequest();
        request.onreadystatechange = (e) => {

            if (request.readyState !== 4) {
                return;
            }

            // console.log('for request ' + url, request.responseText);

            if (request.status === 200) {
                try {
                    const data = JSON.parse(request.responseText);
                    resolve(data);
                } catch(e){
                    reject(e);
                }
            } else {
                reject(e);
            }
        };

        url = "http://192.168.1.64:3000"+url;

        let queryString = '';
        if (options.data) {

            Object.keys(options.data).forEach(function(key){
                url = url + (queryString.length ? '&' : '?') + key + '=' + encodeURIComponent(options.data[key]);
            });
        }

        request.open(options.method || 'GET', url + queryString);

        if (options.method === 'POST') {
            request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
        }

        let sessionId;
        try {
            const session = await AsyncStorage.getItem('sessionId');
            if (value !== null) {
                sessionId = session;
            }
        }
        catch(error){}

        if (sessionId) {
            request.setRequestHeader('Cookie', `SID=${sessionId};language=ru; extension-closed=true; uid=891113; gid=1; user_id=891113; uname=6LMS+; uemail=gerasimow.nikita%40gmail.com; lp=lp%2Fsave; lp_session_id=12d456d8; tmr_detect=0%7C1529591987166`);
        }

        // var body = options.body ? JSON.stringify(options.body) : undefined;
        let body = '';
        if (options.body) {
            let first = true;

            for (let key in options.body) {
                if (first) {
                    first = false;
                } else {
                    body = body + '&';
                }

                body = body + key + '=' + encodeURIComponent(options.body[key]);
            }
        }

        request.send(body);
    })
};

export default fetch;