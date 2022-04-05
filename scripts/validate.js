const validationList = {
    activeForm: '.popup__inputs',
    formInput: '.popup__input',
    popupSaveButton: '.popup__save',
    inputError: 'popup__input_type_error',
    activeError: 'popup__input_error_active'
};

const setEventListeners = (activeForm, validationList) => {
    const inputArray = Array.from(activeForm.querySelectorAll(validationList.formInput));
    const saveButton = activeForm.querySelector(validationList.popupSaveButton);
    toggleButtonState(inputArray, saveButton);
    inputArray.forEach((inputs) => {
        inputs.addEventListener('input', () => {
            checkInputValidity(activeForm, inputs, validationList);
            toggleButtonState(inputArray, saveButton);
        });
    });
}
const enableValidation = (validationList) => {
    const formList = Array.from(document.querySelectorAll(validationList.activeForm));
    formList.forEach((formElement) => {
        setEventListeners(formElement, validationList);
    });
};
const showInputError = (validForm, validElement, errorMessage, validationList) => {
    const errorInElement = validForm.querySelector(`.${validElement.id}-error`);
    validElement.classList.add(validationList.inputError);
    errorInElement.classList.add(validationList.activeError);
    errorInElement.textContent = errorMessage;
}

const hideInputError = (validForm, validElement, validationList) => {
    const errorInElement = validForm.querySelector(`.${validElement.id}-error`);
    validElement.classList.remove(validationList.inputError);
    errorInElement.classList.remove(validationList.activeError);
    errorInElement.textContent = '';
}

const checkInputValidity = (validForm, validElement, validationList) => {
    if (!validElement.validity.valid) {
        showInputError(validForm, validElement, validElement.validationMessage, validationList);
    }
    else hideInputError(validForm, validElement, validationList);
}

const hasInvalidInput = (inputs) => {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButtonState = (inputs, button) => {
    if (hasInvalidInput(inputs)) {
        button.classList.add('popup__save_disable');
        button.setAttribute('disabled', 'disabled');
    }
    else {
        button.classList.remove('popup__save_disable');
        button.removeAttribute('disabled');
    }
}

enableValidation(validationList);

const hideValidation = (formToHide, validationList) => {
    const inputArray = Array.from(formToHide.querySelectorAll(validationList.formInput));
    const saveButton = formToHide.querySelector(validationList.popupSaveButton);
    toggleButtonState(inputArray, saveButton);
    inputArray.forEach((input) => {
        hideInputError(formToHide, input, validationList);
    });
}