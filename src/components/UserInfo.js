export class UserInfo {
    constructor({ name, about, avatar }) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
        this._avatar= document.querySelector(avatar);
    }
    getUserInfo() {
        const getInfo = {
            name: this._name.textContent,
            about: this._about.textContent
        };
        return getInfo;
    }

    setUserInfo(newData) {
        this._name.textContent = newData.name;
        this._about.textContent = newData.about;
        this._avatar.setAttribute('src', newData.avatar);
    }

}