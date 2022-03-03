const popup=document.querySelector('.popup');
const profileOpenButton=document.querySelector('.edit-button');
const profileCloseButton=popup.querySelector('.popup__close');

let profileName=document.querySelector('.profile__name');
let profileDescript=document.querySelector('.profile__description');


let popupName=popup.querySelector('.popup__name');
let popupDescript=popup.querySelector('.popup__description');


function togglePopup(){
    let userName=profileName.textContent;
    let userProfile=profileDescript.textContent;
    popupName.value=userName;
    popupDescript.value=userProfile;
    popup.classList.toggle('popup_active');
}
profileOpenButton.addEventListener('click',togglePopup);
function closePopup(){
    popup.classList.remove('popup_active');
}
profileCloseButton.addEventListener('click',closePopup);

function saveProfile(evt){
    evt.preventDefault();
    profileName.textContent=popupName.value;
    profileDescript.textContent=popupDescript.value;
    popup.classList.remove('popup_active');
}

let popupSaveButton=popup.querySelector('.popup__profile');
popupSaveButton.addEventListener('submit',saveProfile);