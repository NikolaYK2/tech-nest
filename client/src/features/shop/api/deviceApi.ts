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

export type CreateType = {
  [key: string]: string
}
export const deviceApi = {

  async createType(type: CreateType) {
    return await $authHost.post('type/', type);
  },

  async fetchTypes() {
    const res = await $host.get<ResponseType>('type/');
    return res.data;
  },

  async createBrand(brand: CreateType) {
    return await $authHost.post('brand/', brand);
  },

  async fetchBrands() {
    const res = await $host.get<ResponseType>('brand/');
    return res.data;
  },

  async createDevice(device: FormData) {
    return await $authHost.post('device/', device);
  },

  async fetchDevices(typeId: number | null, brandId: number | null, page: number | null, limit: number | null = 5) {
    const res = await $host.get<DeviceTypePage>('device/', {
      params: {
        typeId, brandId, page, limit
      }
    });
    return res.data;
  },

  async fetchOneDevice(id: number) {
    const res = await $host.get(`device/${id}`);
    return res.data;
  },
};
