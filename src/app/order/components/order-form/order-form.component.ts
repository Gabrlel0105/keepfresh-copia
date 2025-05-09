import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../shared/components/base-form';
import {FormBuilder, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {Dish} from '../../models/dish.entity';
import {Order, OrderItem} from '../../models/order.entity';
import {OrderService} from '../../services/order.service';
import {DishService} from '../../services/dish.service';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-order-form',
  imports: [
    NgForOf,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './order-form.component.html',
  standalone: true,
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent extends BaseFormComponent implements OnInit{
  orderForm: FormGroup;
  dishes: Dish[] = [];
  orderItems: OrderItem[] = [];


  constructor(
    private orderService: OrderService,
    private dishService: DishService,
    private fb: FormBuilder
  ) {
    super();
    this.orderForm = this.fb.group({
      tableNumber: ['', [Validators.required, Validators.min(1)]],
      selectedDishId: [0]
    });
  }

  ngOnInit(): void {
    this.dishService.getAll().subscribe(dishes => {
      this.dishes = dishes;
    });
  }

  addDish(): void {
    if (!this.canAddDish()) return;

    const dishId = Number(this.orderForm.get('selectedDishId')?.value);
    const selectedDish = this.dishes.find(dish => dish.id === dishId);

    if (selectedDish) {
      const existingItemIndex = this.orderItems.findIndex(
        item => item.dish.id === dishId
      );

      if (existingItemIndex >= 0) {
        this.orderItems[existingItemIndex].quantity += 1;
      } else {
        this.orderItems.push({
          dish: selectedDish,
          quantity: 1
        });
      }

      this.orderForm.patchValue({ selectedDishId: 0 });
    }
  }

  removeItem(index: number): void {
    this.orderItems = [
      ...this.orderItems.slice(0, index),
      ...this.orderItems.slice(index + 1)
    ];
  }

  saveOrder(): void {
    if (!this.orderForm.valid || this.orderItems.length === 0) return;

    const order = {
      tableNumber: this.orderForm.get('tableNumber')?.value,
      items: [...this.orderItems],
      total: this.calculateTotal()
    };

    this.orderService.create(<Order>order).subscribe(() => {
      this.orderForm.reset({ tableNumber: '', selectedDishId: 0 });
      this.orderItems = [];
    });
  }

  calculateTotal(): number {
    return this.orderItems.reduce(
      (total, item) => total + (item.dish.price * item.quantity),
      0
    );
  }

  canAddDish(): boolean {
    return Number(this.orderForm.get('selectedDishId')?.value) > 0;
  }

}
