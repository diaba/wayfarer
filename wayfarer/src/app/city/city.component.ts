import { Component, OnInit } from '@angular/core';
import { CITIES } from './cities';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-city',
  templateUrl: './city.component.html',
  styleUrls: ['./city.component.css'],
})
export class CityComponent implements OnInit {
  cities = CITIES;
  city: any;
  cityIndex: string | null = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      // deal with the id parameter
      console.log(param.get('cid'));
      this.cityIndex = param.get('cid');
      // find by index
      this.city = CITIES.find((j) => {
        const paramId: string = param.get('cid') || '';
        return j.id === parseInt(paramId);
      });
    });
  }
}
