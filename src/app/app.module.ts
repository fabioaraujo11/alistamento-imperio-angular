import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DivisaoComponent } from './divisao/divisao.component';
import { IndexComponent } from './index/index.component';
import { StormtrooperComponent } from './divisao/stormtrooper/stormtrooper.component';
import { OfficerComponent } from './divisao/officer/officer.component';
import { OfficerListComponent } from './divisao/officer/officer-list/officer-list.component';
import { StormtrooperListComponent } from './divisao/stormtrooper/stormtrooper-list/stormtrooper-list.component';

@NgModule({
  declarations: [
    AppComponent,
    DivisaoComponent,
    IndexComponent,
    StormtrooperComponent,
    OfficerComponent,
    OfficerListComponent,
    StormtrooperListComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
