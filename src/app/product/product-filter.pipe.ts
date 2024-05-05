import { ProductComponent } from './product.component';
import { Pipe, PipeTransform } from '@angular/core';
import { ProductEntity } from './ProductEntity';

@Pipe({
  name: 'productFilter',
  standalone: true
})
export class ProductFilterPipe implements PipeTransform {

  /**
   *
   */
  constructor(private _ProductComponent:ProductComponent) {

  }

  transform(value: ProductEntity[], filterText?: string): ProductEntity[] {
     filterText = filterText?filterText.toLocaleLowerCase():null

    return filterText?value.filter(p=>(p.name).toLocaleLowerCase().indexOf(filterText)!==-1):value;
  }

}
