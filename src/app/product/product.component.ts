import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  @Input()
  id:string=""

  @Input()
  amount: number=0

 @Input()
  name:String=""

  @Output()
  productDeleted = new EventEmitter<ProductComponent>();
  @Output()
  amountChanged = new EventEmitter<ProductComponent>();

  removeOne(){
    this.amount = Number(this.amount) - 1;
    if(Number(this.amount) <= 0 || isNaN(Number(this.amount)))
    {
      this.productDeleted.emit(this)
    }
    else{
      this.productDeleted.emit(this)
    }
  }

    addOne()
    {
      this.amount = Number(this.amount) + 1; 
      this.amountChanged.emit(this);
    }
}
