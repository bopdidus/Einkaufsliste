import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { Observable } from 'rxjs';

const httpOptions = {
  headers:new HttpHeaders({
    'Content-Type': 'application/json'
  })
}

const apiURL="http://localhost:5000/api/"

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private http: HttpClient) { 
  }

  getProducts(){
    return this.http.get(apiURL);
  }

  addProduct(name:String)
  {
    const body ='{"name": "'+name+'"}'
    const postURL= `${apiURL}`;
    return  this.http.post<any>(postURL, body, httpOptions);
  }

  DeleteProduct(name:String)
  {
    const postURL= `${apiURL}${name}`;
    return  this.http.delete(postURL);
  }

  UpdateProduct(name:String,amount:Number)
  {
    const body ='{"name": "'+name+'", "amount": "'+ amount+'" }'
    const postURL= `${apiURL}`;
    return  this.http.put(postURL, body, httpOptions);
  }

}
