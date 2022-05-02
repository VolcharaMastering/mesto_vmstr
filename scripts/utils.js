import { main, photos, popupProfile, popupNewImage, popupBigImage, profileForm, cardForm } from "./variables.js";
import { Card } from "./Card.js";

const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description');
const bigImage = popupBigImage.querySelector('.popup__image');
const bigImageCaption = popupBigImage.querySelector('.popup__image-caption');

//----inputs from form-----

const returnName = profileForm.elements.name;
const returnDescript = profileForm.elements.description;
const newTitle = cardForm.elements.title;
const newLink = cardForm.elements.link;

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

const activateHandleEscapeKey = () => {
    document.addEventListener('keydown', handleEscapeKey);
};

const removeHandleEscapeKey = () => {
    document.removeEventListener('keydown', handleEscapeKey);
};


const openPopupProfile = () => {
    openPopup(popupProfile);
    returnName.value = profileName.textContent;
    returnDescript.value = profileDescript.textContent;
    resetValidation(profileForm, validationList);
}

const saveProfile = (evt) => {
    evt.preventDefault();
    profileName.textContent = returnName.value;
    profileDescript.textContent = returnDescript.value;
    closePopup(popupProfile);
}
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

const openImage = (newCardName, imageLink) => {
    openPopup(popupBigImage);
    console.log("NAME=" + newCardName, " LINK=" + imageLink)
    bigImage.setAttribute('src', imageLink);
    bigImage.setAttribute('alt', 'Увеличенное фото из галереи: ' + newCardName);
    bigImageCaption.textContent = newCardName;
}

const closePopupByBackground = (evt) => {
    if (evt.target === evt.currentTarget) {
        closePopup(evt.target);
    }
}

export {
    openPopup, closePopup, handleEscapeKey,
    activateHandleEscapeKey, removeHandleEscapeKey,
    openPopupProfile, saveProfile, makeNewCard,
    renderCard, openImage, closePopupByBackground
}