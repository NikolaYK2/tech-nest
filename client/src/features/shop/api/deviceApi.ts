import {$authHost, $host} from "@/app/api";
import {DeviceType} from "@/features/shop/model/DeviceStore.ts";

type ResponseType = Pick<DeviceType,
  | 'createdAt'
  | 'id'
  | 'name'
  | 'updatedAt'>

type DeviceTypePage = {
  count: number,
  rows: DeviceType[]
}

type CreateType = {
  name: string
}
export const deviceApi = {
  async createType(type: CreateType) {
    const res = await $authHost.post('type/', type);
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
    return res.data;
  },
  async fetchOneDevice(id: number) {
    const res = await $host.get(`device/${id}`);
    return res.data;
  },
};
