import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.css']
})
export class ListAComponent implements OnInit {

  products: any
  constructor(private myService: ApiServiceService){}

  ngOnInit(): void {
    this.GetProducts()
  }

  GetProducts()
  {
    this.myService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }

  addProduct(name:string)
  {
    this.myService.addProduct(name).subscribe(_=> {
      this.GetProducts()
    })
  }

  DeleteProduct(prod:ProductComponent)
  {
    console.log("Call ", prod)
    if( prod.amount <=0)
    {
      this.myService.DeleteProduct(prod.name).subscribe(_=> {
        this.GetProducts()
      })
    }else{
      this.UpdateProduct(prod)
    }
    
  }

  UpdateProduct(prod:ProductComponent)
  {
    this.myService.UpdateProduct(prod.name, prod.amount).subscribe(_=> {
      this.GetProducts()
    })
  }
  
}
