import {makeAutoObservable} from "mobx";


export type Type = {
  id: number,
  name: string,
}
export type DeviceType = Type & {
  brandId: number,
  createdAt: string,
  img: string,
  info: []
  price: number,
  rating: number,
  typeId: number,
  updatedAt: string,
}
export type SelectedType = Partial<Omit<Type, 'name'>>

export class DeviceStore {
  private types: Type[];
  private brands: Type[];
  private device: DeviceType[];
  private selectedType: Type | null;
  private selectedBrand: Type | null;
  private selectedDescribe: SelectedType;

  constructor() {
    this.types = [
      // {id: 1, name: 'Холодильники'},
      // {id: 2, name: 'Smarts'},
      // {id: 3, name: 'Laptop'},
      // {id: 4, name: 'TV'}
    ]
    this.brands = [
      // {id: 1, name: 'Samsung'},
      // {id: 2, name: 'Apple'},
      // {id: 3, name: 'Lenovo'},
      // {id: 4, name: 'Asus'},
    ]
    this.device = [
      // {
      //   id: 1,
      //   name: 'Iphone 12 pro',
      //   price: 25000,
      //   rating: 5,
      //   img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      // },
      // {
      //   id: 2,
      //   name: 'Iphone 12 pro',
      //   price: 25000,
      //   rating: 5,
      //   img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      // },
      // {
      //   id: 3,
      //   name: 'Iphone 12 pro',
      //   price: 25000,
      //   rating: 5,
      //   img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      // },
      // {
      //   id: 4,
      //   name: 'Iphone 12 pro',
      //   price: 25000,
      //   rating: 5,
      //   img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      // },
    ]
    this.selectedType = {} as Type
    this.selectedBrand = {} as Type
    this.selectedDescribe = {id: 1}

    makeAutoObservable(this)
  }

  setTypes(types: any) {
    this.types = types
  }

  setBrands(brands: any) {
    this.brands = brands
  }

  setDevice(device: any) {
    this.device = device
  }

  setSelectedType = (type: Type) => {
    this.selectedType = type
  }

  setSelectedBrand = (type: Type) => {
    this.selectedBrand = type
  }
  setSelectedDescribe = (type: SelectedType) => {
    this.selectedDescribe = type
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

  get getSelectedType() {
    return this.selectedType
  }

  get getSelectedBrand() {
    return this.selectedBrand
  }

  get getSelectedDescribe() {
    return this.selectedDescribe
  }
}