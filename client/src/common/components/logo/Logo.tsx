import {PolyElement} from "@/common/components/polyElement/PolyElement.tsx";
import {NavLink} from "react-router-dom";
import {SHOP_ROUTE} from "@/common/utils/constRout.ts";
import s from './Logo.module.scss'
export const Logo = () => {
  return (
    <div className={s.containerLogo}>
      <PolyElement className={s.logo} as={NavLink} variant={"link"} to={SHOP_ROUTE}>
        <p>Techno<span className={s.span}>Nest</span></p>
      </PolyElement>
    </div>
  );
};

