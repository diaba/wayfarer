import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime, Subject } from 'rxjs'; // observable
import { CityService } from './../services/city/city.service'; // import the service

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent implements OnInit {
  keyword: string | null = '';
  // posts: any[] = [];
  // zip: string = '';
  // weather: any;
  // unit:string = '';
  // searchSubject = new Subject();
  // constructor(private searchService: SearchService) { }
  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    // this.route.paramMap.subscribe((params) => {
    //   this.keyword = params.get('keyword');
    //   // this.posts =
    // });
    // listen to the event
    // this.searchSubject
    // .pipe(debounceTime(1000))// pipe transform a format debounceTime delay
    // .subscribe(zip => {
    //   console.log(zip);
    // this.searchService.createAPIObservable(zip)
    // .subscribe((response) => {
    //   console.log(response);
    //   this.weather = response;
    // });
    // })
  }
  search(): void {
    if (this.keyword) {
      this.router.navigateByUrl('/search/' + this.keyword);
    }
  }
}
