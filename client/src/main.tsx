import ReactDOM from 'react-dom/client'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "@/app/App.tsx";
import {Admin} from "@/features/auth/ui/admin/Admin.tsx";
import {
  ADMIN_ROUTE, AUTHORIZATION_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  SHOP_ROUTE
} from "@/common/utils/constRout.ts";
import {Basket} from "@/features/auth/ui/basket/Basket.tsx";
import {Auth} from "@/features/auth/ui/Auth.tsx";
import {AuthProvider} from "@/features/auth/model/AuthProvider.tsx";
import '@/assets/styles/index.scss'
import {DeviceProvider} from "@/features/shop/model/DeviceProvider.tsx";
import {Shop} from "@/features/shop/ui/Shop.tsx";
import {DeviceList} from "@/features/shop/ui/device/1-list/DeviceList.tsx";
import {DevicePage} from "@/features/shop/ui/device/3-page/DevicePage.tsx";

const router = createBrowserRouter([
  {
    path: SHOP_ROUTE,
    element: <App/>,
    children: [
      {index: true, element: <Shop/>},
      {path: ADMIN_ROUTE, element: <Admin/>},
      {path: BASKET_ROUTE, element: <Basket/>},
      {path: AUTHORIZATION_ROUTE, element: <Auth/>},
      {path: AUTHORIZATION_ROUTE, element: <Auth/>},
      {path: DEVICE_ROUTE, element: <DeviceList/>},
      {path: DEVICE_ROUTE + '/:id', element: <DevicePage/>},
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <AuthProvider>
    <DeviceProvider>
      <RouterProvider router={router}/>
    </DeviceProvider>
  </AuthProvider>
)




