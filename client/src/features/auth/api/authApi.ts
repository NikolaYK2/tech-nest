import {$host} from "@/app/api";


export const authApi = {
  async registration(email: string, password: string) {
    return await $host.post('auth/registration', {email, password, role: 'ADMIN'});
  },
  async login(email: string, password: string) {
    return await $host.post('auth/registration', {email, password});
  },
  async check() {
    return await $host.post('auth/registration');
  },
}
