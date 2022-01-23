import { Injectable } from '@angular/core';
import { CITIES } from '../city/cities';
@Injectable({
  providedIn: 'root'
})
export class CityService {
  cities = CITIES;
  constructor() { }
  //find cityById
  getCity(id:number){
    return this.cities.find(c => c.id === id);
  }

  //findAll Posts Of city
  getPostsOfCity(id:number){
    const cityFound = this.getCity(id);
    return cityFound?.posts;
  }

  //find unique posts of city
  getSinglePost(cid:number, pid:number){
    const cityFound = this.getCity(cid);
    return cityFound?.posts[pid];
  }
}
