import { initialCards, main, popupNewImage, profileForm, cardForm, validationList } from "./variables.js";
import { Card } from "./Card.js";
import { Section } from "./Section.js";
import { FormValidator } from "./FormValidator.js";
import { PopupWithImage } from "./PopupWithImage.js";
import { PopupWithForm } from "./PopupWithForm.js";
import { UserInfo } from "./UserInfo.js";

/* 
const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description'); */



const profileDescribe=[
  {
    returnName: profileForm.elements.name,
returnDescript: profileForm.elements.description
  }
];
// const returnName = profileForm.elements.name;
// const returnDescript = profileForm.elements.description;

const newCardDescribe=[
{
  newTitle: cardForm.elements.title,
   newLink: cardForm.elements.link
}
];

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');

//=======functions=========

/* const makeNewCard = (newCardName, imageLink) => {
  const card = new Card(newCardName, imageLink, '.template-card');
  const returnCard = card.makeCard();
  return returnCard;
} */



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

const popupProfile= new PopupWithForm(
  '.popup_editor',
  formSubmit = (returnName,returnDescript)=>{
    evt.preventDefault();
    profileName.textContent = returnName.value;
    profileDescript.textContent = returnDescript.value;
    popupProfile.close();
  }
)

const popupNewImage=new PopupWithForm(
  '.popup_adder',
  formSubmit = (newCardDescribe)=>{
    const newCard = new Card(profileDescribe, '.template-card', handleCardClick);
    const newReturnCard = newCard.makeCard();
    addGalary.preppends(newReturnCard);
  }
)



const userInfo=new UserInfo(profileName.textContent,profileDescript.textContent);
    const profile= userInfo.getUserInfo();

/* profileForm.addEventListener('submit', saveProfile);
cardForm.addEventListener('submit', ()=>{
  addGalary.prepends(returnCard);
  addGalary.renderItems();
}); */


/* const openPopupProfile = () => {
  openPopup(popupProfile);
  returnName.value = profileName.textContent;
  returnDescript.value = profileDescript.textContent;
  profileFormValidate.resetValidation();
} */

/* const saveProfile = (evt) => {
  evt.preventDefault();
  profileName.textContent = returnName.value;
  profileDescript.textContent = returnDescript.value;
  closePopup(popupProfile);
} */


//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();


  cardForm.reset();
