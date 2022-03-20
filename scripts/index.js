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

const main=document.querySelector('.gallery');
const photos=main.querySelector('.photos');
const popup=document.querySelector('.popup');

const popupProfile=document.querySelector('.popup__editor');
const popupNewImage=document.querySelector('.popup__adder');
const popupBigImage=document.querySelector('.popup__image');
const closePopupButtons=document.querySelectorAll('.popup__close');

let profileName=main.querySelector('.profile__name');
let profileDescript=main.querySelector('.profile__description');

let returnName=popupProfile.querySelector('.popup__input_type_name');
let returnDescript=popupProfile.querySelector('.popup__input_type_description');

let newTitle=popupNewImage.querySelector('.popup__input_type_title');
let newLink=popupNewImage.querySelector('.popup__input_type_link');

//-----buttons-------
const profileOpenButton=main.querySelector('.profile__edit-button');
const profileAddButton=main.querySelector('.profile__add-button');
const popupSaveButton=popupProfile.querySelector('.popup__inputs');
const popupNewImageButton=popupNewImage.querySelector('.popup__inputs');

//-----functions-----
closePopup=(evt)=>{
  evt.target.closest('.popup').style.animation='damping .5s ease-in';
  setTimeout(function(){
    evt.target.closest('.popup').style.animation='';
    evt.target.closest('.popup').classList.remove('popup_active');
  },450);
}




function openPopupProfile(){
  popupProfile.classList.add('popup_active');
  returnName.value=profileName.textContent;
  returnDescript.value=profileDescript.textContent;

}
function saveProfile(evt){
  evt.preventDefault();
  profileName.textContent=returnName.value;
  profileDescript.textContent=returnDescript.value;
  closePopup(evt);
}

function renderCard(evt) {
  evt.preventDefault();
  const returnCard=createCard(newTitle.value,newLink.value);
  photos.prepend(returnCard);
  closePopup(evt);
}

function openPopupNewImage(){
  popupNewImage.classList.add('popup_active');
  newTitle.value=null;
  newLink.value=null;
}
function openImage(evt){
  popupBigImage.classList.add('popup_active');
  popupBigImage.style.backgroundColor = `rgba(0, 0, 0, .9)`;
  const imageLink=evt.currentTarget.getAttribute('src');
  const imageCaption=evt.currentTarget.getAttribute('alt');
  popupBigImage.querySelector('.popup__image').setAttribute('src',imageLink);
  popupBigImage.querySelector('.popup__image-caption').textContent=imageCaption;
}
function imageToTrash(evt){
  evt.target.closest('.card').remove();
}
function likeDislike(evt){
  if (evt.target.style.backgroundImage==='url("./images/like.svg")' || evt.target.style.backgroundImage===''){
    evt.target.style.backgroundImage='url("./images/likeSelected.svg")';
  }
  else{
    evt.target.style.backgroundImage='url("./images/like.svg")';
  }
}
let createCard=(cardName,imageLink)=>{
  const card=document.querySelector('.template-card').content.cloneNode(true);
  card.querySelector('.card__image').setAttribute('src',imageLink);
  card.querySelector('.card__image').setAttribute('alt',cardName);
  card.querySelector('.card__name').textContent=cardName;
  card.querySelector('.card__remove').addEventListener('click',imageToTrash);
  card.querySelector('.card__like').addEventListener('click',likeDislike);
  card.querySelector('.card__image').addEventListener('click',openImage);
  return card;
};
initialCards.forEach(item=>{
  const returnCard=createCard(item.name,item.link);
  photos.append(returnCard);
});


//---Clicks------
popupSaveButton.addEventListener('submit',saveProfile);
popupNewImageButton.addEventListener('submit',renderCard);
profileOpenButton.addEventListener('click',openPopupProfile);
profileAddButton.addEventListener('click',openPopupNewImage);
closePopupButtons.forEach(function (item){
  item.addEventListener('click',closePopup);
});

/*const popupActive=document.querySelector('.popup_active')
popupActive.addEventListener('click',function(evt){
  if (evt.target === evt.currentTarget){
      closePopup(evt);
  }
});*/