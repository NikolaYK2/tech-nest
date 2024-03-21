import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import App from "@/app/App.tsx";
import {Admin} from "@/features/auth/ui/admin/Admin.tsx";
import {
  ADMIN_ROUTE,
  BASKET_ROUTE,
  DEVICE_ROUTE,
  LOGIN_ROUTE,
  REGISTRATION_ROUTE,
  SHOP_ROUTE
} from "@/common/utils/constRout.ts";
import {Basket} from "@/features/auth/ui/basket/Basket.tsx";
import {Auth} from "@/features/auth/ui/Auth.tsx";
import {DevicePage} from "@/features/shop/ui/device/DevicePage.tsx";

const router = createBrowserRouter([
  {
    path: SHOP_ROUTE,
    element: <App/>,
    children: [
      {
        path: ADMIN_ROUTE,
        element: <Admin/>
      },
      {
        path: BASKET_ROUTE,
        element: <Basket/>
      },

      {
        path: LOGIN_ROUTE,
        element: <Auth/>
      },
      {
        path: REGISTRATION_ROUTE,
        element: <Auth/>
      },
      {
        path: DEVICE_ROUTE + '/:id',
        element: <DevicePage/>
      },

    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <RouterProvider router={router}/>
)
