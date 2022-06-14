export class Api {
    constructor(url, token) {
        this._url = url;
        this._token = token;
        this._headers = {
            'Content-type': 'application/json',
            'authorization': '9ccf29bd-3d67-4cc8-8c99-82c18d019a44'
        }
    }

    getCards() {
        return fetch(this._url, { headers: this._headers })
            .then((res) => {
                if (res.ok) {
                    return res.json();
                }

                return Promise.reject('Bug detected!');
            })
    }

}