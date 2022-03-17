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
const photos=document.querySelector('.photos');

//-----make cards-----
let createCard=(cardName,imageLink)=>{
  const card=document.querySelector('.template-card').content.cloneNode(true);
  card.querySelector('.card__image').setAttribute('src',imageLink);
  card.querySelector('.card__name').textContent=cardName;
  photos.prepend(card);
};

initialCards.forEach(item=>{
  createCard(item.name,item.link);
});
//----------

//variables
const popupEdit=document.querySelector('.popup-editor').content.firstElementChild.cloneNode(true);
const popupAdd=document.querySelector('.popup-adder').content.firstElementChild.cloneNode(true);
const popupImage=document.querySelector('.popup-image').content.firstElementChild.cloneNode(true);

let profileName=main.querySelector('.profile__name');
let profileDescript=main.querySelector('.profile__description');
let returnName=popupEdit.querySelector('.popup__input_type_name');
let returnDescript=popupEdit.querySelector('.popup__input_type_description');


//-----buttons-------
const profileOpenButton=main.querySelector('.profile__edit-button');
const profileAddButton=main.querySelector('.profile__add-button');
const popupSaveButton=popupEdit.querySelector('.popup__inputs');
const popupAddButton=popupEdit.querySelector('.popup__inputs');

//-----functions-----
closePopup=(evt)=>{
  evt.target.closest('.popup').remove();
}

function openPopupEdit(){
  returnName.value=profileName.textContent;
  returnDescript.value=profileDescript.textContent;
  main.append(popupEdit);
  //const profileCloseButton=;
  popupEdit.querySelector('.popup__close').addEventListener('click',closePopup);
  popupEdit.addEventListener('click',function(evt){
    if (evt.target === evt.currentTarget){
        closePopup(evt);
    }
  });
  return popupEdit;
}
function saveProfile(evt){
  evt.preventDefault();
  profileName.textContent=returnName.value;
  profileDescript.textContent=returnDescript.value;
  closePopup(evt);
}
let newTitle;
let newLink;
function openPopupAdd(){
  main.append(popupAdd);
  newTitle=document.querySelector('.popup__input_type_title').textContent;
  newLink=document.querySelector('.popup__input_type_link').textContent;
  popupAdd.querySelector('.popup__close').addEventListener('click',closePopup);
  popupAdd.addEventListener('click',function(evt){
    if (evt.target === evt.currentTarget){
        closePopup(evt);
    }
  });
  popupAddButton.addEventListener('click', () => {renderCard(evt);},false);
  return popupAdd;
}

function renderCard(evt) {
  evt.preventDefault();
  const card=document.querySelector('.template-card').content.cloneNode(true);
  card.querySelector('.card__image').setAttribute('src',newLink);
  card.querySelector('.card__name').textContent=newTitle;
  photos.prepend(card);
  closePopup(evt);
}





//---Clicks------

popupSaveButton.addEventListener('submit',saveProfile);
profileOpenButton.addEventListener('click',openPopupEdit);
profileAddButton.addEventListener('click',openPopupAdd);







//;











