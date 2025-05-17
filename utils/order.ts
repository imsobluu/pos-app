export interface MenuItem {
    id: string;
    img: string;
    name: string;
    dsc: string;
    price: number;
    rate: number;
    country: string;
}

export interface CartItem {
    id: string;
    name: string;
    img: string;
    price: number;
    amount: number;
}
