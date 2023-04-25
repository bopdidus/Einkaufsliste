import { Component,OnInit } from '@angular/core';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-list-a',
  templateUrl: './list-a.component.html',
  styleUrls: ['./list-a.component.css']
})
export class ListAComponent implements OnInit {

  products: any
  constructor(private myService: ApiServiceService){}

  ngOnInit(): void {
    this.myService.getProducts().subscribe((data)=>{
      this.products = data;
    })
  }
  
}
