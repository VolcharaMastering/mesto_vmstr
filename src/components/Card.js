export class Card {
    constructor(item, selectorTemplate, handleCardClick, delLike,addLike,myId) {
        this._newCardName = item.name;
        this._imageLink = item.link;
        this._getLikes = item.likes;
        this._cardId = item._id;
        this._selector = selectorTemplate;
        this._handleCardClick = handleCardClick;
        this._delLike = delLike;
        this._addLike=addLike;
        this._myId=myId;
        this._like=false;
    }

    _getTemplate = () => {
        const cardTemplate = document
            .querySelector(this._selector)
            .content.cloneNode(true);
        return cardTemplate;
    }

    _deleteImage = (evt) => {
        this._cardTemplate = null;
        evt.target.closest('.card').remove();
    }

    _addEvents = () => {
        this._cardRemove.addEventListener('click', this._deleteImage);
        this._cardLike.addEventListener('click', () => {
            if (this._like){
                this._getLikes =this._delLike(this._cardId);
                console.log(this._getLikes);
                // this._getLikes = newLikes;
                this._addLikeCounter();
            }
            else{
                this._getLikes =this._addLike(this._cardId);
                console.log(this._getLikes);
                // this._getLikes = newLikes;
                this._addLikeCounter();
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
            if (isLike != undefined) {
                this._cardLike.classList.add('card__like_active');
                this._like=true;
            }
        }
    }
    _addLikeCounter = () => {
        this._likeNumber.textContent = this._getLikes.length;
    };
    makeCard() {
        console.log('MyID='+this._myId);
        this._cardTemplate = this._getTemplate();

        this._cardImage = this._cardTemplate.querySelector('.card__image');
        this._cardName = this._cardTemplate.querySelector('.card__name');
        this._cardRemove = this._cardTemplate.querySelector('.card__remove');
        this._cardLike = this._cardTemplate.querySelector('.card__like');
        this._likeNumber = this._cardTemplate.querySelector('.card__like-count');
        this._checkLikes();
        this._addLikeCounter();
        this._cardImage.setAttribute('src', this._imageLink);
        this._cardImage.setAttribute('alt', 'Фото из галереи: ' + this._newCardName);
        this._cardName.textContent = this._newCardName;
        this._addEvents();
        return this._cardTemplate;
    }
}