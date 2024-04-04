import {$authHost, $host} from "@/app/api";

type ResponseType = {
  createdAt: string,
  id: number,
  name: string,
  updatedAt: string,
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
};
