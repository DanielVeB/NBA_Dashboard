import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      {
        path: 'matches',
        loadChildren: () => import('./../modules/matches/matches.module').then(m => m.MatchesModule)  
      },
      {
        path: 'players',
        loadChildren: () => import('./../modules/players/players.module').then(m => m.PlayersModule)  
      },
      {
        path: 'teams',
        loadChildren: () => import('./../modules/teams/teams.module').then(m => m.TeamsModule)  
      }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
