
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { ProductEntity } from './ProductEntity';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [CommonModule, ProductEntity],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {

  title:string = "Ürün Listesi"

  products: ProductEntity[] = [
    {
      id: 1,
      name: 'Play Station 5',
      price: 20000,
      category: 1,
      description: 'an console for all games',
      imageUrl:"https://spennytechnologies.com/wp-content/uploads/2020/12/Sony-PlayStation-5-PS5-Digital-Edition.png"
    },
    {
      id: 2,
      name: 'Asus Laptop',
      price: 29000,
      category: 1,
      description: 'an laptop for all dayliy works',
      imageUrl:"https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6292/6292311cv1d.jpg"
    },
    {
      id: 3,
      name: 'dune 1',
      price: 500,
      category: 2,
      description: 'this book begunin of the great stroy',
      imageUrl:"https://www.publishersweekly.com/images/data/ARTICLE_PHOTO/photo/000/075/75659-1.JPG"
    },
  ];
}
