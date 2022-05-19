import { Popup } from "./Popup.js";

export class PopupWithForm extends Popup{
    constructor(selector,submitForm){
        super(selector);
        this._form=this._selector.querySelector('.popup__inputs');
        this._submitForm=submitForm;
        console.log(this._submitForm);
    }

    _submitFormHandler=(evt)=>{
        evt.preventDefault();
        this._submitForm(this._getInputValues);
    }
    _getInputValues(){
        const newTitle = this._selector.elements.title;
        const newLink = this._selector.elements.link;
    }

    setEventListeners(evt){
        super.setEventListeners();
        this._form.addEventListener('submit', (evt)=>{
            evt.preventDefault();
            // this._submitFormHandler(evt)
            this._submitForm(this._getInputValues);
    });
    }
    
    close(){
        super.close();
        this._form.reset();
    }
}