import { Popup } from "./Popup.js";

export class PopupConfirm extends Popup {
    constructor(selector) {
        super(selector);
        this._pressYes = () => { };
    }

    setSubmitAction = (action) => {
        this._pressYess = action;
        console.log("ACTION");
    }
}