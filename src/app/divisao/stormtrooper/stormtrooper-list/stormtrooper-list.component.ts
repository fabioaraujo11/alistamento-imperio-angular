import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-stormtrooper-list',
  templateUrl: './stormtrooper-list.component.html',
  styleUrls: ['./stormtrooper-list.component.css']
})
export class StormtrooperListComponent implements OnInit {
  
  stormtroopers: any = [];
  url = 'http://localhost:8080/stormtrooper';

  constructor(private http: HttpClient) {
    http
      .get<any[]>(this.url)
      .subscribe(stormtroopers => {
        this.stormtroopers = stormtroopers
      });
  }

  ngOnInit() {
  }

}
