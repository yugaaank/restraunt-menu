import { Component, inject, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MenuService } from '../../core/services/menu.service';
import { CartService } from '../../core/services/cart.service';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
import { MatChipsModule } from '@angular/material/chips';
import { MenuItem } from '../../core/models/models';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-menu',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatSnackBarModule,
    MatChipsModule
  ],
  templateUrl: './menu.html',
  styleUrl: './menu.css'
})
export class MenuComponent {
  private menuService = inject(MenuService);
  private cartService = inject(CartService);
  private snackBar = inject(MatSnackBar);

  // Categories
  categories = ['All', 'Appetizers', 'Main Course', 'Desserts', 'Beverages'];
  selectedCategory = signal<string>('All');

  // Load menu items and convert to signal
  private allMenuItems = toSignal(this.menuService.getMenuItems(), { initialValue: [] });

  // Filtered Items
  filteredMenuItems = computed(() => {
    const category = this.selectedCategory();
    const items = this.allMenuItems();

    if (category === 'All') {
      return items;
    }
    return items.filter(item => item.category === category);
  });

  setCategory(category: string) {
    this.selectedCategory.set(category);
  }

  addToCart(item: MenuItem) {
    this.cartService.addToCart(item);
    this.snackBar.open(`${item.name} added to cart`, 'Close', {
      duration: 3000,
      horizontalPosition: 'end',
      verticalPosition: 'bottom'
    });
  }
}
