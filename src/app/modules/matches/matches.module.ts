import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatchesRoutingModule } from './matches-routing.module';
import { MatchDashboardComponent } from './match-dashboard/match-dashboard.component';


@NgModule({
  declarations: [MatchDashboardComponent],
  imports: [
    CommonModule,
    MatchesRoutingModule
  ]
})
export class MatchesModule { }
