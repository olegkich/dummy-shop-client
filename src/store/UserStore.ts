import { makeAutoObservable } from "mobx";
import { User } from "../types";

export default class UserStore {
    _isAuth: boolean;
    _user: User;

    constructor() {
        this._isAuth = false;
        this._user = {};
        makeAutoObservable(this);
    }

    setIsAuth(bool: boolean) {
        this._isAuth = bool;
    }

    setUser(user: User) {
        this._user = user;
    }

    get isAuth() {
        return this._isAuth;
    }

    get user() {
        return this._user;
    }
}
