export interface MenuItem {
    id: number;
    name: string;
    description: string;
    price: number;
    category: string;
    imageUrl?: string;
}

export interface CartItem {
    menuItem: MenuItem;
    quantity: number;
}

export interface Order {
    id: string;
    items: CartItem[];
    total: number;
    date: Date;
}
