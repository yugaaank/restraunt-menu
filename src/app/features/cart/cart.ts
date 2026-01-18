import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../core/services/cart.service';
import { OrderService } from '../../core/services/order.service';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule
  ],
  templateUrl: './cart.html',
  styleUrl: './cart.css'
})
export class CartComponent {
  cartService = inject(CartService);
  private orderService = inject(OrderService);
  private router = inject(Router);
  private snackBar = inject(MatSnackBar);

  updateQuantity(itemId: number, newQuantity: number) {
    this.cartService.updateQuantity(itemId, newQuantity);
  }

  removeItem(itemId: number) {
    this.cartService.removeFromCart(itemId);
  }

  placeOrder() {
    const items = this.cartService.cartItems();
    const total = this.cartService.totalPrice();

    if (items.length === 0) return;

    this.orderService.placeOrder(items, total);
    this.cartService.clearCart();

    this.snackBar.open('Order placed successfully!', 'View Orders', {
      duration: 3000
    }).onAction().subscribe(() => {
      this.router.navigate(['/orders']);
    });
  }
}
