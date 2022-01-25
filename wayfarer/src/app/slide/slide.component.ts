import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { CITIES } from '../city/cities';
import {SearchService } from './../search/search.service'
import { debounceTime, Subject } from 'rxjs'; // observable


@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.css'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class SlideComponent implements OnInit {
  cities = CITIES;
  images = this.cities.map((n) => n.image);
  weathers: any[] = [];
  searchSubject = new Subject();
  constructor(private searchService: SearchService,config: NgbCarouselConfig) { 
    // customize default values of carousels used by this component tree
    config.interval = 10000;
    config.showNavigationIndicators= false;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.animation= true;
  }


  ngOnInit(): void {  // listen to the event
  
    //   console.log("---Slide ==> onInit----");
  //   // list of cities
  //   console.log("---Slide ==> cities----"+this.cities);
  //   // list of weather

  //   this.searchSubject
  //    .pipe(debounceTime(1000))// pipe transform a format debounceTime delay 
  //   .subscribe(res => {
  //     console.log("......."+res);
  //  this.searchService.createAPIObservable('london','uk')
  //   .subscribe((response) => {
  //     console.log(response);
  //     //this.weather = response;
  //   });
  //   })

     this.cities.forEach((city) =>{
      console.log(city.city + " " + city.country);
      this.searchService.createAPIObservable(city.city, city.code)
      .subscribe((response) => {
      //   console.log(response);
       city.temp = response
        // this.weathers.push(response);
        // console.log(this.weathers);
      })
    })
 
   
  // console.log(this.cities);
  this.weathers = this.cities;
  console.log(this.weathers);
  
  
   
    
  }



}





