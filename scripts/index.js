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


const galary=document.querySelector('.photos');

let createCard=(cardName,imageLink)=>{
  const card=document.querySelector('.template-card').content.cloneNode(true);
  card.querySelector('.card__image').setAttribute('src',imageLink);
  card.querySelector('.card__name').textContent=cardName;
  galary.append(card);
};

initialCards.forEach(item=>{
  createCard(item.name,item.link);
});

const profileOpenButton=document.querySelector('.profile__edit-button');
const profileAddButton=document.querySelector('.profile__add-button');
//createCard(newName,newLink);

function openPopupEdit(){
  const popupEdit=document.querySelector('.popup_editor').cloneNode(true);
  console.log(popupEdit);
  let userName=popupEdit.querySelector('.popup__input_type_name').textContent;
  let userProfile=popupEdit.querySelector('.popup__input_type_description').textContent;
  popupName.value=userName;
  popupDescript.value=userProfile;
  'body'.append(popupEdit);
  return popupEdit;
}

const profileCloseButton=document.querySelector('.popup__close');

let profileName=document.querySelector('.profile__name');
let profileDescript=document.querySelector('.profile__description');

const popupName=document.querySelector('.popup__input_type_name');
const popupDescript=document.querySelector('.popup__input_type_description');

const popupTitle=document.querySelector('.popup__input_type_title');
const popupLink=document.querySelector('.popup__input_type_link');

const popupSaveButton=document.querySelector('.popup__inputs');


function openPopupAdd(){

}
function closePopup(evt){
  evt.target.closest('.popup').remove();
}
function saveProfile(evt){
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileDescript.textContent=popupDescript.value;
    closePopup();
}

profileOpenButton.addEventListener('click',openPopupEdit);
profileAddButton.addEventListener('click',openPopupAdd);
profileCloseButton.addEventListener('click',closePopup);
popupSaveButton.addEventListener('submit',saveProfile);
popup.addEventListener('click',function(event){
    if (event.target === event.currentTarget){
        closePopup();
    }
});