export class Popup {
    constructor(selector){
        this._selector=document.querySelector(selector);
    }
    open = () => {
        this._selector.classList.add('popup_active');
        this._activateHandleEscapeKey();
    }

    close = () => {
        this._selector.classList.remove('popup_active');
        this._removeHandleEscapeKey();
    }

    _handleEscClose(){
        if (evt.key === 'Escape') {
            this.close();
    }
}

    _activateHandleEscapeKey = () => {
        document.addEventListener('keydown', this._handleEscClose);
    };
    
    _removeHandleEscapeKey = () => {
        document.removeEventListener('keydown', this._handleEscClose);
    };

    setEventListeners = () => {
        if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
            //const popupActive = document.querySelector('.popup_active');
            this.close();
        }
    }
}

/*     profileForm.addEventListener('submit', saveProfile);
      cardForm.addEventListener('submit', ()=>{
        addGalary.prepends(returnCard);
        addGalary.renderItems();
      });

      const openPopupProfile = () => {
        openPopup(popupProfile);
        returnName.value = profileName.textContent;
        returnDescript.value = profileDescript.textContent;
        profileFormValidate.resetValidation();
      } */