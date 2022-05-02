import { initialCards, photos, main, popupNewImage, popups, closePopupButtons, profileForm, cardForm } from "./variables.js";
import { Card } from "./Card.js";
import { openPopup, closePopup, openPopupProfile, saveProfile, makeNewCard, renderCard, closePopupByBackground } from "./utils.js";

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

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
  resetValidation(cardForm, validationList);
});
popups.forEach(function (item, id) {
  closePopupButtons[id].addEventListener('click', function () {
    closePopup(item);
  });
  item.addEventListener('click', closePopupByBackground);
});