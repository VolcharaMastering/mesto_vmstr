import { token, main, profileForm, cardForm, validationList, avatarImage, avatarForm } from "./components/variables";
import { Card } from "./components/Card";
import { Section } from "./components/Section.js";
import { FormValidator } from "./components/FormValidator.js";
import { PopupWithImage } from "./components/PopupWithImage.js";
import { PopupWithForm } from "./components/PopupWithForm.js";
import { UserInfo } from "./components/UserInfo.js";
import { Api } from "./components/Api.js";
import "./styles/index.css";
import { PopupConfirm } from "./components/PopupConfirm";


////-----variables------///////
const profileDescribe = {
  name: '.profile__name',
  about: '.profile__description'
};
const inputName = profileForm.elements.name;
const inputnDescript = profileForm.elements.about;


//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const cardAddButton = main.querySelector('.profile__add-button');
const avatarChangeButton = main.querySelector('.profile__avatar');


//=======classes and callbacks=========

const bigImage = new PopupWithImage('.popup_big-image');
bigImage.setEventListeners();

const confirmPopup = new PopupConfirm('.popup_question');
confirmPopup.setEventListeners();

const userInfo = new UserInfo(profileDescribe);

/////////--getting user info & cards from server--////////
const api = new Api(token);
api.getData('users/me')
  .then((usersInfo) => {
    window.myId = usersInfo._id;
    setAvatar(usersInfo.avatar);
    userInfo.setUserInfo(usersInfo);
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
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });


/////////----- Making every card -------////////
const addNewCard = (describe, myId) => {
  const card = new Card(
    describe, '.template-card', handleCardClick,
    {
      handleCardDelete: (cardToDel) => {
        confirmPopup.open();
        confirmPopup.setSubmitAction(() => {
          api.delCard('cards/', cardToDel._id)
            .then(() => {
              card.delCard();
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
            card.updateLikes(item.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      },
      addLike: (cardId) => {
        api.addLike(`cards/${cardId}/likes`)
          .then((item) => {
            card.updateLikes(item.likes);
          })
          .catch((err) => {
            console.log(err);
          });
      }
    },
    myId);
  const newReturnCard = card.makeCard();
  return newReturnCard;
}


/////////----- Popup forms creating -------////////
const popupCardForm = new PopupWithForm(
  '.popup_adder',
  (nameAndLink) => {
    api.setCard('cards', nameAndLink)
      .then((card) => {
        Promise.resolve(popupCardForm.changeSaveButton());
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

const popupProfile = new PopupWithForm(
  '.popup_editor',
  (newInputs) => {
    api.setProfile('users/me', newInputs)
      .then((data) => {
        Promise.resolve(popupProfile.changeSaveButton());
        userInfo.setUserInfo(data);
        popupProfile.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
popupProfile.setEventListeners();

const popupAvatar = new PopupWithForm(
  '.popup_avatar',
  (getAvatar) => {
    api.setProfile('users/me/avatar', getAvatar)
      .then((ava) => {
        Promise.resolve(popupAvatar.changeSaveButton());
        setAvatar(ava.avatar);
        popupAvatar.close();
      })
      .catch((err) => {
        console.log(err);
      });
  }
);
popupAvatar.setEventListeners();


//=======functions=========
const handleCardClick = (cardName, cardLink) => {
  bigImage.open(cardName, cardLink);
}

const setAvatar = (avatarLink) => {
  avatarImage.setAttribute('src', avatarLink);
}

//--------enable validation----------
const profileFormValidate = new FormValidator(validationList, profileForm);
profileFormValidate.enableValidation();

const cardFormValidate = new FormValidator(validationList, cardForm);
cardFormValidate.enableValidation();

const avatarFormValidate = new FormValidator(validationList, avatarForm);
avatarFormValidate.enableValidation();


//==========buttons listeners===========

cardAddButton.addEventListener('click', () => {
  popupCardForm.open();
  cardFormValidate.resetValidation();
})

avatarChangeButton.addEventListener('click', () => {
  popupAvatar.open();
  avatarFormValidate.resetValidation();
})

profileOpenButton.addEventListener('click', () => {
  popupProfile.open();
  const oldProfile = userInfo.getUserInfo();
  inputName.value = oldProfile.name;
  inputnDescript.value = oldProfile.about;
  profileFormValidate.resetValidation();
})

