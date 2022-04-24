
import { cardTemplate } from "./index.js"; 
export class Card {
    constructor(newCardName, imageLink) {
        this._newCardName = newCardName;
        this._imageLink = imageLink;
    }
    
    _toggleLike=(cardLike)=> {
        cardLike.classList.toggle('card__like_active');
    }
    _deleteImage=(evt)=> {
        evt.target.closest('.card').remove();
    }

    render() {
        const cardImage = cardTemplate.querySelector('.card__image');
        const cardName = cardTemplate.querySelector('.card__name');
        const cardRemove = cardTemplate.querySelector('.card__remove');
        const cardLike = cardTemplate.querySelector('.card__like');
        cardImage.setAttribute('src', _imageLink);
        cardImage.setAttribute('alt', 'Фото из галереи: ' + _newCardName);
        cardName.textContent = _newCardName;
        cardRemove.addEventListener('click', _deleteImage);
        cardLike.addEventListener('click', () => {
            toggleLike(cardLike);
        });
        cardImage.addEventListener('click', () => {
            openImage(_newCardName, _imageLink);
        });
    }
}