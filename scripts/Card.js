import { renderCard } from "./index.js";
export class Card {
    constructor(newCardName, imageLink) {
        this._newCardName = newCardName;
        this._imageLink = imageLink;
    }

    _getTemplate = () => {
        const cardTemplate = document
            .querySelector('.template-card')
            .content
            .cloneNode(true);
        return cardTemplate;
    }
    _toggleLike = () => {
        this._cardLike.classList.toggle('card__like_active');
    }
    _deleteImage = (evt) => {
        evt.target.closest('.card').remove();
    }
    _addEvents = () => {
        this._cardRemove.addEventListener('click', this._deleteImage);
        this._cardLike.addEventListener('click', () => {
            this._toggleLike(this._cardLike);
        });
        this._cardImage.addEventListener('click', () => {
            this._openImage();
        });
    }

    _openImage() {
        openPopup(popupBigImage);
        bigImage.setAttribute('src', this._imageLink);
        bigImage.setAttribute('alt', 'Увеличенное фото из галереи: ' + this._newCardName);
        bigImageCaption.textContent = this._newCardName;
    }

    makeCard() {
        this._cardTemplate = this._getTemplate();

        this._cardImage = this._cardTemplate.querySelector('.card__image');
        this._cardName = this._cardTemplate.querySelector('.card__name');
        this._cardRemove = this._cardTemplate.querySelector('.card__remove');
        this._cardLike = this._cardTemplate.querySelector('.card__like');
        this._cardImage.setAttribute('src', this._imageLink);
        this._cardImage.setAttribute('alt', 'Фото из галереи: ' + this._newCardName);
        this._cardName.textContent = this._newCardName;
        this._addEvents();
        return this._cardTemplate;

    }
}