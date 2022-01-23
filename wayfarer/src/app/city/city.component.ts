import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { CITIES } from './cities'
import {SearchService } from '../search/search.service'; // import the service
import { CityService } from './city.service';
@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css']
})
export class CityComponent implements OnInit {
  city:any;
  weather: any;
  cities = CITIES;
  cityIndex: string| null = '';  // Union type
  searchSubject = new Subject();
 
  constructor(private route: ActivatedRoute, private cityService: CityService ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(param => {// deal with the id parameter
    
      this.cityIndex = param.get('cid');
      const id:number = parseInt(this.  cityIndex);
      this.city = this.cityService.getCity(id);
      // find by index
      // this.city = CITIES.find(j => {
      //     const paramId:string = param.get('cid') || '';
      //     return j.id === parseInt(paramId)
      //   });
        console.log("City Details: city"+this.city.id);

  })

}
}

