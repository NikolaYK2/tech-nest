import {$authHost, $host} from "@/app/api";
import {jwtDecode} from "jwt-decode";


type RegisterType = {
  token: string,
}
// type ResponseType<T = {}> = {
//   data: T,
// }
export const authApi = {
  async registration(email: string, password: string) {
    const res = await $host.post<RegisterType>('user/registration', {email, password, role: 'ADMIN'});
    localStorage.setItem('token', res.data.token)
    return jwtDecode(res.data.token)
  },
  async login(email: string, password: string) {
    const res = await $host.post<RegisterType>('user/login', {email, password});
    localStorage.setItem('token', res.data.token)
    return jwtDecode(res.data.token)
  },
  async check() {
    const res = await $authHost.get('user/auth');
    localStorage.setItem('token', res.data.token)
    return jwtDecode(res.data.token)
  },
}
