import {makeAutoObservable} from "mobx";

export class DeviceStore {
  private types;
  private brands;
  private device;

  constructor() {
    this.types = [
      {id:1, name: 'Холодильники'},
      {id:2, name: 'Smarts'},
      {id:3, name: 'Laptop'},
      {id:4, name: 'TV'}
    ]
    this.brands = [
      {id:1, name: 'Samsung'},
      {id:2, name: 'Apple'}
    ]
    this.device = [
      {id:1, name: 'Iphone 12 pro', price: 25000, rating: 5, img:''},
      {id:2, name: 'Iphone 12 pro', price: 25000, rating: 5, img:''},
      {id:3, name: 'Iphone 12 pro', price: 25000, rating: 5, img:''},
      {id:4, name: 'Iphone 12 pro', price: 25000, rating: 5, img:''},
    ]
    makeAutoObservable(this)
  }

  setTypes(types:any) {
    this.types = types
  }

  setBrands(brands: any) {
    this.brands = brands
  }
  setDevice(device: any) {
    this.device = device
  }

  get getTypes() {
    return this.types
  }

  get getBrands() {
    return this.brands
  }

  get getDevice() {
    return this.device
  }
}