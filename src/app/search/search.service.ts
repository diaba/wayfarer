import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }

  createAPIObservable(city:string, code:string){
    return      this.http.get(`http://api.openweathermap.org/data/2.5/weather?q=${city},${code}&APPID=e0449c7136f994da0fd5775049e4825c&units=imperial `)

  }
}
