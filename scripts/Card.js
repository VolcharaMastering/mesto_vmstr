import { PopupWithImage } from "./PopupWithImage.js";

export class Card {
    constructor(item, selectorTemplate,handleCardClick) {
        this._newCardName = item.name;
        this._imageLink = item.link;
        this._selector = selectorTemplate;
        this._handleCardClick=handleCardClick;
    }

    _getTemplate = () => {
        const cardTemplate = document
            .querySelector(this._selector)
            .content.cloneNode(true);
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
            this._handleCardClick(this._newCardName,this._imageLink);
        });
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