export class Card {
    constructor(item, selectorTemplate, handleCardClick, {handleCardDelete, delLike, addLike}, myId) {
        this._newCardName = item.name;
        this._imageLink = item.link;
        this._getLikes = item.likes;
        this._cardId = item._id;
        this._ownerId = item.owner._id;
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

    _deleteImage = (evt) => {
        this._handleCardDelete(this._cardId,evt);
    }
    delCard=(evt)=>{
    
        this._cardTemplate = null;
        evt.target.closest('.card').remove();

    }

    _addEvents = () => {
        if (this._ownerId == myId) {
            this._cardRemove.addEventListener('click', this._deleteImage);
        }
        else {
            this._cardRemove.classList.remove('card__remove');
        }

        this._cardLike.addEventListener('click', () => {
            if (this._like) {
                this._delLike(this._cardId);
            }
            else {
                this._addLike(this._cardId);
            }
            this._cardLike.classList.toggle('card__like_active');
        });
        this._cardImage.addEventListener('click', () => {
            this._handleCardClick(this._newCardName, this._imageLink);
        });
    }
    _checkLikes = () => {
        if (this._getLikes.length > 0) {
            const isLike = this._getLikes.find(item => item._id == this._myId);
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
        this._getLikes=likes;
        this._checkLikes();
        this._addLikeCounter(this._getLikes.length)
    }

    makeCard() {
        this._cardTemplate = this._getTemplate();
        this._cardImage = this._cardTemplate.querySelector('.card__image');
        this._cardName = this._cardTemplate.querySelector('.card__name');
        this._cardRemove = this._cardTemplate.querySelector('.card__remove');
        this._cardLike = this._cardTemplate.querySelector('.card__like');
        this._likeNumber = this._cardTemplate.querySelector('.card__like-count');
        this._checkLikes();
        this._addLikeCounter(this._getLikes.length);
        this._cardImage.setAttribute('src', this._imageLink);
        this._cardImage.setAttribute('alt', 'Фото из галереи: ' + this._newCardName);
        this._cardName.textContent = this._newCardName;
        this._addEvents();
        return this._cardTemplate;
    }
}