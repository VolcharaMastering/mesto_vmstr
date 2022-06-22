export class UserInfo {
    constructor({ name, about }) {
        this._name = document.querySelector(name);
        this._about = document.querySelector(about);
    }
    getUserInfo() {
        const getInfo = {
            name: this._name.textContent,
            about: this._about.textContent
        };
        return getInfo;
    }

    setUserInfo(newInputs) {
        this._name.textContent = newInputs.name;
        this._about.textContent = newInputs.about;
    }
}