import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DivisaoComponent } from './divisao/divisao.component';
import { IndexComponent } from './index/index.component';


const routes: Routes = [
  { path: '', component: IndexComponent },
  { path: 'divisao', component: DivisaoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
