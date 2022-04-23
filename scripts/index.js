import {initialCards} from "./variables.js";

const main = document.querySelector('.gallery');
const photos = main.querySelector('.photos');

const popupProfile = document.querySelector('.popup_editor');
const popupNewImage = document.querySelector('.popup_adder');
const popupBigImage = document.querySelector('.popup_big-image');
const popups = document.querySelectorAll('.popup');
const closePopupButtons = document.querySelectorAll('.popup__close');
const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description');
const bigImage = popupBigImage.querySelector('.popup__image');
const bigImageCaption = popupBigImage.querySelector('.popup__image-caption');

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

//----inputs from form-----
const profileForm = document.forms.profile;
const cardForm = document.forms.addImage;

const returnName = profileForm.elements.name;
const returnDescript = profileForm.elements.description;
const newTitle = cardForm.elements.title;
const newLink = cardForm.elements.link;

//-----functions-----
const openPopup = (popup) => {
  popup.classList.add('popup_active');
  activateHandleEscapeKey();
}

const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  removeHandleEscapeKey();
}

const handleEscapeKey = (evt) => {
  if (evt.key === 'Escape') {
    const popupActive = document.querySelector('.popup_active');
    closePopup(popupActive);
  }
}

function activateHandleEscapeKey() {
  document.addEventListener('keydown', handleEscapeKey);
};

function removeHandleEscapeKey() {
  document.removeEventListener('keydown', handleEscapeKey);
};


function openPopupProfile() {
  openPopup(popupProfile);
  returnName.value = profileName.textContent;
  returnDescript.value = profileDescript.textContent;
  resetValidation(profileForm, validationList);
}

function saveProfile(evt) {
  evt.preventDefault();
  profileName.textContent = returnName.value;
  profileDescript.textContent = returnDescript.value;
  closePopup(popupProfile);
}

function renderCard(evt) {
  evt.preventDefault();
  const returnCard = createCard(newTitle.value, newLink.value);
  photos.prepend(returnCard);
  closePopup(popupNewImage);
  cardForm.reset();
}

function openImage(newCardName, imageLink) {
  openPopup(popupBigImage);
  bigImage.setAttribute('src', imageLink);
  bigImage.setAttribute('alt', 'Увеличенное фото из галереи: ' + newCardName);
  bigImageCaption.textContent = newCardName;
}

function deleteImage(evt) {
  evt.target.closest('.card').remove();
}

function toggleLike(cardLike) {
  cardLike.classList.toggle('card__like_active');
}

const createCard = (newCardName, imageLink) => {
  const card = document.querySelector('.template-card').content.cloneNode(true);
  const cardImage = card.querySelector('.card__image');
  const cardName = card.querySelector('.card__name');
  const cardRemove = card.querySelector('.card__remove');
  const cardLike = card.querySelector('.card__like');
  cardImage.setAttribute('src', imageLink);
  cardImage.setAttribute('alt', 'Фото из галереи: ' + newCardName);
  cardName.textContent = newCardName;
  cardRemove.addEventListener('click', deleteImage);
  cardLike.addEventListener('click', () => {
    toggleLike(cardLike);
  });
  cardImage.addEventListener('click', () => {
    openImage(newCardName, imageLink);
  });
  return card;
};

const closePopupByBackground = (evt) => {
  if (evt.target === evt.currentTarget) {
    closePopup(evt.target);
  }
}

initialCards.forEach(item => {
  const returnCard = createCard(item.name, item.link);
  photos.append(returnCard);
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