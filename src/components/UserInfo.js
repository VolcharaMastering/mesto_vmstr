export class UserInfo {
    constructor({ userName, description }) {
        this._name = document.querySelector(userName);
        this._description = document.querySelector(description);
    }
    getUserInfo() {
        const getInfo = {
            userName: this._name.textContent,
            descript: this._description.textContent
        };
        return getInfo;
    }

    setUserInfo(newInputs) {
        console.log(newInputs);
        this._name.textContent = newInputs.name;
        this._description.textContent = newInputs.description;
    }
}