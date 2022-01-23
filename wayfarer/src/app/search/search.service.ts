import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient) { }
  createAPIObservable(city:any){
    return      this.http.get(`
    api.openweathermap.org/data/2.5/weather?q=${city}&appid=e0449c7136f994da0fd5775049e4825c`);
//    http://api.openweathermap.org/data/2.5/weather?zip=${zip},us&appid=e0449c7136f994da0fd5775049e4825c&&units=imperial`)
  
  }
  // createAPIObservable(city:any){
  //   return      this.http.get(`http://api.openweathermap.org/data/2.5/weather?zip=${city},us&appid=052f26926ae9784c2d677ca7bc5dec98&&units=imperial`)
  //   // api.openweathermap.org/data/2.5/weather?q=${zip}&appid=052f26926ae9784c2d677ca7bc5dec98
  // }
}
