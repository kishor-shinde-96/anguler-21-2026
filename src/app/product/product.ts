  import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-product',
  styleUrl: './product.css',
  templateUrl: './product.html',
})
export class Product {

  productId = signal<string>('');

  constructor(private route: ActivatedRoute) {
    this.route.paramMap.subscribe((params) => {
      // Use .set() to update the signal value
      this.productId.set(params.get('id') || ''); 
    });
  }
  
}
