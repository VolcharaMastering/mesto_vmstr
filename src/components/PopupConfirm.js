import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {

    setSubmitAction = (action) => {
        this._pressYess = action;
    }
    setEventListeners(){
        this._popup.querySelector('.popup__ok').addEventListener('click',(evt)=>{
            evt.preventDefault();
            this._pressYess();
        });
        super.setEventListeners();
    }
}