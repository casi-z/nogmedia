import {SetStateAction} from "react";

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

export interface IGlobalContext {
    breadcrumbs: string[] | undefined,
    setBreadcrumbs: any,
}