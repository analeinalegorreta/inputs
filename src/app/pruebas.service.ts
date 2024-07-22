import { Injectable } from '@angular/core';
import { City, respCities } from './interfaces/cities.interfaces';
import { map, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PruebasService {

  constructor(private http: HttpClient) { 

    console.log("pruebas")
    this.getCities().subscribe(resp =>
      console.log(resp)
      )
   
  }

  getCities(): Observable<respCities> {
    return this.http.get<respCities>(`https://e913d4d3-6aab-45aa-9d4e-63f87f6249c5.mock.pstmn.io/get`)
      
  }










}
