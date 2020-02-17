import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-officer-list',
  templateUrl: './officer-list.component.html',
  styleUrls: ['./officer-list.component.css']
})
export class OfficerListComponent implements OnInit {

  officers: any = [];
  url = 'https://stark-gorge-35941.herokuapp.com/funcionario';

  constructor(private http: HttpClient) {
    http
      .get<any[]>(this.url)
      .subscribe(officers => {
        this.officers = officers
      });
  }

  ngOnInit() {
  }

}
