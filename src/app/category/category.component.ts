import { Component } from '@angular/core';
import { CategoryEntity } from './CategoryEntity';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-category',
  standalone: true,
  imports: [CategoryEntity,CommonModule],
  templateUrl: './category.component.html',
  styleUrl: './category.component.css',
})
export class CategoryComponent {
  title = 'Kategory Listesi';

  categories: CategoryEntity[] = [
    { id: 1, name: 'Elektronik' },
    { id: 2, name: 'Bilgisayar' },
    { id: 3, name: 'Kitap' },
    { id: 4, name: 'BeyazEşya' },
    { id: 5, name: 'Giyim' },
  ];
}
