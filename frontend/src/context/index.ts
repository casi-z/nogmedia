import {createContext} from "react";
import {IGlobalContext} from "@/types/types";

export const GlobalContext = createContext<IGlobalContext>({
    breadcrumbs: undefined,
    setBreadcrumbs: undefined,
})