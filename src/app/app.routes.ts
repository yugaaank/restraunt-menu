import { Routes } from '@angular/router';
import { MenuComponent } from './features/menu/menu';
import { CartComponent } from './features/cart/cart';
import { OrdersComponent } from './features/orders/orders';

export const routes: Routes = [
    { path: '', redirectTo: 'menu', pathMatch: 'full' },
    { path: 'menu', component: MenuComponent },
    { path: 'cart', component: CartComponent },
    { path: 'orders', component: OrdersComponent },
    { path: '**', redirectTo: 'menu' }
];
