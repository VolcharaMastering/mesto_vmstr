import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
        this._bigImage = this._popup.querySelector('.popup__image');
        this._bigImageCaption=this._popup.querySelector('.popup__image-caption');
    }

    open = (name, link) => {
        this._bigImage.setAttribute('src', link);
        this._bigImage.setAttribute('alt', 'Увеличенное фото из галереи: ' + name);
        this._bigImageCaption.textContent = name;
        super.open();
    }
}

