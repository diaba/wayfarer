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
  constructor(
    private cityService: CityService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {

  }
  search(): void {
    if (this.keyword) {
      this.router.navigateByUrl('/search/' + this.keyword);
    }
  }
}
