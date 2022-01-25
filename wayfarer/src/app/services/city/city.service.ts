import { Injectable } from '@angular/core';
import { CITIES } from 'src/app/city/cities';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  getAllPostByKeyword(keyword: string | null): any[] {
    if (!keyword) {
      return [];
    }
    return this.getAll()
      .map((city) => city.posts)
      .flat()
      .filter(
        (post) =>
          post.title.toLowerCase().includes(keyword.toLowerCase()) ||
          post.content.toLowerCase().includes(keyword.toLowerCase())
      );
  }
  getAll(): any[] {
    return CITIES;
    
  }
}
