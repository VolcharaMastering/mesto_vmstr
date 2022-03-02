const popup=document.querySelector('.popup');
const profileOpenButton=document.querySelector('.edit-button');
const profileCloseButton=popup.querySelector('.popup__close');
let name=document.querySelector('.profile__name');
let descript=document.querySelector('.profile__description');


function togglePopup(){
    popup.classList.toggle('popup_active');
}
profileOpenButton.addEventListener('click',togglePopup);
profileCloseButton.addEventListener('click',togglePopup);

//console.log(profile);