import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CityService {
  constructor() {}

  // getFoodById(id: number): Food{
  //   return this.getAll().find(food => food.id == id)!;
  // }

  getAllPostByKeyword(keyword: string): any[] {
    return this.getAll()
      .map((city) => city.posts)
      .flat()
      .filter(
        (post) =>
          post.title.includes(keyword.toLowerCase()) ||
          post.content.includes(keyword.toLowerCase())
      );
  }

  getAll(): any[] {
    return [
      {
        id: 1,
        city: 'London',
        image:
          'https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg',
        posts: [
          {
            id: 1,
            title: 'London Post 1',
            author: 'Habsatou War',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
        ],
      },

      {
        id: 2,
        city: 'Sydney',
        image:
          'https://images.pexels.com/photos/995765/pexels-photo-995765.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
        posts: [
          {
            id: 1,
            title: 'Sydney Post 1',
            author: 'Laury Benoit',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
        ],
      },

      {
        id: 3,
        city: 'San Francisco',
        image:
          'https://images.pexels.com/photos/208745/pexels-photo-208745.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260',
        posts: [
          {
            id: 1,
            title: 'San Francisco Post 1',
            author: 'Michelle Lucero',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
        ],
      },

      {
        id: 4,
        city: 'Seattle',
        image:
          'https://images.pexels.com/photos/336512/pexels-photo-336512.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
        posts: [
          {
            id: 1,
            title: 'Seattle Post 1',
            author: 'Antonio Banderas',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
          {
            id: 2,
            title: 'Seattle Post 2',
            author: 'Bob',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
          {
            id: 3,
            title: 'Seattle Post 3',
            author: 'Maria Gomez',
            content:
              'Lorem ipsum is placeholder text commonly used in the graphic, print, and publishing industries for previewing layouts and visual mockups.',
          },
        ],
      },
    ];
  }
}
