import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from '../product';
@Injectable()
export class ProductServiceService {
api='http://5e7cdb96a917d70016683f9f.mockapi.io/assProduct'
  constructor(
    private http:HttpClient
  ) { }

}