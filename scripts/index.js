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