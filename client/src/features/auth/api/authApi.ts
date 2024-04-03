import {$host} from "@/app/api";


export const authApi = {
  async registration(email: string, password: string) {
    return await $host.post('user/registration', {email, password, role: 'ADMIN'});
  },
  async login(email: string, password: string) {
    return await $host.post('user/registration', {email, password});
  },
  async check() {
    return await $host.post('user/auth');
  },
}
