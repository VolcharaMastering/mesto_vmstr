import { initialCards, main, userProfile, popupProfile, popupNewImage, popups, profileForm, cardForm, validationList } from "./variables.js";
// import { openPopup, closePopup } from "./utils.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";

/* 
const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description'); */




const returnName = profileForm.elements.name;
const returnDescript = profileForm.elements.description;

//----inputs from form-----
const newTitle = cardForm.elements.title;
const newLink = cardForm.elements.link;

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

//=======functions=========

/* const makeNewCard = (newCardName, imageLink) => {
  const card = new Card(newCardName, imageLink, '.template-card');
  const returnCard = card.makeCard();
  return returnCard;
} */

/* const renderCard = (evt) => {
  evt.preventDefault();
  const newCard = makeNewCard(newTitle.value, newLink.value);
  photos.prepend(newCard);
  closePopup(popupNewImage);
  cardForm.reset();
} */

//---------init cards array----------
/* initialCards.forEach(item => {
  const newCard = makeNewCard(item.name, item.link);
  photos.append(newCard);
}); */

const handleCardClick=(cardName,cardLink)=>{
  const bigImage=new PopupWithImage('.popup_big-image');
  bigImage.open(cardName,cardLink);
}

const addGalary= new Section ({
  items: initialCards,
  renderer: (item)=>{
    const card = new Card(item, '.template-card', handleCardClick);
    const returnCard = card.makeCard();
    addGalary.appends(returnCard);
  }
}, ".photos");
addGalary.renderItems();

/* const openPopupProfile = () => {
  openPopup(popupProfile);
  returnName.value = profileName.textContent;
  returnDescript.value = profileDescript.textContent;
  profileFormValidate.resetValidation();
} */

const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = returnName.value;
  profileDescript.textContent = returnDescript.value;
  closePopup(popupProfile);
}

/* const closePopupByBackground = (evt) => {
  if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
    const popupActive = document.querySelector(".popup_active");
    closePopup(popupActive);
  }
} */

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();

//---Clicks------
/* profileForm.addEventListener('submit', saveProfile);
cardForm.addEventListener('submit', ()=>{
  addGalary.prepends(returnCard);
  addGalary.renderItems();
}); */

// profileOpenButton.addEventListener('click', openPopupProfile)
profileAddButton.addEventListener('click', function () {
  cardForm.reset();
  openPopup(popupNewImage);
  cardFormValidate.resetValidation();
});
/* popups.forEach((item) => {
  item.addEventListener('click', closePopupByBackground);
}); */
