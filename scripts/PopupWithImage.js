import { Popup } from "./Popup.js";

export class PopupWithImage extends Popup {
    constructor(selector) {
        super(selector);
    }

    open = (name, link) => {
        this._bigImage = this._selector.querySelector('.popup__image');
        this._bigImage.setAttribute('src', link);
        this._bigImage.setAttribute('alt', 'Увеличенное фото из галереи: ' + name);
        this._selector.querySelector('.popup__image-caption').textContent = name;
        super.open();
    }
}

