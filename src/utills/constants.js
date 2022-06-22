const token = '9ccf29bd-3d67-4cc8-8c99-82c18d019a44';

const userProfile = [
  {
    name: '.profile__name',
    descript: '.profile__description'
  }
];

const validationList = {
  activeForm: '.popup__inputs',
  formInput: '.popup__input',
  popupSaveButton: '.popup__save',
  popupDisableButton: 'popup__save_disable',
  inputError: 'popup__input_type_error',
  activeError: 'popup__input_error_active'
};

const main = document.querySelector('.gallery');
const profileForm = document.forms.profile;
const cardForm = document.forms.addImage;
const avatarForm = document.forms.addAvatar;
const avatarImage = main.querySelector('.profile__avatar-image');

const profileDescribe = {
  name: '.profile__name',
  about: '.profile__description'
};
const inputName = profileForm.elements.name;
const inputnDescript = profileForm.elements.about;


//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const cardAddButton = main.querySelector('.profile__add-button');
const avatarChangeButton = main.querySelector('.profile__avatar');

///------For API request------
const config={
  'url': 'https://mesto.nomoreparties.co/v1/cohort-43/',
  'headers': {
    'Content-type': 'application/json',
    'authorization': '9ccf29bd-3d67-4cc8-8c99-82c18d019a44'
  }
}

export {
  token, main, profileForm, cardForm,
  validationList, avatarImage, avatarForm,
  profileDescribe, inputName, inputnDescript,
  profileOpenButton, cardAddButton, avatarChangeButton,
  config
};