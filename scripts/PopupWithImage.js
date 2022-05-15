import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup{
    constructor(selector){
        super(selector);
    }

    open = (name,link) => {
        super._selector.classList.add('popup_active');
        super._activateHandleEscapeKey();
        super._selector.setAttribute('src', link);
        super._selector.setAttribute('alt', 'Увеличенное фото из галереи: ' + name);
        super._selector.querySelector('.popup__image-caption').textContent = name;
    }
}

