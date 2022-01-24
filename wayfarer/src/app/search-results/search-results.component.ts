import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from './../services/city';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  posts: any[] = [];
  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.posts = this.cityService.getPostByKeyword('food');
  }
}
