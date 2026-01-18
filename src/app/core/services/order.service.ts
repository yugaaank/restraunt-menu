import { Injectable, signal } from '@angular/core';
import { Order, CartItem } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class OrderService {
    readonly orders = signal<Order[]>([]);

    constructor() { }

    placeOrder(items: CartItem[], total: number) {
        if (items.length === 0) return;

        const newOrder: Order = {
            id: this.generateId(),
            items: [...items], // Create a copy
            total,
            date: new Date()
        };

        this.orders.update(currentOrders => [newOrder, ...currentOrders]);
    }

    getOrders() {
        return this.orders.asReadonly();
    }

    private generateId(): string {
        return '#' + Math.random().toString(36).substr(2, 9).toUpperCase();
    }
}
