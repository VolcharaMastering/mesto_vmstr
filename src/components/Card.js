export class Card {
    constructor(item, selectorTemplate, handleCardClick, {handleCardDelete, delLike, addLike}, myId) {
        this._card=item;
        this._selector = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._handleCardDelete = handleCardDelete;
        this._delLike = delLike;
        this._addLike = addLike;
        this._myId = myId;
        this._like = false;
    }

    _getTemplate = () => {
        const cardTemplate = document
            .querySelector(this._selector)
            .content.cloneNode(true);
        return cardTemplate;
    }

    _deleteImage = () => {
        this._handleCardDelete(this._card);
    }
    delCard(){
        this._cardElement.remove();
        this._cardElement = null;

    }

    _addEvents = () => {
        if (this._card.owner._id == this._myId) {
            this._cardRemove.addEventListener('click', this._deleteImage);
        }
        else {
            this._cardRemove.remove();
            this._cardRemove = null;
        }

        this._cardLike.addEventListener('click', () => {
            if (this._like) {
                this._delLike(this._card._id);
            }
            else {
                this._addLike(this._card._id);
            }
            this._cardLike.classList.toggle('card__like_active');
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._card.name, this._card.link);
        });
    }
    _checkLikes = () => {
        if (this._card.likes.length > 0) {
            const isLike = this._card.likes.find(item => item._id == this._myId);
            if (isLike) {
                this._cardLike.classList.add('card__like_active');
                this._like = true;
            }            else {
                this._like = false;
            }
        }else {
            this._like = false;
        }
    }
    _addLikeCounter = (counter) => {
        this._likeNumber.textContent = counter;
    };

    updateLikes=(likes) =>{
        this._card.likes=likes;
        this._checkLikes();
        this._addLikeCounter(this._card.likes.length)
    }

    makeCard() {
        this._cardTemplate = this._getTemplate();
        this._cardElement=this._cardTemplate.querySelector('.card');
        this._cardImage = this._cardTemplate.querySelector('.card__image');
        this._cardName = this._cardTemplate.querySelector('.card__name');
        this._cardRemove = this._cardTemplate.querySelector('.card__remove');
        this._cardLike = this._cardTemplate.querySelector('.card__like');
        this._likeNumber = this._cardTemplate.querySelector('.card__like-count');
        this._checkLikes();
        this._addLikeCounter(this._card.likes.length);
        this._cardImage.setAttribute('src', this._card.link);
        this._cardImage.setAttribute('alt', 'Фото из галереи: ' + this._card.name);
        this._cardName.textContent = this._card.name;
        this._addEvents();
        return this._cardTemplate;
    }
}