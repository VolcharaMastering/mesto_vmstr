import { Popup } from "./Popup";

export class PopupWithForm extends Popup{
    constructor(selector,submitButton){
        super(selector);
        this._submitButton=submitButton;
    }

    _getInputValues(){
        const newTitle = this._selector.elements.title;
        const newLink = this._selector.elements.link;
    }

    setEventListeners(){

    }
    
    close(){

    }
}