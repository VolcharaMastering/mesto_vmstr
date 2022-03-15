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
      name: 'Фото из галереи',
      link: 'https://images.unsplash.com/photo-1634033636079-3b05184ab227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
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


const card=document.querySelectorAll('.card');
//let cardArray=Array.from(card);

console.log(initialCards[0].link);
for (let i=0; i<=initialCards.length;i++){
    card[i].querySelector('.card__image').setAttribute('src',initialCards[i].link);
    card[i].querySelector('.card__name').textContent=initialCards[i].name;
};

const popup=document.querySelector('.popup');
const profileOpenButton=document.querySelector('.profile__edit-button');
const profileAddButton=document.querySelector('.profile__add-button');
const profileCloseButton=popup.querySelector('.popup__close');

let profileName=document.querySelector('.profile__name');
let profileDescript=document.querySelector('.profile__description');
const popupName=popup.querySelector('.popup__input_type_name');
const popupDescript=popup.querySelector('.popup__input_type_description');
const popupTitle=popup.querySelector('.popup__input_type_title');
const popupLink=popup.querySelector('.popup__input_type_link');
const popupSaveButton=popup.querySelector('.popup__inputs');

function openPopupEdit(){
    let userName=profileName.textContent;
    let userProfile=profileDescript.textContent;
    popupName.value=userName;
    popupDescript.value=userProfile;
    popupName.removeAttribute('hidden');
    popupDescript.removeAttribute('hidden');
    popup.classList.add('popup_active');
}
function openPopupAdd(){
    popupTitle.removeAttribute('hidden');
    popupLink.removeAttribute('hidden');
    popup.classList.add('popup_active');
}
function closePopup(){
    popup.classList.remove('popup_active');
    popupTitle.setAttribute('hidden','hidden');
    popupLink.setAttribute('hidden','hidden');
    popupName.setAttribute('hidden','hidden');
    popupDescript.setAttribute('hidden','hidden');
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