import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";

@Component({
    selector: 'app-productEntity',
    standalone: true,
    imports: [CommonModule],
    template: '',
    styles: [],
  })

export class ProductEntity{
    
    id:number;
    name:string;
    price:number;
    category:number;
    description:string;
    imageUrl:string;
    
}