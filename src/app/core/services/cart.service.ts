import { Injectable, signal, computed } from '@angular/core';
import { CartItem, MenuItem } from '../models/models';

@Injectable({
    providedIn: 'root'
})
export class CartService {
    // Signal to hold the current cart items
    readonly cartItems = signal<CartItem[]>([]);

    // Computed signal for total price
    readonly totalPrice = computed(() => {
        return this.cartItems().reduce((total, item) => total + (item.menuItem.price * item.quantity), 0);
    });

    // Computed signal for total count
    readonly totalItems = computed(() => {
        return this.cartItems().reduce((total, item) => total + item.quantity, 0);
    });

    constructor() { }

    addToCart(menuItem: MenuItem) {
        this.cartItems.update(items => {
            const existingItem = items.find(i => i.menuItem.id === menuItem.id);
            if (existingItem) {
                // Return new array with updated quantity
                return items.map(i =>
                    i.menuItem.id === menuItem.id
                        ? { ...i, quantity: i.quantity + 1 }
                        : i
                );
            } else {
                return [...items, { menuItem, quantity: 1 }];
            }
        });
    }

    removeFromCart(menuItemId: number) {
        this.cartItems.update(items => items.filter(i => i.menuItem.id !== menuItemId));
    }

    updateQuantity(menuItemId: number, quantity: number) {
        if (quantity <= 0) {
            this.removeFromCart(menuItemId);
            return;
        }

        this.cartItems.update(items =>
            items.map(i =>
                i.menuItem.id === menuItemId
                    ? { ...i, quantity }
                    : i
            )
        );
    }

    clearCart() {
        this.cartItems.set([]);
    }
}
