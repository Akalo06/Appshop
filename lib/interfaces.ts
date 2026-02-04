// Este proyecto esta desarrollado en JS, por lo que no hace uso de estas interfaces TS
// Se indican aquí con fines de documentación

export interface AuthResponse {
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
    roles: string[];
    token: string;
}

export interface User {
    id: string;
    email: string;
    fullName: string;
    isActive: boolean;
    roles: string[];
}


export interface Product {
    id: string;
    title: string;
    price: number;
    description: string;
    slug: string;
    stock: number;
    sizes: Size[];
    gender: Gender;
    tags: string[];
    images: string[];
    user?: User;
}

export enum Gender {
    Kid = 'kid',
    Men = 'men',
    Women = 'women',
}

export enum Size {
    L = 'L',
    M = 'M',
    S = 'S',
    Xl = 'XL',
    Xs = 'XS',
    Xxl = 'XXL',
    Xxxl = 'XXXL',
}
