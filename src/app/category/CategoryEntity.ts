import { CommonModule } from "@angular/common";
import { Component } from "@angular/core";
import { NonNullableFormBuilder } from "@angular/forms";

@Component({
    selector: 'app-categoryEntity',
    standalone: true,
    imports: [CommonModule],
    template: '',
    styles: [],
  })

export class CategoryEntity{
    
    id:number;
    name:string;
    
}