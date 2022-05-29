(()=>{"use strict";var e={activeForm:".popup__inputs",formInput:".popup__input",popupSaveButton:".popup__save",popupDisableButton:"popup__save_disable",inputError:"popup__input_type_error",activeError:"popup__input_error_active"},t=document.querySelector(".gallery"),n=document.forms.profile,r=document.forms.addImage;function o(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var a=function(){function e(t,n,r){var o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),i(this,"_getTemplate",(function(){return document.querySelector(o._selector).content.cloneNode(!0)})),i(this,"_toggleLike",(function(){o._cardLike.classList.toggle("card__like_active")})),i(this,"_deleteImage",(function(e){o._cardTemplate=null,e.target.closest(".card").remove()})),i(this,"_addEvents",(function(){o._cardRemove.addEventListener("click",o._deleteImage),o._cardLike.addEventListener("click",(function(){o._toggleLike(o._cardLike)})),o._cardImage.addEventListener("click",(function(){o._handleCardClick(o._newCardName,o._imageLink)}))})),this._newCardName=t.name,this._imageLink=t.link,this._selector=n,this._handleCardClick=r}var t,n;return t=e,(n=[{key:"makeCard",value:function(){return this._cardTemplate=this._getTemplate(),this._cardImage=this._cardTemplate.querySelector(".card__image"),this._cardName=this._cardTemplate.querySelector(".card__name"),this._cardRemove=this._cardTemplate.querySelector(".card__remove"),this._cardLike=this._cardTemplate.querySelector(".card__like"),this._cardImage.setAttribute("src",this._imageLink),this._cardImage.setAttribute("alt","Фото из галереи: "+this._newCardName),this._cardName.textContent=this._newCardName,this._addEvents(),this._cardTemplate}}])&&o(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function u(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var c=function(){function e(t,n){var r=t.items,o=t.renderer;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._items=r,this._renderer=o,this._container=document.querySelector(n)}var t,n;return t=e,(n=[{key:"clear",value:function(){this._container.innerHTML=""}},{key:"renderItems",value:function(){var e=this;this.clear(),this._items.forEach((function(t){return e._renderer(t)}))}},{key:"prepends",value:function(e){this._container.prepend(e)}},{key:"appends",value:function(e){this._container.append(e)}}])&&u(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function p(e,t,n){return t&&s(e.prototype,t),n&&s(e,n),Object.defineProperty(e,"prototype",{writable:!1}),e}function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var f=p((function e(t,n){var r=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,"_setEventListeners",(function(){r._toggleButtonState(),r._inputArray.forEach((function(e){e.addEventListener("input",(function(){r._checkInputValidity(e),r._toggleButtonState()}))}))})),l(this,"enableValidation",(function(){r._setEventListeners()})),l(this,"_showInputError",(function(e,t){var n=r._form.querySelector(".".concat(e.id,"-error"));e.classList.add(r._inputError),n.classList.add(r._activeError),n.textContent=t})),l(this,"_hideInputError",(function(e){var t=r._form.querySelector(".".concat(e.id,"-error"));e.classList.remove(r._inputError),t.classList.remove(r._activeError),t.textContent=""})),l(this,"_checkInputValidity",(function(e){e.validity.valid?r._hideInputError(e):r._showInputError(e,e.validationMessage)})),l(this,"_hasInvalidInput",(function(){return r._inputArray.some((function(e){return!e.validity.valid}))})),l(this,"_toggleButtonState",(function(){r._hasInvalidInput()?(r._saveButton.classList.add(r._popupDisableButton),r._saveButton.setAttribute("disabled","disabled")):(r._saveButton.classList.remove(r._popupDisableButton),r._saveButton.removeAttribute("disabled"))})),l(this,"resetValidation",(function(){r._toggleButtonState(),r._inputArray.forEach((function(e){r._hideInputError(e)}))})),this._activeForm=t.activeForm,this._formInput=t.formInput,this._popupSaveButton=t.popupSaveButton,this._popupDisableButton=t.popupDisableButton,this._inputError=t.inputError,this._activeError=t.activeError,this._form=n,this._inputArray=Array.from(this._form.querySelectorAll(this._formInput)),this._saveButton=this._form.querySelector(this._popupSaveButton)}));function d(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var _=function(){function e(t){var n,r,o=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),r=function(){document.addEventListener("keydown",o._escCloseListen=function(e){"Escape"===e.key&&o.close()})},(n="_handleEscClose")in this?Object.defineProperty(this,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):this[n]=r,this._popup=document.querySelector(t)}var t,n;return t=e,(n=[{key:"open",value:function(){this._popup.classList.add("popup_active"),this._handleEscClose()}},{key:"close",value:function(){this._popup.classList.remove("popup_active"),document.removeEventListener("keydown",this._escCloseListen)}},{key:"setEventListeners",value:function(){var e=this;this._popup.addEventListener("click",this._closeListener=function(t){(t.target===t.currentTarget||t.target.classList.contains("popup__close"))&&e.close()})}}])&&d(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}();function y(e){return y="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},y(e)}function h(e,t){return h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},h(e,t)}function m(e,t){if(t&&("object"===y(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return b(e)}function b(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function v(){return v="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=g(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},v.apply(this,arguments)}function g(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=w(e)););return e}function w(e){return w=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},w(e)}var E=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&h(e,t)}(i,e);var t,n,r,o=(n=i,r=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=w(n);if(r){var o=w(this).constructor;e=Reflect.construct(t,arguments,o)}else e=t.apply(this,arguments);return m(this,e)});function i(e){var t,n,r,a,u;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,i),u=function(e,r){n._bigImage.setAttribute("src",r),n._bigImage.setAttribute("alt","Увеличенное фото из галереи: "+e),n._bigImageCaption.textContent=e,v((t=b(n),w(i.prototype)),"open",t).call(t)},(a="open")in(r=b(n=o.call(this,e)))?Object.defineProperty(r,a,{value:u,enumerable:!0,configurable:!0,writable:!0}):r.open=u,n._bigImage=n._popup.querySelector(".popup__image"),n._bigImageCaption=n._popup.querySelector(".popup__image-caption"),n}return t=i,Object.defineProperty(t,"prototype",{writable:!1}),t}(_);function B(e){return B="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},B(e)}function D(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function k(){return k="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,n){var r=O(e,t);if(r){var o=Object.getOwnPropertyDescriptor(r,t);return o.get?o.get.call(arguments.length<3?e:n):o.value}},k.apply(this,arguments)}function O(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=L(e)););return e}function j(e,t){return j=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e},j(e,t)}function x(e,t){if(t&&("object"===B(t)||"function"==typeof t))return t;if(void 0!==t)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}function L(e){return L=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)},L(e)}var S=function(e){!function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&j(e,t)}(a,e);var t,n,r,o,i=(r=a,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(e){return!1}}(),function(){var e,t=L(r);if(o){var n=L(this).constructor;e=Reflect.construct(t,arguments,n)}else e=t.apply(this,arguments);return x(this,e)});function a(e,t){var n;return function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,a),(n=i.call(this,e))._form=n._popup.querySelector(".popup__inputs"),n._inputArray=n._popup.querySelectorAll(".popup__input"),n._submitForm=t,n}return t=a,(n=[{key:"_getInputValues",value:function(){var e={};return this._inputArray.forEach((function(t){e[t.name]=t.value})),e}},{key:"setEventListeners",value:function(){var e=this;this._form.addEventListener("submit",this._submitListener=function(t){t.preventDefault(),e._submitForm(e._getInputValues())}),k(L(a.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){k(L(a.prototype),"close",this).call(this),this._form.reset()}}])&&D(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),a}(_);function I(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var P=function(){function e(t){var n=t.userName,r=t.description;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this._name=document.querySelector(n),this._description=document.querySelector(r)}var t,n;return t=e,(n=[{key:"getUserInfo",value:function(){return{userName:this._name.textContent,descript:this._description.textContent}}},{key:"setUserInfo",value:function(e){this._name.textContent=e.name,this._description.textContent=e.description}}])&&I(t.prototype,n),Object.defineProperty(t,"prototype",{writable:!1}),e}(),C=n.elements.name,q=n.elements.description,A=t.querySelector(".profile__edit-button"),T=t.querySelector(".profile__add-button"),R=function(e,t){H.open(e,t)},M=function(e){return new a(e,".template-card",R).makeCard()},H=new E(".popup_big-image");H.setEventListeners();var V=new c({items:[{name:"Байкал",link:"https://images.unsplash.com/photo-1617835594990-7cd5a9b5d153?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Алтай",link:"https://images.unsplash.com/photo-1632154030737-b15df986ee37?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80"},{name:"Йошкар-Ола",link:"https://images.unsplash.com/photo-1591996686974-2e2f871e3c09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Великий Новгород",link:"https://upload.wikimedia.org/wikipedia/commons/0/0f/%D0%A1%D0%BE%D1%84%D0%B8%D0%B9%D1%81%D0%BA%D0%B0%D1%8F_%D0%BD%D0%B0%D0%B1%D0%B5%D1%80%D0%B5%D0%B6%D0%BD%D0%B0%D1%8F-%D0%92%D0%B5%D0%BB%D0%B8%D0%BA%D0%B8%D0%B9_%D0%9D%D0%BE%D0%B2%D0%B3%D0%BE%D1%80%D0%BE%D0%B4.jpg"},{name:"Крым",link:"https://images.unsplash.com/photo-1634033636079-3b05184ab227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"},{name:"Скалы Мохер",link:"https://images.unsplash.com/photo-1500456759136-362ab38eec6d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1169&q=80"}],renderer:function(e){var t=M(e);V.appends(t)}},".photos");V.renderItems();var N=new S(".popup_adder",(function(e){var t=M(e);V.prepends(t),N.close()}));N.setEventListeners();var G=new P({userName:".profile__name",description:".profile__description"}),F=new S(".popup_editor",(function(e){G.setUserInfo(e),F.close()}));F.setEventListeners();var W=new f(e,n);W.enableValidation();var Y=new f(e,r);Y.enableValidation(),T.addEventListener("click",(function(){N.open(),Y.resetValidation()})),A.addEventListener("click",(function(){F.open();var e=G.getUserInfo();C.value=e.userName,q.value=e.descript,W.resetValidation()}))})();