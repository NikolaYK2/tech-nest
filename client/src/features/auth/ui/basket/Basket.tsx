import {useAuth} from "@/features/auth/lib/useAuth.ts";
import {Navigate} from "react-router-dom";
import {LOGIN_ROUTE} from "@/common/utils/constRout.ts";

export const Basket = () => {
  const {user} = useAuth();

  if (!user.getIsAuth) {
    return <Navigate to={LOGIN_ROUTE}/>
  }

  return (
    <div>
      BASKET
    </div>
  );
};
