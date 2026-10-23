import { Component, signal, effect } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-products',
  styleUrl: './products.css',
  templateUrl: './products.html',
})
export class Products {

  search = signal<string>('');

  products = signal<string[]>(['phone', 'laptop', 'tablet', 'desktop', 'watch', 'tv']);
  filtered = signal<string[]>(this.products());

  constructor(private router: Router,
    private route: ActivatedRoute
  ) {
    // url to signal
    this.route.queryParamMap.subscribe((params) => {
      this.search.set(params.get('search') || '');
    });

    // signal to UI update
    effect(() => {
      const value = this.search().toLowerCase();
      this.filtered.set(this.products().filter(p => p.toLowerCase().includes(value)));
    })
  }
  upadteURL() {
    this.router.navigate([], {
      queryParams: {
        search: this.search()
      }
    });
  }

}
