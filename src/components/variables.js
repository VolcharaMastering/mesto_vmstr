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
const avatarForm =document.forms.addAvatar;
const avatarImage = main.querySelector('.profile__avatar-image');

export { token, main, profileForm, cardForm, validationList, avatarImage ,avatarForm};