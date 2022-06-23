import { config } from "../utills/constants.js";

export class Api {
    constructor() {
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


    delLike(cardId){
        return fetch(this._config.url+`cards/${cardId}/likes`, {
            headers: this._config.headers,
            method: 'DELETE'
        })
        .then(this._checkResponse );
    } 

    addLike(cardId){
        return fetch(this._config.url+`cards/${cardId}/likes`, {
            headers: this._config.headers ,
            method: 'PUT'
        })
        .then(this._checkResponse );
    } 

    setCard(settings){
        return fetch(this._config.url+'cards', {
            headers: this._config.headers ,
            method: 'POST',
            body: JSON.stringify(settings),
        })
        .then(this._checkResponse );
    }

    delCard(cardId){
        return fetch(this._config.url+'cards/'+cardId, {
            headers: this._config.headers,
            method: 'DELETE'
        })
        .then(this._checkResponse );
    }

    setProfile(forUrl,data){
        return fetch(this._config.url+'users/me'+forUrl, {
            headers: this._config.headers,
            method: 'PATCH',
            body: JSON.stringify(data),
        })
        .then(this._checkResponse );
    }
}