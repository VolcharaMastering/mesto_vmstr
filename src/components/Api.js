import { config } from "../utills/constants.js";

export class Api {
    constructor(token) {
        this._config = config;
    }

    _checkResponse(res) {
        if (res.ok) {
            return res.json();
        }
        return Promise.reject(`Bug detected! ${res.status}`);
    }

    getData(forUrl) {
        return fetch(this._config.url+forUrl, { 
            headers: this._config.headers 
        })
            .then(this._checkResponse );
    }


    delLike(forUrl){
        return fetch(this._config.url+forUrl, {
            headers: this._config.headers,
            method: 'DELETE'
        })
        .then(this._checkResponse );
    } 

    addLike(forUrl){
        return fetch(this._config.url+forUrl, {
            headers: this._config.headers ,
            method: 'PUT'
        })
        .then(this._checkResponse );
    } 

    setCard(forUrl,settings){
        return fetch(this._config.url+forUrl, {
            headers: this._config.headers ,
            method: 'POST',
            body: JSON.stringify(settings),
        })
        .then(this._checkResponse );
    }

    delCard(forUrl,cardId){
        return fetch(this._config.url+forUrl+cardId, {
            headers: this._config.headers,
            method: 'DELETE'
        })
        .then(this._checkResponse );
    }

    setProfile(forUrl,data){
        return fetch(this._config.url+forUrl, {
            headers: this._config.headers,
            method: 'PATCH',
            body: JSON.stringify(data),
        })
        .then(this._checkResponse );
    }
}