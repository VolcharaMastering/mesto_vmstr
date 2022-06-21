import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._pressYes = () => { };
        this._yesButton=this._popup.querySelector('.popup__ok');
    }

    setSubmitAction = (action) => {
        this._pressYess = action();
        console.log("ACTION");
    }
    setEventListeners(){
        super.setEventListeners();
        this._yesButton.addEventListener('click',(evt)=>{
            console.log("buttonPressed");
            evt.preventDefault();
            this.setSubmitAction();
        })
    }
}