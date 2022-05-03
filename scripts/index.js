import { initialCards, photos, main, popupProfile, popupNewImage, popups, closePopupButtons, profileForm, cardForm, validationList } from "./variables.js";
import { openPopup, closePopup } from "./utils.js";
import { Card } from "./Card.js";
import { FormValidator } from "./FormValidator.js";


const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description');
const returnName = profileForm.elements.name;
const returnDescript = profileForm.elements.description;
//----inputs from form-----

const newTitle = cardForm.elements.title;
const newLink = cardForm.elements.link;

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

//=======functions=========

const makeNewCard = (newCardName, imageLink) => {
  const card = new Card(newCardName, imageLink);
  const returnCard = card.makeCard();
  return returnCard;
}
const renderCard = (evt) => {
  evt.preventDefault();
  const newCard = makeNewCard(newTitle.value, newLink.value);
  photos.prepend(newCard);
  closePopup(popupNewImage);
  cardForm.reset();
}

const openPopupProfile = () => {
  openPopup(popupProfile);
  returnName.value = profileName.textContent;
  returnDescript.value = profileDescript.textContent;
  profileFormValidate.resetValidation();
}

const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = returnName.value;
  profileDescript.textContent = returnDescript.value;
  closePopup(popupProfile);
}

const closePopupByBackground = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();

//---------init cards array----------
initialCards.forEach(item => {
  const newCard = makeNewCard(item.name, item.link);
  photos.append(newCard);
});

//---Clicks------
profileForm.addEventListener('submit', saveProfile);
cardForm.addEventListener('submit', renderCard);
profileOpenButton.addEventListener('click', openPopupProfile)
profileAddButton.addEventListener('click', function () {
  cardForm.reset();
  openPopup(popupNewImage);
  cardFormValidate.resetValidation();
});
popups.forEach(function (item, id) {
  closePopupButtons[id].addEventListener('click', function () {
    closePopup(item);
  });
  item.addEventListener('click', closePopupByBackground);
});

