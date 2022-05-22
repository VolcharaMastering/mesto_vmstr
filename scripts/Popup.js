import { main } from "./variables.js";

export class Popup {
    constructor(selector) {
        this._selector = document.querySelector(selector);
    }
    open() {
        this._selector.classList.add('popup_active');
        this._handleEscClose();
        //this.setEventListeners();
    }

    close() {
        this._selector.classList.remove('popup_active');
        document.removeEventListener('keydown', this._escCloseListen);
        this._selector.removeEventListener('click', this._closeListener);
    }

    _handleEscClose = () => {
        document.addEventListener('keydown', this._escCloseListen = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        });
    }

    setEventListeners() {
        this._selector.addEventListener('click', this._closeListener = (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}
