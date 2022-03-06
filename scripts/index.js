const popup=document.querySelector('.popup');
const profileOpenButton=document.querySelector('.profile__edit-button');
const profileCloseButton=popup.querySelector('.popup__close');

let profileName=document.querySelector('.profile__name');
let profileDescript=document.querySelector('.profile__description');
let popupName=popup.querySelector('.popup__input_type_name');
let popupDescript=popup.querySelector('.popup__input_type_description');
let popupSaveButton=popup.querySelector('.popup__inputs');

function togglePopup(){
    let userName=profileName.textContent;
    let userProfile=profileDescript.textContent;
    popupName.value=userName;
    popupDescript.value=userProfile;
    popup.classList.toggle('popup_active');
}
function closePopup(){
    popup.classList.remove('popup_active');
}
function saveProfile(evt){
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileDescript.textContent=popupDescript.value;
    closePopup();
}

profileOpenButton.addEventListener('click',togglePopup);
profileCloseButton.addEventListener('click',closePopup);
popupSaveButton.addEventListener('submit',saveProfile);
popup.addEventListener('click',function(event){
    if (event.target === event.currentTarget){
        closePopup();
    }
});