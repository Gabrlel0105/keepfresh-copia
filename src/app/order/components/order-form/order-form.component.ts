import {Component, OnInit} from '@angular/core';
import {BaseFormComponent} from '../../../shared/components/base-form';
import {FormArray, FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {Dish} from '../../models/dish.entity';
import {Order} from '../../models/order.entity';
import {OrderService} from '../../services/order.service';
import {DishService} from '../../services/dish.service';
import {NgForOf, NgIf} from '@angular/common';


@Component({
  selector: 'app-order-form',
  imports: [
    NgForOf,
    ReactiveFormsModule,
    FormsModule
  ],
  templateUrl: './order-form.component.html',
  standalone: true,
  styleUrl: './order-form.component.css'
})
export class OrderFormComponent extends BaseFormComponent implements OnInit{
  form!: FormGroup;
  dishes: Dish[] = [];

  constructor(private fb: FormBuilder, private orderService: OrderService, private dishService: DishService) {
    super();
  }

  ngOnInit(): void {
    this.form = this.fb.group({
      tableNumber: [null, Validators.required],
      items: this.fb.array([]),
    });

    this.dishService.getAll().subscribe(dishes => this.dishes = dishes);
    this.addItem();
  }

  get items(): FormArray {
    return this.form.get('items') as FormArray;
  }

  addItem() {
    this.items.push(this.fb.group({
      name: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
    }));
  }

  removeItem(index: number) {
    this.items.removeAt(index);
  }

  onSubmit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      return;
    }

    const formValue = this.form.value;
    const enrichedItems = formValue.items.map((item: any) => {
      const dish = this.dishes.find(d => d.name === item.name);
      return {
        ...item,
        price: dish?.price || 0
      };
    });

    const total = enrichedItems.reduce((acc: number, item: any) => acc + (item.quantity * item.price), 0);

    const order: Order = new Order({
      tableNumber: formValue.tableNumber,
      items: enrichedItems,
      total,
      createdAt: new Date().toISOString()
    });

    this.orderService.create(order).subscribe(() => {
      alert('Successfully saved');
      this.form.reset();
      this.items.clear();
      this.addItem();
    });
  }

}
