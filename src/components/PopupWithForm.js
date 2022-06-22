import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup {
    constructor(selector, getDataFromApi) {
        super(selector);
        this._form = this._popup.querySelector('.popup__inputs');
        this._inputArray = this._popup.querySelectorAll('.popup__input');
        this._getDataFromApi = getDataFromApi;
        this._saveButton = this._popup.querySelector('.popup__save');
        this._initialText = this._saveButton.textContent;
    }

    _getInputValues() {
        const newValues = {};
        this._inputArray.forEach((input) => {
            newValues[input.name] = input.value;
        });
        return newValues;
    }

    renderInitialText() {
        this._saveButton.textContent = this._initialText;
    }

    setEventListeners() {
        this._form.addEventListener('submit', (evt) => {
            evt.preventDefault();
            this._saveButton.textContent = 'Сохранение...';
            this._getDataFromApi(this._getInputValues());
        });
        super.setEventListeners();
    }

    close() {
        super.close();
        this._form.reset();
    }
}