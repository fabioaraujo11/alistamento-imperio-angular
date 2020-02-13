import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

import { Stormtrooper } from './Stormtrooper';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};

@Component({
  selector: 'app-stormtrooper',
  templateUrl: './stormtrooper.component.html',
  styleUrls: ['./stormtrooper.component.css']
})

export class StormtrooperComponent implements OnInit {

  stormtroopers: any = [];
  pelotoes: any = [];

  url = 'http://localhost:8080/stormtrooper';
  urlPelotao = 'http://localhost:8080/pelotao';

  profileForm = new FormGroup({
    idGalaxy: new FormControl(''),
    nmCompleto: new FormControl(''),
    dtNasc: new FormControl(''),
    altura: new FormControl(''),
    peso: new FormControl(''),
    pelotao: new FormControl(''),
    planeta: new FormControl('')
  });

  constructor(
    private http: HttpClient,
    private router: Router) {

    this.getPelotao();
  }

  addHero(storm: Stormtrooper) {
    this.http.post<Stormtrooper>(this.url, storm, httpOptions).subscribe(storm => this.stormtroopers.push(storm));
  }

  ngOnInit() { }

  onSubmit() {
    console.warn(this.profileForm.value);
    this.addHero(this.profileForm.value);
    this.router.navigate(['/stormtrooper-list']);
  }

  getPelotao() {
    this.http
      .get<any[]>(this.urlPelotao)
      .subscribe(pelotoes => {
        this.pelotoes = pelotoes
      });
  }
}
