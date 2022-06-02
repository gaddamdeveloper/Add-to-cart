import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators'
@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  public getAllProducts() {
    return this.http.get<any>("https://fakestoreapi.com/products").pipe(map((res: any) => {
      return res;
    }))
  }
}
function res(res: any, any: any): import("rxjs").OperatorFunction<any, unknown> {
  throw new Error('Function not implemented.');
}

