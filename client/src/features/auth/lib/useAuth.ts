import {useContext} from "react";
import {AuthContext} from "@/features/auth/model/AuthProvider.tsx";

export const useAuth = () => useContext(AuthContext)

