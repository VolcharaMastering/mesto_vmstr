import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selector, getCardFromApi) {
        super(selector);
        this._form = this._popup.querySelector('.popup__inputs');
        this._inputArray = this._popup.querySelectorAll('.popup__input');
        this._getCardsFromApi = getCardFromApi;
    }

    _getInputValues() {
        const newValues = {};
        this._inputArray.forEach((input) => {
            newValues[input.name] = input.value;
        });
        console.log(newValues)
        return newValues;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._getCardsFromApi(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
    }
}