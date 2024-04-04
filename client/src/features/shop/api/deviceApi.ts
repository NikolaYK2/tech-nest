import {$authHost, $host} from "@/app/api";

type ResponseType = {
  createdAt: string,
  id: number,
  name: string,
  updatedAt: string,
}
type DeviceType={
  brandId:number,
  createdAt:string,
  id: number,
  img:string,
  name: string,
  price:number,
  rating:number,
  typeId:number,
  updatedAt:string,
}
type DeviceTypePage={
  count:number,
  rows:DeviceType[]
}

export const deviceApi = {
  async createType(type: any) {
    const res = await $authHost.get('type/', type);
    return res;
  },
  async fetchTypes() {
    const res = await $host.get<ResponseType>('type/');
    return res.data;
  },
  async createBrand(brand: any) {
    const res = await $authHost.post('brand/', brand);
    return res;
  },
  async fetchBrands() {
    const res = await $host.get<ResponseType>('brand/');
    return res.data;
  },
  async createDevice(device: any) {
    const res = await $authHost.post('device/', device);
    return res;
  },
  async fetchDevices() {
    const res = await $host.get<DeviceTypePage>('device/');
    console.log(res.data)
    return res.data;
  },
  async fetchOneDevice(id: number) {
    const res = await $host.get<any>(`device/${id}`);
    return res.data;
  },
};
