import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(selector, pressOk) {
        super(selector);
        this._pressOk = pressOk;
    }

    setEventListeners() {
        const confirmButton = this._popup.querySelector('.popup__ok');
        confirmButton.addEventListener('click', () => {
            this._pressOk();
            this.close();
        });
        super.setEventListeners();
    }

}