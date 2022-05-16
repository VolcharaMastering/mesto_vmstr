import { main } from "./variables.js";

export class Popup {
    constructor(selector){
        this._selector=document.querySelector(selector);
        this._closeButton = this._selector.querySelector(".popup__close");
        this._addClose = () => this._activateHandleEscapeKey;
    }
    open = () => {
        this._selector.classList.add('popup_active');
        this._activateHandleEscapeKey();
        this.setEventListeners();
    }

    close = () => {
        this._selector.classList.remove('popup_active');
        this._removeHandleEscapeKey();
    }

    _handleEscClose(evt){
        if (evt.key === 'Escape') {
            this.close();
    }
}

    _activateHandleEscapeKey = () => {
        document.addEventListener('keydown', this._handleEscClose);
    };
    
    _removeHandleEscapeKey = () => {
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners = (evt) => {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
            //const popupActive = document.querySelector('.popup_active');
            this.close();
        }
    }
}
