import {Component, OnInit} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {Product} from '../../model/product-entity';
import {ProductService} from '../../services/product.service';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-inventory-table',
  imports: [
    NgForOf,
    FormsModule,
    NgIf
  ],
  templateUrl: './inventory-table.component.html',
  standalone: true,
  styleUrl: './inventory-table.component.css'
})
export class InventoryTable implements OnInit {
  products: Product[]=[];
  showForm = false;

  newProductAdded: Product= {
    id: 0,
    name: '',
    expirationDate: '',
    quantity: 0
  };

  toggleForm(): void{
    this.showForm = !this.showForm;
  }

  saveProduct(): void {
    if (this.newProductAdded.name && this.newProductAdded.expirationDate && this.newProductAdded.quantity > 0) {
      this.productService.addProduct(this.newProductAdded).subscribe(() => {
        this.loadProducts();
        this.products.push(this.newProductAdded);
        this.newProductAdded = {name: '', expirationDate: '', quantity: 0, id: 0};
        this.showForm = false;
      });
    }
  }

  constructor(private productService: ProductService) { }

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getProducts().subscribe(data=>{
      this.products = data;
    });
  }

  /*addProduct(){
    const newProduct: Product ={
      id: 0,
      name: 'New Product',
      expirationDate: new Date().toISOString().split('T')[0],
      quantity:10
    };

    this.productService.addProduct(newProduct).subscribe(()=>{
      this.loadProducts();
    })
  }*/

}
