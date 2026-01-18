import { Component, inject } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { OrderService } from '../../core/services/order.service';
import { MatCardModule } from '@angular/material/card';
import { MatListModule } from '@angular/material/list';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-orders',
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatListModule,
    MatExpansionModule,
    MatIconModule
  ],
  providers: [DatePipe],
  templateUrl: './orders.html',
  styleUrl: './orders.css'
})
export class OrdersComponent {
  orderService = inject(OrderService);
}
