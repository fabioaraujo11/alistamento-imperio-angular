import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Officer } from './Officer';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-officer',
  templateUrl: './officer.component.html',
  styleUrls: ['./officer.component.css']
})
export class OfficerComponent implements OnInit {

  officers: any = [];
  setores: any = [];

  url = 'https://stark-gorge-35941.herokuapp.com/funcionario';
  urlSetor = 'https://stark-gorge-35941.herokuapp.com/setor';

  profileForm = new FormGroup({
    idGalaxy: new FormControl(''),
    nmCompleto: new FormControl(''),
    dtNasc: new FormControl(''),
    altura: new FormControl(''),
    peso: new FormControl(''),
    setor: new FormControl(''),
    planeta: new FormControl('')
  });

  constructor(
    private http: HttpClient,
    private router: Router
  ) {
    this.getSetor();
  }

  addHero(officer: Officer) {
    this.http.post<Officer>(this.url, officer, httpOptions).subscribe(officer => this.officers.push(officer));
  }

  ngOnInit() {

  }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.addHero(this.profileForm.value);
    this.router.navigate(['/officer-list']);
  }

  getSetor() {
    this.http
      .get<any[]>(this.urlSetor)
      .subscribe(setores => {
        this.setores = setores
      });
  }

}
