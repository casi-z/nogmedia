import React, {SetStateAction} from "react";

export interface IMenuItem {
    name: string,
    href: string,
}

export type INews = {
    id: number,
    title: string,
    text: string,
    views: number,
    comments: number,
    category?: string,
    image?: string,
}

export interface ITag {
    name: string,
    href: string,
}

export interface IUser {
    username: string,
    id: number,
}

export interface IGlobalContext {
    breadcrumbs: string[] | undefined,
    setBreadcrumbs: React.Dispatch<React.SetStateAction<string[]>>,
    isAuth: boolean,
    setIsAuth: React.Dispatch<React.SetStateAction<boolean>>,
    userData: IUser,
    setUserData: React.Dispatch<React.SetStateAction<IUser>>,
}

export interface IHTTPError {
    message: string
    status: number,
    errors: any[]
}