import { CommonModule, APP_BASE_HREF } from '@angular/common';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductComponent } from '../product/product.component';
import { filter } from 'rxjs';
import { FilterTextService } from '../services/filter-text.service';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, FormsModule, ProductComponent],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css',
})
export class NavComponent implements OnInit{

  constructor(private fitertextservice:FilterTextService) {
  }

  Nav_filterText = "";

  ngOnInit(): void {
    this.fitertextservice.currentText.subscribe();
  }

  newText(){
    this.fitertextservice.changeText(this.Nav_filterText);
    console.log(this.Nav_filterText);
    
  }
 
}
