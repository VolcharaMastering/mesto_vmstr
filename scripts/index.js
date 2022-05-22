import { initialCards, main, profileForm, cardForm, validationList } from "./variables.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";


const profileDescribe = {
  userName: '.profile__name',
  description: '.profile__description'
};
const inputName = profileForm.elements.name;
const inputnDescript = profileForm.elements.description;


//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const cardAddButton = main.querySelector('.profile__add-button');


//=======functions=========
const handleCardClick = (cardName, cardLink) => {
  const bigImage = new PopupWithImage('.popup_big-image');
  bigImage.open(cardName, cardLink);
  bigImage.setEventListeners();
}

const addNewCard = (describe) => {
  const newCard = new Card(describe, '.template-card', handleCardClick);
  const newReturnCard = newCard.makeCard();
  return newReturnCard;
}


//=======classes and callbacks=========
const addGalary = new Section({
  items: initialCards,
  renderer: (item) => {
    const returnCard = addNewCard(item);
    addGalary.appends(returnCard);
  }
}, ".photos");
addGalary.renderItems();

const popupCardForm = new PopupWithForm(
  '.popup_adder',

  (describe) => {
    const returnCard = addNewCard(describe);
    addGalary.prepends(returnCard);
    popupCardForm.close();
    profileFormValidate.resetValidation();
  }
);

const userInfo = new UserInfo(profileDescribe);

const popupProfile = new PopupWithForm(
  '.popup_editor',
  (newInputs) => {
    userInfo.setUserInfo(newInputs);
    popupProfile.close();
    profileFormValidate.resetValidation();
  }
);

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();


//==========buttons listeners===========

cardAddButton.addEventListener('click', () => {
  profileFormValidate.resetValidation();
  popupCardForm.open();
  popupCardForm.setEventListeners();
})

profileOpenButton.addEventListener('click', () => {
  popupProfile.open();
  const oldProfile = userInfo.getUserInfo();
  inputName.value = oldProfile.userName;
  inputnDescript.value = oldProfile.descript;
  popupProfile.setEventListeners();
  profileFormValidate.resetValidation();
})

