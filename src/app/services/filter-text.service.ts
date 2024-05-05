import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FilterTextService {

  private sourceOfTheText = new BehaviorSubject<string>("");

  constructor() { }

  currentText = this.sourceOfTheText.asObservable();

  changeText(text:string){
    this.sourceOfTheText.next(text);
  }
}
