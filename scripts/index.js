const initialCards = [
  {
    name: 'Байкал',
    link: 'https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Алтай',
    link: 'https://images.unsplash.com/photo-1632154030737-b15df986ee37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80'
  },
  {
    name: 'Йошкар-Ола',
    link: 'https://images.unsplash.com/photo-1591996686974-2e2f871e3c09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Великий Новгород',
    link: 'https://upload.wikimedia.org/wikipedia/commons/0/0f/%D0%A1%D0%BE%D1%84%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F-%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.jpg'
  },
  {
    name: 'Крым',
    link: 'https://images.unsplash.com/photo-1634033636079-3b05184ab227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  },
  {
    name: 'Скалы Мохер',
    link: 'https://images.unsplash.com/photo-1500456759136-362ab38eec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80'
  }
]

const main = document.querySelector('.gallery');
const photos = main.querySelector('.photos');

const popupProfile = document.querySelector('.popup_editor');
const popupNewImage = document.querySelector('.popup_adder');
const popupBigImage = document.querySelector('.popup_big-image');
const popups = document.querySelectorAll('.popup');
const closePopupButtons = document.querySelectorAll('.popup__close');
const profileName = main.querySelector('.profile__name');
const profileDescript = main.querySelector('.profile__description');
const returnName = popupProfile.querySelector('.popup__input_type_name');
const returnDescript = popupProfile.querySelector('.popup__input_type_description');
const newTitle = popupNewImage.querySelector('.popup__input_type_title');
const newLink = popupNewImage.querySelector('.popup__input_type_link');
const bigImage = popupBigImage.querySelector('.popup__image');
const bigImageCaption = popupBigImage.querySelector('.popup__image-caption');

//-----buttons-------
const profileOpenButton = main.querySelector('.profile__edit-button');
const profileAddButton = main.querySelector('.profile__add-button');
const popupProfileSubmit = popupProfile.querySelector('.popup__inputs[name="profile"]');
const popupNewImageSubmit = popupNewImage.querySelector('.popup__inputs[name="add-image"]');

//-----functions-----
const openPopup = (popup) => {
  popup.classList.add('popup_active');
}
const closePopup = (popup) => {
  popup.classList.remove('popup_active');
  if (popup.classList.contains('popup_dark-shadow')) {
    popup.classList.remove('popup_dark-shadow');
  }
}

function openPopupProfile() {
  openPopup(popupProfile);
  returnName.value = profileName.textContent;
  returnDescript.value = profileDescript.textContent;
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
  newTitle.value = null;
  newLink.value = null;
}

function openImage(newCardName, imageLink) {
  openPopup(popupBigImage);
  popupBigImage.classList.add('popup_dark-shadow');
  bigImage.setAttribute('src', imageLink);
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
popupProfileSubmit.addEventListener('submit', saveProfile);
popupNewImageSubmit.addEventListener('submit', renderCard);
profileOpenButton.addEventListener('click', openPopupProfile)
profileAddButton.addEventListener('click', function () {
  openPopup(popupNewImage);
});

popups.forEach(function (item, id) {
  closePopupButtons[id].addEventListener('click', function () {
    closePopup(item);
  });
  item.addEventListener('click', closePopupByBackground);
});