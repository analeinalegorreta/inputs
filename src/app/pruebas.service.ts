import { Injectable } from '@angular/core';
import { City, Product, respCities, respProduct } from './interfaces/cities.interfaces';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) { 



   
  }

  getCities(): Observable<respCities> {
    return this.http.get<respCities>(`https://e913d4d3-6aab-45aa-9d4e-63f87f6249c5.mock.pstmn.io/get`)
      
  }


  getProd(): Observable<Product[]> {
    return this.http.get<Product[]>(`https://com-next-tech-mapeador-catalogos-qa-sw2nnhxr3q-uc.a.run.app/Catalogos/clave_producto_servicio_by_desc/animal`)
      
  }








}
