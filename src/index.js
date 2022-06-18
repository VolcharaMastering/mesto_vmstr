import { token, main, profileForm, cardForm, validationList } from "./components/variables";
import { Card } from "./components/Card";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { Api } from "./components/Api.js";
import "./styles/index.css";


const profileDescribe = {
  userName: '.profile__name',
  description: '.profile__description'
};
const inputName = profileForm.elements.name;
const inputnDescript = profileForm.elements.description;


//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const cardAddButton = main.querySelector('.profile__add-button');


const apiUser = new Api('users/me', token);
apiUser.getData()
  .then((usersInfo) => {
    window.myId = usersInfo._id;
    console.log('usersInfo', usersInfo);
  })
  .catch((err) => {
    console.log(err);
  });
//=======functions=========
const handleCardClick = (cardName, cardLink) => {
  bigImage.open(cardName, cardLink);
}

const delLike = (cardId) => {
  apiCards.delLike(`cards/${cardId}/likes`)
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
  });
  
  console.log("del LIKE");
}

const addLike = (cardId) => {
  apiCards.addLike(`cards/${cardId}/likes`)  
  .then((res) => {
    return res.json();
  })
  .catch((err) => {
    console.log(err);
  });
  
  console.log("add LIKE");
}

const addNewCard = (describe) => {
  const newCard = new Card(describe, '.template-card', handleCardClick, delLike, addLike, myId);
  const newReturnCard = newCard.makeCard();
  return newReturnCard;
}


//=======classes and callbacks=========

/////////--getting cards from server--////////
const apiCards = new Api('cards', token);

apiCards.getData()
  .then((dbCards) => {
    const addGalary = new Section({
      items: dbCards,
      renderer: (item) => {
        const returnCard = addNewCard(item);
        addGalary.appends(returnCard);
      }
    }, ".photos");
    addGalary.renderItems();
  })
  .catch((err) => {
    console.log(err);
  });



const bigImage = new PopupWithImage('.popup_big-image');
bigImage.setEventListeners();

const popupCardForm = new PopupWithForm(
  '.popup_adder',
  (describe) => {
    const returnCard = addNewCard(describe);
    addGalary.prepends(returnCard);
    popupCardForm.close();
  }
);
popupCardForm.setEventListeners();

const userInfo = new UserInfo(profileDescribe);

const popupProfile = new PopupWithForm(
  '.popup_editor',
  (newInputs) => {
    userInfo.setUserInfo(newInputs);
    popupProfile.close();
  }
);
popupProfile.setEventListeners();

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();


//==========buttons listeners===========

cardAddButton.addEventListener('click', () => {
  popupCardForm.open();
  cardFormValidate.resetValidation();
})

profileOpenButton.addEventListener('click', () => {
  popupProfile.open();
  const oldProfile = userInfo.getUserInfo();
  inputName.value = oldProfile.userName;
  inputnDescript.value = oldProfile.descript;
  profileFormValidate.resetValidation();
})

