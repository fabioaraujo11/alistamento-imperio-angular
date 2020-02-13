import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisaoComponent } from './divisao/divisao.component';
import { IndexComponent } from './index/index.component';
import { StormtrooperComponent } from './divisao/stormtrooper/stormtrooper.component';
import { OfficerComponent } from './divisao/officer/officer.component';
import { OfficerListComponent } from './divisao/officer/officer-list/officer-list.component';
import { StormtrooperListComponent } from './divisao/stormtrooper/stormtrooper-list/stormtrooper-list.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'divisao', component: DivisaoComponent },
  { path: 'stormtrooper', component: StormtrooperComponent},
  { path: 'officer', component: OfficerComponent},
  { path: 'officer-list', component: OfficerListComponent},
  { path: 'stormtrooper-list', component: StormtrooperListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
