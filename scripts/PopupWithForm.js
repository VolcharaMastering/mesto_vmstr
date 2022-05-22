import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selector, submitForm) {
        super(selector);
        this._form = this._selector.querySelector('.popup__inputs');
        this._inputArray = this._selector.querySelectorAll('.popup__input');
        this._submitForm = submitForm;
    }

    _getInputValues() {
        const newValues = {};
        this._inputArray.forEach((input) => {
            newValues[input.name] = input.value;
        });
        return newValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', this._submitListener = (evt) => {
            evt.preventDefault();
            this._submitForm(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
        this._form.removeEventListener('submit', this._submitListener);
    }
}