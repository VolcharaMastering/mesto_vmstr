export class Api {
    constructor(forUrl,token) {
        this._url = 'https://mesto.nomoreparties.co/v1/cohort-43/';
        this._token = token;
        this._forUrl=forUrl;
        this._headers = {
            'Content-type': 'application/json',
            'authorization': '9ccf29bd-3d67-4cc8-8c99-82c18d019a44'
        }
    }

    getData() {
        return fetch(this._url+this._forUrl, { headers: this._headers })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }
                return Promise.reject('Bug detected!');
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
            return Promise.reject('Bug detected!');
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
            return Promise.reject('Bug detected!');
        });
    } 

    setCard(){
        
    }

}