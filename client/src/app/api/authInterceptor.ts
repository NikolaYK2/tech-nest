import axios from "axios";

export const $host = axios.create({
  baseURL: import.meta.env.VITE_BASE_APP_URL  + 'api/'
})
export const $authHost = axios.create({
  baseURL: import.meta.env.VITE_BASE_APP_URL

})


//подставка токена к каждому запросу
const authInterceptor = (config: any) => {
  config.headers = config.headers || {}
  config.headers.authorization = `Bearer ${localStorage.getItem('token')}`;
  return config
}

$authHost.interceptors.request.use(authInterceptor);

