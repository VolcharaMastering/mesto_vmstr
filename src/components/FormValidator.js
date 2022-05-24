export class FormValidator {
    constructor(list, formActive) {
        this._activeForm = list.activeForm;
        this._formInput = list.formInput;
        this._popupSaveButton = list.popupSaveButton;
        this._popupDisableButton = list.popupDisableButton;
        this._inputError = list.inputError;
        this._activeError = list.activeError;
        this._form = formActive;
        this._inputArray = Array.from(this._form.querySelectorAll(this._formInput));
        this._saveButton = this._form.querySelector(this._popupSaveButton);
    }

    _setEventListeners = () => {
        this._toggleButtonState();
        this._inputArray.forEach((inputs) => {
            inputs.addEventListener('input', () => {
                this._checkInputValidity(inputs);
                this._toggleButtonState();
            });
        });
    }

    enableValidation = () => {
        this._setEventListeners();
    };

    _showInputError = (validElement, errorMessage) => {
        const errorInElement = this._form.querySelector(`.${validElement.id}-error`);
        validElement.classList.add(this._inputError);
        errorInElement.classList.add(this._activeError);
        errorInElement.textContent = errorMessage;
    }

    _hideInputError = (validElement) => {
        const errorInElement = this._form.querySelector(`.${validElement.id}-error`);
        validElement.classList.remove(this._inputError);
        errorInElement.classList.remove(this._activeError);
        errorInElement.textContent = '';
    }

    _checkInputValidity = (validElement) => {
        if (!validElement.validity.valid) {
            this._showInputError(validElement, validElement.validationMessage);
        }
        else this._hideInputError(validElement);
    }

    _hasInvalidInput = () => {
        return this._inputArray.some((inputElement) => {
            return !inputElement.validity.valid;
        });
    }

    _toggleButtonState = () => {
        if (this._hasInvalidInput()) {
            this._saveButton.classList.add(this._popupDisableButton);
            this._saveButton.setAttribute('disabled', 'disabled');
        }
        else {
            this._saveButton.classList.remove(this._popupDisableButton);
            this._saveButton.removeAttribute('disabled');
        }
    }

    resetValidation = () => {
        this._toggleButtonState();
        this._inputArray.forEach((input) => {
            this._hideInputError(input);
        });
    }
}