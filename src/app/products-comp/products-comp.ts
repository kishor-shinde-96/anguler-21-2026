import { Component, signal } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products-comp',
  styleUrl: './products-comp.css',
  templateUrl: './products-comp.html',
})
export class ProductsComp {
  
  category = signal<string | null>(null);
  sort = signal<string | null>(null);

  constructor(private route: ActivatedRoute) {  
    this.route.queryParamMap.subscribe((params) => {
      this.category.set(params.get('category'));
      this.sort.set(params.get('sort'));
    });
  }
}
