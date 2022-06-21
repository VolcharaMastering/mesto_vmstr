import { token, main, profileForm, cardForm, validationList, avatarImage } from "./components/variables";
import { Card } from "./components/Card";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { Api } from "./components/Api.js";
import "./styles/index.css";
import { PopupConfirm } from "./components/PopupConfirm";



const profileDescribe = {
  userName: '.profile__name',
  description: '.profile__description'
};
const inputName = profileForm.elements.name;
const inputnDescript = profileForm.elements.description;


//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const cardAddButton = main.querySelector('.profile__add-button');
const avatarChangeButton=main.querySelector('.profile__avatar');

console.log(avatarChangeButton);


//=======functions=========
const handleCardClick = (cardName, cardLink) => {
  bigImage.open(cardName, cardLink);
}

const setAvatar=(avatarLink)=>{
  console.log(avatarLink)
  avatarImage.setAttribute('src',avatarLink);
  // return avatarImage;
}

//=======classes and callbacks=========

/////////--getting user info & cards from server--////////
const bigImage = new PopupWithImage('.popup_big-image');
bigImage.setEventListeners();

const confirmPopup = new PopupConfirm('.popup_question');
confirmPopup.setEventListeners();

const api = new Api(token);
api.getData('users/me')
  .then((usersInfo) => {
    window.myId = usersInfo._id;
    setAvatar(usersInfo.avatar);
    api.getData('cards')
      .then((dbCards) => {
        window.addGalary = new Section({
          items: dbCards,
          renderer: (item) => {
            const returnCard = addNewCard(item, myId);
            addGalary.appends(returnCard);
          }
        }, ".photos");
        addGalary.renderItems();
      })
  })

  .catch((err) => {
    console.log(err);
  });

const addNewCard = (describe, myId) => {
  const newCard = new Card(
    describe, '.template-card', handleCardClick,
    {handleCardDelete: (cardId,evt) => {
      confirmPopup.open();
      confirmPopup.setSubmitAction(() => {
        console.log('SUBMIT');
        api.delCard('cards/',cardId)
          .then(() => {
            newCard.delCard(evt);
            confirmPopup.close();
          })
          .catch((err) => {
            console.log(err);
          });
      });
    },
    delLike: (cardId) => {
      api.delLike(`cards/${cardId}/likes`)
      .then((item) => {
        newCard.updateLikes(item.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    }, 
    addLike: (cardId) => {
      api.addLike(`cards/${cardId}/likes`)
        .then((item) => {
          newCard.updateLikes(item.likes);
        })
        .catch((err) => {
          console.log(err);
        });
    }}, 
    myId);
  const newReturnCard = newCard.makeCard();
  return newReturnCard;
}

const popupCardForm = new PopupWithForm(
  '.popup_adder',
  (nameAndLink) => {
    api.setCard('cards', nameAndLink)
      .then((card) => {
        const returnCard = addNewCard(card, card.owner._id);
        addGalary.prepends(returnCard);
        popupCardForm.close();
      })
      .catch((err) => {
        console.log(err);
      });
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

const popupAvatar = new PopupWithForm(
  '.popup_avatar',
  (getAvatar) => {
    api.setAvatar('users/me/avatar', getAvatar)
      .then((ava) => {
        setAvatar(ava.avatar);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
popupAvatar.setEventListeners();

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();

const avatarFormValidate = new FormValidator(validationList, cardForm);
avatarFormValidate.enableValidation();


//==========buttons listeners===========

cardAddButton.addEventListener('click', () => {
  popupCardForm.open();
  cardFormValidate.resetValidation();
})

avatarChangeButton.addEventListener('click',()=>{
  popupAvatar.open();
  avatarFormValidate.resetValidation();
})

profileOpenButton.addEventListener('click', () => {
  popupProfile.open();
  const oldProfile = userInfo.getUserInfo();
  inputName.value = oldProfile.userName;
  inputnDescript.value = oldProfile.descript;
  profileFormValidate.resetValidation();
})

