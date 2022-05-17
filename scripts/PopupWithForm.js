import { Popup } from "./Popup";

export class PopupWithForm extends Popup{
    constructor(selector,submitForm){
        super(selector);
        this._submitForm=submitForm;
    }

    _getInputValues(){
        const newTitle = this._selector.elements.title;
        const newLink = this._selector.elements.link;
    }

    setEventListeners(){
        super.setEventListeners;
        
    }
    
    close(){

    }
}