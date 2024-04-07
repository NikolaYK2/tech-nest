import {$authHost, $host} from "@/app/api";
import {DeviceType} from "@/features/shop/model/DeviceStore.ts";

const getValue = (obj: CreateType) => {
  let value;
  for (let key in obj) {
    value = obj[key];
  }
  return value
}

type ResponseType = Pick<DeviceType,
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'>

type DeviceTypePage = {
  count: number,
  rows: DeviceType[]
}

export type CreateType = {
  [key: string]: string
}
export const deviceApi = {
  async createType(type: CreateType) {

    return await $authHost.post('type/', {name: getValue(type)});
  },
  async fetchTypes() {
    const res = await $host.get<ResponseType>('type/');
    return res.data;
  },
  async createBrand(brand: CreateType) {

    return await $authHost.post('brand/', {name: getValue(brand)});
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
    return res.data;
  },
  async fetchOneDevice(id: number) {
    const res = await $host.get(`device/${id}`);
    return res.data;
  },
};
