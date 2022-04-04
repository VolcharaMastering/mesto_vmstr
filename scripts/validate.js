const setInputListeners = (activeForm) => {
    const inputArray = Array.from(activeForm.querySelectorAll('.popup__input'));
    const saveButton = activeForm.querySelector('.popup__save');
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
    validElement.classList.add('popup__input_type_error');
    errorInElement.classList.add('popup__input_error_active');
    errorInElement.textContent = errorMessage;
}

const hideError = (validForm, validElement) => {
    const errorInElement = validForm.querySelector(`.${validElement.id}-error`);
    validElement.classList.remove('popup__input_type_error');
    errorInElement.classList.remove('popup__input_error_active');
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