import {
  initialCards, userProfile, main, popupNewImage, popupBigImage,
  popups, profileForm, cardForm, validationList
} from "./variables.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";


const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description');

const profileDescribe = [
  {
    returnName: profileForm.elements.name,
    returnDescript: profileForm.elements.description
  }
];
// const returnName = profileForm.elements.name;
// const returnDescript = profileForm.elements.description;

const newCardDescribe = [
  {
    newTitle: cardForm.elements.title,
    newLink: cardForm.elements.link
  }
];

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();

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

/* const makeNewCard = (newCardName, imageLink) => {
  const card = new Card(newCardName, imageLink, '.template-card');
  const returnCard = card.makeCard();
  return returnCard;
} */

//=======classes and callbacks=========

const addGalary = new Section({
  items: initialCards,
  renderer: (item) => {
    const returnCard=addNewCard(item);
    addGalary.appends(returnCard);
  }
}, ".photos");
addGalary.renderItems();

const popupImageForm = new PopupWithForm(
  '.popup_adder',
  {
    submitForm: (describe) => {
      const returnCard=addNewCard(describe);
      addGalary.prepends(returnCard);
      popupImageForm.close();
    }
  }
);

/* const popupProfile= new PopupWithForm(
  '.popup_editor',
  formSubmit: (returnName,returnDescript)=>{
    evt.preventDefault();
    profileName.textContent = returnName.value;
    profileDescript.textContent = returnDescript.value;
    popupProfile.close();
  }
); */

// const userInfo=new UserInfo(profileName.textContent,profileDescript.textContent);
//     const profile= userInfo.getUserInfo();

//==========buttons listeners===========

profileAddButton.addEventListener('click', () => {
  profileFormValidate.resetValidation();
  popupImageForm.open();
  popupImageForm.setEventListeners();
})



