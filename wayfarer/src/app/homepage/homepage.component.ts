import { Component, OnInit } from '@angular/core';
import {SearchService } from './../search/search.service'
import { debounceTime, Subject } from 'rxjs'; // observable

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],

})
export class HomepageComponent implements OnInit {
 
  constructor() { }

  ngOnInit(): void {  // listen to the event
 
  }

}
