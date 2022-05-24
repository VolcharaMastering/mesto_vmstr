export class Popup {
    constructor(selector) {
        this._popup = document.querySelector(selector);
    }
    open() {
        this._popup.classList.add('popup_active');
        this._handleEscClose();
    }

    close() {
        this._popup.classList.remove('popup_active');
        document.removeEventListener('keydown', this._escCloseListen);
    }

    _handleEscClose = () => {
        document.addEventListener('keydown', this._escCloseListen = (evt) => {
            if (evt.key === 'Escape') {
                this.close();
            }
        });
    }

    setEventListeners() {
        this._popup.addEventListener('click', this._closeListener = (evt) => {
            if (evt.target === evt.currentTarget || evt.target.classList.contains('popup__close')) {
                this.close();
            }
        });
    }
}
