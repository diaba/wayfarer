import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CITIES } from '../city/cities';
import { SearchService } from './../search/search.service';
import { debounceTime, Subject } from 'rxjs'; // observable

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers
})
export class SlideComponent implements OnInit {
  cities = CITIES;
  // images = this.cities.map((n) => n.image);
  weathers: any[] = [];
  searchSubject = new Subject();
  constructor(private searchService: SearchService, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.showNavigationIndicators = false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation = true;
  }

  ngOnInit(): void {
    this.cities.forEach((city) => {
      console.log(city.city + ' ' + city.country);
      this.searchService
        .createAPIObservable(city.city, city.code)
        .subscribe((response) => {
          //   console.log(response);
          this.weathers.push(response);
        });
    });

    console.log(this.weathers);
    // this.weathers = this.cities;
    // console.log(this.cities);
  }
}
