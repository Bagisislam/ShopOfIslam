import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductComponent } from './product/product.component';
import { NavComponent } from "./nav/nav.component";
import { CategoryComponent } from "./category/category.component";
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, ProductComponent, NavComponent, CategoryComponent,CommonModule]
})
export class AppComponent {

  /**
   *
   */
 
  title = 'ShopOfIslam';
}
