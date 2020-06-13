import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MatchDashboardComponent } from './match-dashboard/match-dashboard.component';


const routes: Routes = [
  {
    path:'',
    component: MatchDashboardComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatchesRoutingModule { }
