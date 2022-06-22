export class Api {
    constructor(token) {
        this._url = 'https://mesto.nomoreparties.co/v1/cohort-43/';
        this._token = token;
        this._headers = {
            'Content-type': 'application/json',
            'authorization': '9ccf29bd-3d67-4cc8-8c99-82c18d019a44'
        }
    }

    getData(forUrl) {
        return fetch(this._url+forUrl, { headers: this._headers })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject(`Bug detected! ${res.status}`);
            });
    }


    delLike(forUrl){
        return fetch(this._url+forUrl, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Bug detected! ${res.status}`);
        });
    } 

    addLike(forUrl){
        return fetch(this._url+forUrl, {
            headers: this._headers,
            method: 'PUT'
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Bug detected! ${res.status}`);
        });
    } 

    setCard(forUrl,settings){
        return fetch(this._url+forUrl, {
            headers: this._headers,
            method: 'POST',
            body: JSON.stringify(settings),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Bug detected! ${res.status}`);
        });
    }

    delCard(forUrl,cardId){
        return fetch(this._url+forUrl+cardId, {
            headers: this._headers,
            method: 'DELETE'
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Bug detected! ${res.status}`);
        });
    }

    setProfile(forUrl,data){
        return fetch(this._url+forUrl, {
            headers: this._headers,
            method: 'PATCH',
            body: JSON.stringify(data),
        })
        .then((res) => {
            if (res.ok) {
                return res.json();
            }
            return Promise.reject(`Bug detected! ${res.status}`);
        });
    }
}