import {makeAutoObservable} from "mobx";

export class AuthStore {
  private isAuth;
  private user;

  constructor() {
    this.isAuth = false
    this.user = {}
    makeAutoObservable(this)
  }

  setIsAuth(value: boolean) {
    this.isAuth = value
  }

  setUser(user: any) {
    this.user = user
  }

  get getIsAuth() {
    return this.isAuth
  }

  get getUser() {
    return this.user
  }
}