import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CityService } from './../services/city/city.service';

@Component({
  selector: 'app-search-results',
  templateUrl: './search-results.component.html',
  styleUrls: ['./search-results.component.css'],
})
export class SearchResultsComponent implements OnInit {
  posts: any[] = [];
  keyword: string | null = '';

  constructor(
    private cityService: CityService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.keyword = params.get('keyword');
      console.log(this.keyword);
      this.posts = this.cityService.getAllPostByKeyword(this.keyword);
    });
    console.log(this.posts);
  }
}
