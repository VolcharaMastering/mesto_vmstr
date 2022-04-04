validationList = {
    activeForm: '.popup__inputs',
    formInput: '.popup__input',
    popupSaveButton: '.popup__save',
    inputError: 'popup__input_type_error',
    activeError: 'popup__input_error_active'
};

const enableValidation = (activeForm) => {
    const inputArray = Array.from(activeForm.querySelectorAll(validationList.formInput));
    const saveButton = activeForm.querySelector(validationList.popupSaveButton);
    toggleButton(inputArray, saveButton);
    inputArray.forEach((inputs) => {
        inputs.addEventListener('input', () => {
            validateInput(activeForm, inputs);
            toggleButton(inputArray, saveButton);
        });
    });
}

const showError = (validForm, validElement, errorMessage) => {
    const errorInElement = validForm.querySelector(`.${validElement.id}-error`);
    validElement.classList.add(validationList.inputError);
    errorInElement.classList.add(validationList.activeError);
    errorInElement.textContent = errorMessage;
}

const hideError = (validForm, validElement) => {
    const errorInElement = validForm.querySelector(`.${validElement.id}-error`);
    validElement.classList.remove(validationList.inputError);
    errorInElement.classList.remove(validationList.activeError);
    errorInElement.textContent = '';
}

const validateInput = (validForm, validElement) => {
    if (!validElement.validity.valid) {
        showError(validForm, validElement, validElement.validationMessage);
    }
    else hideError(validForm, validElement);
}

const formValidationCheck = (inputs) => {
    return inputs.some((inputElement) => {
        return !inputElement.validity.valid;
    });
}

const toggleButton = (inputs, button) => {
    if (formValidationCheck(inputs)) {
        button.classList.add('popup__save_disable');
    }
    else {
        button.classList.remove('popup__save_disable');
    }
}

const callHideError = (hideForm) => {
    const inputArray = Array.from(hideForm.querySelectorAll(validationList.formInput));
    inputArray.forEach((input) => {
        hideError(hideForm, input);
    });
}