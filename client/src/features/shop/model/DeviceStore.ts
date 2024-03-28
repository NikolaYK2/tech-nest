import {makeAutoObservable} from "mobx";


export type Type = {
  id: number,
  name: string,
}
export type DeviceType = Type & {
  price: number,
  rating: number,
  img: string,
}
export type SelectedType = Partial<Omit<Type, 'name'>>

export class DeviceStore {
  private types: Type[];
  private brands;
  private device: DeviceType[];
  private selectedType: SelectedType;
  private selectedBrand: SelectedType;

  constructor() {
    this.types = [
      {id: 1, name: 'Холодильники'},
      {id: 2, name: 'Smarts'},
      {id: 3, name: 'Laptop'},
      {id: 4, name: 'TV'}
    ]
    this.brands = [
      {id: 1, name: 'Samsung'},
      {id: 2, name: 'Apple'},
      {id: 3, name: 'Lenovo'},
      {id: 4, name: 'Asus'},
    ]
    this.device = [
      {
        id: 1,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 2,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 3,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
      {
        id: 4,
        name: 'Iphone 12 pro',
        price: 25000,
        rating: 5,
        img: 'https://content2.onliner.by/catalog/device/header/a5e2764b76188d4ffe32fefeb0a6b9be.jpeg'
      },
    ]
    this.selectedType = {}
    this.selectedBrand = {}

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

  setSelectedType = (type: SelectedType) => {
    this.selectedType = type
  }

  setSelectedBrand = (type: SelectedType) => {
    this.selectedBrand = type
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
}